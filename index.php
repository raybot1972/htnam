<?php
declare(strict_types=1);

/**
 * HTIT cPanel entry point.
 *
 * Keep this file small. The editable site markup remains in site.html and the
 * maintenance switch lives in config.php.
 */

$config = require __DIR__ . '/config.php';
$contentFile = __DIR__ . '/content/site-content.json';
$content = [];

if (is_readable($contentFile)) {
    $decodedContent = json_decode((string) file_get_contents($contentFile), true);
    if (is_array($decodedContent)) {
        $content = $decodedContent;
    }
}

$cmsMaintenanceMode = (bool) ($content['settings']['maintenanceMode'] ?? false);
$maintenanceMode = (bool) ($config['maintenance_mode'] ?? false) || $cmsMaintenanceMode;

header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');

if ($maintenanceMode) {
    $retryAfter = max(60, (int) ($config['maintenance_retry_after_seconds'] ?? 3600));
    http_response_code(503);
    header('Retry-After: ' . $retryAfter);
    header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
    readfile(__DIR__ . '/maintenance.html');
    exit;
}

header('Content-Type: text/html; charset=UTF-8');

$template = (string) file_get_contents(__DIR__ . '/site.html');
$pageTitle = (string) ($content['site']['title'] ?? 'HTIT — Where People Meet Technology');
$metaDescription = (string) ($content['site']['metaDescription'] ?? 'Engineering and AI solutions partner.');
$cmsJson = json_encode(
    $content,
    JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT
);

echo strtr($template, [
    '{{PAGE_TITLE}}' => htmlspecialchars($pageTitle, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'),
    '{{META_DESCRIPTION}}' => htmlspecialchars($metaDescription, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'),
    '<!-- CMS_CONTENT -->' => '<script>window.HTIT_CMS_CONTENT=' . ($cmsJson ?: '{}') . ';</script>',
]);
