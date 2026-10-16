<?php
declare(strict_types=1);

const HTIT_MAX_UPLOAD_BYTES = 5242880;

$root = dirname(__DIR__);
$contentFile = $root . '/content/site-content.json';
$localConfigFile = $root . '/config.local.php';
$backupDirectory = $root . '/content/backups';
$uploadDirectory = $root . '/images/uploads';

header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');
header('Referrer-Policy: same-origin');
header('Permissions-Policy: camera=(), microphone=(), geolocation=()');
header("Content-Security-Policy: default-src 'self'; img-src 'self' data: blob:; style-src 'self'; script-src 'self'; form-action 'self'; base-uri 'none'; frame-ancestors 'self'");
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

session_name('HTIT_ADMIN');
session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/admin',
    'secure' => isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
    'httponly' => true,
    'samesite' => 'Strict',
]);
session_start();

function h(mixed $value): string
{
    return htmlspecialchars((string) $value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function clipped(mixed $value, int $max = 5000): string
{
    $text = trim((string) $value);
    return function_exists('mb_substr') ? mb_substr($text, 0, $max) : substr($text, 0, $max);
}

function load_content(string $path): array
{
    if (!is_readable($path)) {
        return [];
    }
    $content = json_decode((string) file_get_contents($path), true);
    return is_array($content) ? $content : [];
}

function ensure_directory(string $path): bool
{
    return is_dir($path) || mkdir($path, 0755, true);
}

function save_content(string $path, array $content, string $backupDirectory): bool
{
    $json = json_encode($content, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    if ($json === false) {
        return false;
    }

    if (is_file($path) && ensure_directory($backupDirectory)) {
        $backup = $backupDirectory . '/site-content-' . gmdate('Ymd-His') . '.json';
        @copy($path, $backup);
        $backups = glob($backupDirectory . '/site-content-*.json') ?: [];
        rsort($backups);
        foreach (array_slice($backups, 10) as $oldBackup) {
            @unlink($oldBackup);
        }
    }

    $temporary = $path . '.tmp-' . bin2hex(random_bytes(4));
    if (file_put_contents($temporary, $json . PHP_EOL, LOCK_EX) === false) {
        return false;
    }
    @chmod($temporary, 0644);
    if (!rename($temporary, $path)) {
        @unlink($temporary);
        return false;
    }
    return true;
}

function redirect_admin(string $anchor = ''): never
{
    header('Location: ./index.php' . $anchor, true, 303);
    exit;
}

function flash(string $type, string $message): void
{
    $_SESSION['flash'][] = ['type' => $type, 'message' => $message];
}

function csrf_valid(): bool
{
    return isset($_POST['csrf'], $_SESSION['csrf']) && hash_equals((string) $_SESSION['csrf'], (string) $_POST['csrf']);
}

function upload_asset(string $field, string $assetKey, string $uploadDirectory): ?string
{
    if (!isset($_FILES[$field]) || !is_array($_FILES[$field])) {
        return null;
    }
    $file = $_FILES[$field];
    if (($file['error'] ?? UPLOAD_ERR_NO_FILE) === UPLOAD_ERR_NO_FILE) {
        return null;
    }
    if (($file['error'] ?? UPLOAD_ERR_OK) !== UPLOAD_ERR_OK || (int) ($file['size'] ?? 0) > HTIT_MAX_UPLOAD_BYTES) {
        throw new RuntimeException('The ' . $assetKey . ' image could not be uploaded or exceeded 5 MB.');
    }
    if (!is_uploaded_file((string) $file['tmp_name'])) {
        throw new RuntimeException('The uploaded ' . $assetKey . ' file was not accepted by PHP.');
    }

    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mime = $finfo->file((string) $file['tmp_name']);
    $extensions = ['image/png' => 'png', 'image/jpeg' => 'jpg', 'image/webp' => 'webp'];
    if (!isset($extensions[$mime]) || @getimagesize((string) $file['tmp_name']) === false) {
        throw new RuntimeException('Only valid PNG, JPG, and WebP images are allowed.');
    }
    if (!ensure_directory($uploadDirectory)) {
        throw new RuntimeException('The image upload folder is not writable.');
    }

    $filename = $assetKey . '-' . gmdate('Ymd-His') . '-' . bin2hex(random_bytes(3)) . '.' . $extensions[$mime];
    $destination = $uploadDirectory . '/' . $filename;
    if (!move_uploaded_file((string) $file['tmp_name'], $destination)) {
        throw new RuntimeException('The uploaded image could not be saved.');
    }
    @chmod($destination, 0644);
    return 'images/uploads/' . $filename;
}

function field(string $name, string $label, mixed $value, bool $textarea = false, string $hint = ''): string
{
    $control = $textarea
        ? '<textarea name="' . h($name) . '" rows="4">' . h($value) . '</textarea>'
        : '<input type="text" name="' . h($name) . '" value="' . h($value) . '" />';
    $help = $hint !== '' ? '<small>' . h($hint) . '</small>' : '';
    return '<label class="field"><span>' . h($label) . '</span>' . $control . $help . '</label>';
}

if (!isset($_SESSION['csrf'])) {
    $_SESSION['csrf'] = bin2hex(random_bytes(24));
}

$localConfig = is_file($localConfigFile) ? require $localConfigFile : [];
$passwordHash = is_array($localConfig) ? (string) ($localConfig['admin_password_hash'] ?? '') : '';
$isConfigured = $passwordHash !== '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = (string) ($_POST['action'] ?? '');

    if (!csrf_valid()) {
        flash('error', 'Your session expired. Please try again.');
        redirect_admin();
    }

    if ($action === 'setup' && !$isConfigured) {
        $password = (string) ($_POST['password'] ?? '');
        $confirmation = (string) ($_POST['password_confirm'] ?? '');
        if (strlen($password) < 12) {
            flash('error', 'Use a password containing at least 12 characters.');
        } elseif (!hash_equals($password, $confirmation)) {
            flash('error', 'The passwords did not match.');
        } else {
            $hash = password_hash($password, PASSWORD_DEFAULT);
            $php = "<?php\ndeclare(strict_types=1);\n\nreturn [\n    'admin_password_hash' => " . var_export($hash, true) . ",\n];\n";
            if (file_put_contents($localConfigFile, $php, LOCK_EX) !== false) {
                @chmod($localConfigFile, 0600);
                session_regenerate_id(true);
                $_SESSION['authenticated'] = true;
                flash('success', 'Admin password created. Your CMS is ready.');
            } else {
                flash('error', 'Could not create config.local.php. Check folder permissions in cPanel.');
            }
        }
        redirect_admin();
    }

    if ($action === 'login' && $isConfigured) {
        $blockedUntil = (int) ($_SESSION['blocked_until'] ?? 0);
        if ($blockedUntil > time()) {
            flash('error', 'Too many attempts. Wait one minute and try again.');
        } elseif (password_verify((string) ($_POST['password'] ?? ''), $passwordHash)) {
            session_regenerate_id(true);
            $_SESSION['authenticated'] = true;
            $_SESSION['login_attempts'] = 0;
        } else {
            $attempts = (int) ($_SESSION['login_attempts'] ?? 0) + 1;
            $_SESSION['login_attempts'] = $attempts;
            if ($attempts >= 5) {
                $_SESSION['blocked_until'] = time() + 60;
                $_SESSION['login_attempts'] = 0;
            }
            flash('error', 'Incorrect password.');
        }
        redirect_admin();
    }

    if ($action === 'logout') {
        $_SESSION = [];
        session_destroy();
        header('Location: ./index.php', true, 303);
        exit;
    }

    if ($action === 'save' && !empty($_SESSION['authenticated'])) {
        $content = load_content($contentFile);
        $content['settings']['maintenanceMode'] = isset($_POST['maintenanceMode']);

        foreach (['title' => 160, 'metaDescription' => 320, 'consultLabel' => 80] as $key => $limit) {
            $content['site'][$key] = clipped($_POST['site'][$key] ?? '', $limit);
        }
        foreach ([
            'badge' => 140, 'headlineBefore' => 100, 'headlineAccent' => 80, 'headlineAfter' => 120,
            'intro' => 800, 'primaryCta' => 80, 'secondaryCta' => 80,
            'teamTitle' => 120, 'teamSubtitle' => 160, 'teamStatus' => 80,
        ] as $key => $limit) {
            $content['home'][$key] = clipped($_POST['home'][$key] ?? '', $limit);
        }
        for ($index = 0; $index < 3; $index++) {
            $content['home']['metrics'][$index]['value'] = clipped($_POST['metrics'][$index]['value'] ?? '', 40);
            $content['home']['metrics'][$index]['label'] = clipped($_POST['metrics'][$index]['label'] ?? '', 80);
        }
        foreach ([
            'summary' => 800, 'pledge' => 1000, 'primaryOffice' => 120, 'primaryAddress' => 300,
            'secondaryOffice' => 120, 'secondaryAddress' => 300, 'email' => 180, 'phone' => 80,
        ] as $key => $limit) {
            $content['footer'][$key] = clipped($_POST['footer'][$key] ?? '', $limit);
        }

        $collectionFields = [
            'services' => ['title' => 160, 'tagCategory' => 80, 'description' => 1200],
            'products' => ['title' => 160, 'tag' => 100, 'status' => 100, 'shortDesc' => 1200, 'fullDesc' => 4000],
            'projects' => ['title' => 160, 'domain' => 120, 'sprint' => 80, 'description' => 1600, 'milestone' => 160],
            'stories' => ['quote' => 1600, 'author' => 120, 'role' => 180, 'company' => 180, 'challenge' => 2400, 'impact' => 2400],
            'values' => ['title' => 160, 'summary' => 1600, 'detailedManifesto' => 4000],
        ];
        foreach ($collectionFields as $collection => $fields) {
            if (!isset($content[$collection]) || !is_array($content[$collection])) {
                continue;
            }
            foreach ($content[$collection] as $index => &$item) {
                foreach ($fields as $key => $limit) {
                    $item[$key] = clipped($_POST['collections'][$collection][$index][$key] ?? $item[$key] ?? '', $limit);
                }
                if ($collection === 'projects') {
                    $progress = (int) ($_POST['collections'][$collection][$index]['progressPercent'] ?? $item['progressPercent'] ?? 0);
                    $item['progressPercent'] = max(0, min(100, $progress));
                }
            }
            unset($item);
        }

        try {
            foreach (['brandLogo', 'headerLogo', 'teamImage'] as $assetKey) {
                $uploadedPath = upload_asset('upload_' . $assetKey, $assetKey, $uploadDirectory);
                if ($uploadedPath !== null) {
                    $content['assets'][$assetKey] = $uploadedPath;
                }
            }
            if (save_content($contentFile, $content, $backupDirectory)) {
                flash('success', 'Changes saved and published to the live website.');
            } else {
                flash('error', 'The content file could not be saved. Check cPanel permissions.');
            }
        } catch (Throwable $exception) {
            flash('error', $exception->getMessage());
        }
        redirect_admin('#dashboard');
    }
}

$messages = $_SESSION['flash'] ?? [];
unset($_SESSION['flash']);
$authenticated = !empty($_SESSION['authenticated']);
$content = load_content($contentFile);

?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTIT Site Manager</title>
    <meta name="robots" content="noindex,nofollow,noarchive" />
    <link rel="stylesheet" href="admin.css?v=20261015a" />
</head>
<body class="<?= $authenticated ? 'is-dashboard' : 'is-auth' ?>">
<?php if (!$authenticated): ?>
    <main class="auth-shell">
        <section class="auth-card">
            <div class="admin-mark"><span>HT</span><b>HTIT Site Manager</b></div>
            <p class="eyebrow">Secure cPanel content editor</p>
            <h1><?= $isConfigured ? 'Welcome back' : 'Create your admin password' ?></h1>
            <p class="muted"><?= $isConfigured ? 'Sign in to edit and publish website content.' : 'This first-run step creates a private password hash on the server. Use at least 12 characters.' ?></p>
            <?php foreach ($messages as $message): ?>
                <div class="notice <?= h($message['type']) ?>"><?= h($message['message']) ?></div>
            <?php endforeach; ?>
            <form method="post" class="auth-form">
                <input type="hidden" name="csrf" value="<?= h($_SESSION['csrf']) ?>" />
                <input type="hidden" name="action" value="<?= $isConfigured ? 'login' : 'setup' ?>" />
                <label class="field"><span>Password</span><input type="password" name="password" required minlength="<?= $isConfigured ? '1' : '12' ?>" autocomplete="<?= $isConfigured ? 'current-password' : 'new-password' ?>" /></label>
                <?php if (!$isConfigured): ?>
                    <label class="field"><span>Confirm password</span><input type="password" name="password_confirm" required minlength="12" autocomplete="new-password" /></label>
                <?php endif; ?>
                <button class="primary" type="submit"><?= $isConfigured ? 'Sign in' : 'Create dashboard' ?></button>
            </form>
            <p class="tiny">Forgotten password? Delete <code>config.local.php</code> in cPanel to restart setup.</p>
        </section>
    </main>
<?php else: ?>
    <header class="topbar">
        <a class="admin-mark" href="#dashboard"><span>HT</span><b>HTIT Site Manager</b></a>
        <div class="top-actions">
            <span class="status <?= !empty($content['settings']['maintenanceMode']) ? 'maintenance' : 'live' ?>"><?= !empty($content['settings']['maintenanceMode']) ? 'Maintenance mode' : 'Site live' ?></span>
            <a class="ghost" href="../" target="_blank" rel="noopener">View website ↗</a>
            <form method="post"><input type="hidden" name="csrf" value="<?= h($_SESSION['csrf']) ?>" /><input type="hidden" name="action" value="logout" /><button class="ghost" type="submit">Sign out</button></form>
        </div>
    </header>
    <div class="dashboard-shell">
        <aside class="sidebar">
            <p class="eyebrow">Content</p>
            <nav>
                <a href="#dashboard">Overview</a><a href="#homepage">Homepage</a><a href="#branding">Branding & images</a>
                <a href="#services">Services</a><a href="#products">Products</a><a href="#projects">Projects</a>
                <a href="#stories">Client stories</a><a href="#values">Values</a><a href="#footer">Footer & contact</a>
            </nav>
            <p class="sidebar-note">Saving publishes instantly. A timestamped backup is retained automatically.</p>
        </aside>
        <main class="editor">
            <?php foreach ($messages as $message): ?>
                <div class="notice <?= h($message['type']) ?>"><?= h($message['message']) ?></div>
            <?php endforeach; ?>
            <form method="post" enctype="multipart/form-data" id="cms-form">
                <input type="hidden" name="csrf" value="<?= h($_SESSION['csrf']) ?>" />
                <input type="hidden" name="action" value="save" />

                <section class="panel" id="dashboard">
                    <div><p class="eyebrow">Dashboard</p><h1>Website content</h1><p class="muted">Edit the fields below and press Save & publish. The public site reads this content directly—no build step is required.</p></div>
                    <label class="maintenance-toggle"><input type="checkbox" name="maintenanceMode" <?= !empty($content['settings']['maintenanceMode']) ? 'checked' : '' ?> /><span><b>Maintenance mode</b><small>Show the maintenance page to visitors while you make larger changes.</small></span></label>
                    <div class="grid two">
                        <?= field('site[title]', 'Browser title', $content['site']['title'] ?? '') ?>
                        <?= field('site[consultLabel]', 'Header consultation button', $content['site']['consultLabel'] ?? '') ?>
                    </div>
                    <?= field('site[metaDescription]', 'Search description', $content['site']['metaDescription'] ?? '', true, 'Recommended: 140–160 characters.') ?>
                </section>

                <section class="panel" id="homepage">
                    <div class="section-heading"><p class="eyebrow">Homepage</p><h2>Hero message</h2></div>
                    <?= field('home[badge]', 'Eyebrow badge', $content['home']['badge'] ?? '') ?>
                    <div class="grid three">
                        <?= field('home[headlineBefore]', 'Headline opening', $content['home']['headlineBefore'] ?? '') ?>
                        <?= field('home[headlineAccent]', 'Highlighted word', $content['home']['headlineAccent'] ?? '') ?>
                        <?= field('home[headlineAfter]', 'Headline ending', $content['home']['headlineAfter'] ?? '') ?>
                    </div>
                    <?= field('home[intro]', 'Introduction', $content['home']['intro'] ?? '', true) ?>
                    <div class="grid two">
                        <?= field('home[primaryCta]', 'Primary button', $content['home']['primaryCta'] ?? '') ?>
                        <?= field('home[secondaryCta]', 'Secondary button', $content['home']['secondaryCta'] ?? '') ?>
                    </div>
                    <h3>Team card</h3>
                    <div class="grid three">
                        <?= field('home[teamTitle]', 'Title', $content['home']['teamTitle'] ?? '') ?>
                        <?= field('home[teamSubtitle]', 'Subtitle', $content['home']['teamSubtitle'] ?? '') ?>
                        <?= field('home[teamStatus]', 'Status', $content['home']['teamStatus'] ?? '') ?>
                    </div>
                    <h3>Key metrics</h3>
                    <div class="grid three">
                    <?php foreach (array_slice($content['home']['metrics'] ?? [], 0, 3) as $index => $metric): ?>
                        <div class="subcard"><?= field("metrics[$index][value]", 'Value', $metric['value'] ?? '') ?><?= field("metrics[$index][label]", 'Label', $metric['label'] ?? '') ?></div>
                    <?php endforeach; ?>
                    </div>
                </section>

                <section class="panel" id="branding">
                    <div class="section-heading"><p class="eyebrow">Branding</p><h2>Logos and team image</h2><p class="muted">Upload a PNG, JPG, or WebP up to 5 MB. Existing files are retained for rollback.</p></div>
                    <div class="asset-grid">
                    <?php foreach (['headerLogo' => 'Header logo', 'brandLogo' => 'Full brand lockup', 'teamImage' => 'Team photograph'] as $key => $label): ?>
                        <article class="asset-card">
                            <div class="asset-preview"><img src="../<?= h($content['assets'][$key] ?? '') ?>" alt="<?= h($label) ?> preview" data-preview="<?= h($key) ?>" /></div>
                            <h3><?= h($label) ?></h3><p class="tiny path"><?= h($content['assets'][$key] ?? '') ?></p>
                            <label class="upload"><span>Choose replacement</span><input type="file" name="upload_<?= h($key) ?>" accept="image/png,image/jpeg,image/webp" data-upload="<?= h($key) ?>" /></label>
                        </article>
                    <?php endforeach; ?>
                    </div>
                </section>

                <section class="panel" id="services"><div class="section-heading"><p class="eyebrow">Collections</p><h2>Services</h2></div>
                    <div class="cards-list"><?php foreach ($content['services'] ?? [] as $index => $item): ?><details class="content-card"><summary><span><?= h($item['title'] ?? '') ?></span><small><?= h($item['tagCategory'] ?? '') ?></small></summary><div class="card-fields"><div class="grid two"><?= field("collections[services][$index][title]", 'Title', $item['title'] ?? '') ?><?= field("collections[services][$index][tagCategory]", 'Category', $item['tagCategory'] ?? '') ?></div><?= field("collections[services][$index][description]", 'Description', $item['description'] ?? '', true) ?></div></details><?php endforeach; ?></div>
                </section>

                <section class="panel" id="products"><div class="section-heading"><p class="eyebrow">Collections</p><h2>Products</h2></div>
                    <div class="cards-list"><?php foreach ($content['products'] ?? [] as $index => $item): ?><details class="content-card"><summary><span><?= h($item['title'] ?? '') ?></span><small><?= h($item['status'] ?? '') ?></small></summary><div class="card-fields"><div class="grid three"><?= field("collections[products][$index][title]", 'Title', $item['title'] ?? '') ?><?= field("collections[products][$index][tag]", 'Tag', $item['tag'] ?? '') ?><?= field("collections[products][$index][status]", 'Status', $item['status'] ?? '') ?></div><?= field("collections[products][$index][shortDesc]", 'Short description', $item['shortDesc'] ?? '', true) ?><?= field("collections[products][$index][fullDesc]", 'Full description', $item['fullDesc'] ?? '', true) ?></div></details><?php endforeach; ?></div>
                </section>

                <section class="panel" id="projects"><div class="section-heading"><p class="eyebrow">Collections</p><h2>Active projects</h2></div>
                    <div class="cards-list"><?php foreach ($content['projects'] ?? [] as $index => $item): ?><details class="content-card"><summary><span><?= h($item['title'] ?? '') ?></span><small><?= h($item['sprint'] ?? '') ?></small></summary><div class="card-fields"><div class="grid three"><?= field("collections[projects][$index][title]", 'Title', $item['title'] ?? '') ?><?= field("collections[projects][$index][domain]", 'Domain', $item['domain'] ?? '') ?><?= field("collections[projects][$index][sprint]", 'Sprint', $item['sprint'] ?? '') ?></div><?= field("collections[projects][$index][description]", 'Description', $item['description'] ?? '', true) ?><div class="grid two"><?= field("collections[projects][$index][milestone]", 'Milestone', $item['milestone'] ?? '') ?><label class="field"><span>Progress %</span><input type="number" min="0" max="100" name="collections[projects][<?= $index ?>][progressPercent]" value="<?= h($item['progressPercent'] ?? 0) ?>" /></label></div></div></details><?php endforeach; ?></div>
                </section>

                <section class="panel" id="stories"><div class="section-heading"><p class="eyebrow">Collections</p><h2>Client stories</h2></div>
                    <div class="cards-list"><?php foreach ($content['stories'] ?? [] as $index => $item): ?><details class="content-card"><summary><span><?= h($item['company'] ?? '') ?></span><small><?= h($item['author'] ?? '') ?></small></summary><div class="card-fields"><?= field("collections[stories][$index][quote]", 'Client quote', $item['quote'] ?? '', true) ?><div class="grid three"><?= field("collections[stories][$index][author]", 'Author', $item['author'] ?? '') ?><?= field("collections[stories][$index][role]", 'Role', $item['role'] ?? '') ?><?= field("collections[stories][$index][company]", 'Company', $item['company'] ?? '') ?></div><?= field("collections[stories][$index][challenge]", 'Challenge', $item['challenge'] ?? '', true) ?><?= field("collections[stories][$index][impact]", 'Impact', $item['impact'] ?? '', true) ?></div></details><?php endforeach; ?></div>
                </section>

                <section class="panel" id="values"><div class="section-heading"><p class="eyebrow">Collections</p><h2>Values</h2></div>
                    <div class="cards-list"><?php foreach ($content['values'] ?? [] as $index => $item): ?><details class="content-card"><summary><span><?= h($item['title'] ?? '') ?></span><small><?= h($item['number'] ?? '') ?></small></summary><div class="card-fields"><?= field("collections[values][$index][title]", 'Title', $item['title'] ?? '') ?><?= field("collections[values][$index][summary]", 'Summary', $item['summary'] ?? '', true) ?><?= field("collections[values][$index][detailedManifesto]", 'Manifesto', $item['detailedManifesto'] ?? '', true) ?></div></details><?php endforeach; ?></div>
                </section>

                <section class="panel" id="footer"><div class="section-heading"><p class="eyebrow">Footer</p><h2>Company and contact details</h2></div>
                    <?= field('footer[summary]', 'Company summary', $content['footer']['summary'] ?? '', true) ?><?= field('footer[pledge]', 'Integrity pledge', $content['footer']['pledge'] ?? '', true) ?>
                    <div class="grid two"><?= field('footer[primaryOffice]', 'Primary office', $content['footer']['primaryOffice'] ?? '') ?><?= field('footer[primaryAddress]', 'Primary address', $content['footer']['primaryAddress'] ?? '', true) ?><?= field('footer[secondaryOffice]', 'Secondary office', $content['footer']['secondaryOffice'] ?? '') ?><?= field('footer[secondaryAddress]', 'Secondary address', $content['footer']['secondaryAddress'] ?? '', true) ?><?= field('footer[email]', 'Email', $content['footer']['email'] ?? '') ?><?= field('footer[phone]', 'Phone', $content['footer']['phone'] ?? '') ?></div>
                </section>

                <div class="savebar"><span id="dirty-status">No unsaved changes</span><button class="primary" type="submit">Save & publish</button></div>
            </form>
        </main>
    </div>
    <script src="admin.js?v=20261015a"></script>
<?php endif; ?>
</body>
</html>
