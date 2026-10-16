# HTIT cPanel edition

This folder is a buildless, shared-hosting version of the HTIT site. It keeps
the visual design and interactions from `cursor_site` but does not require
Node.js, Vite, React, a database, or a framework on the server.

## Edit the site

The preferred editing route is the visual dashboard at `/admin/`. On the
first visit, create a password of at least 12 characters. The password is
stored only as a secure hash in `config.local.php`; that file is excluded from
Git. The dashboard edits homepage, service, product, project, client-story,
value, footer, contact, maintenance, team profile, and image content. Pressing **Save &
publish** updates the public site immediately and keeps the ten newest JSON
backups in `content/backups/`.

Dashboard content lives in `content/site-content.json`. The original objects
in `js/data.js` remain design-safe defaults and retain advanced fields that
are intentionally not shown in the CMS.

- `site.html` — document title, description, font links, and asset loading.
- `content/site-content.json` — content managed by the visual dashboard.
- `admin/` — password-protected, flat-file visual CMS.
- `js/data.js` — design defaults and advanced collection fields.
- `js/app.js` — page layouts, navigation, calculators, modals, and form demos.
- `css/styles.css` — colours, spacing, typography, and responsive behaviour.
- `maintenance.html` — the page visitors see while maintenance mode is on.

For ordinary text and image changes, start at `/admin/`. Direct file editing is
still available for advanced design work. The dashboard maintenance switch is
the easiest way to hide the public site during larger edits; `config.php`
remains an emergency maintenance override.

The Google AI Studio image links were removed. Images are served locally from
`images/` so the live site is not dependent on temporary Google asset URLs.
The approved full logo and slogan are stored in
`images/htit-brand-lockup-v2.png`. The simplified header logo is stored in
`images/htit-header-logo-v1.png`. Dashboard uploads are validated PNG, JPG, or
WebP files of up to 5 MB and are stored in `images/uploads/`.
The homepage team mosaic uses the four editable profiles under the dashboard's
**Team** section; each portrait, name, and role can be replaced independently.

## Maintenance mode

Open `config.php` and change:

```php
'maintenance_mode' => false,
```

to:

```php
'maintenance_mode' => true,
```

Visitors then receive the maintenance page with a proper HTTP 503 response.
Switch it back to `false` after the update is checked.

## Local Laragon preview

Either place this folder under Laragon's web root or run its PHP executable
from this directory:

```text
php -S 127.0.0.1:4173
```

Then open `http://127.0.0.1:4173/`.

## cPanel deployment

The correct account is `raymond / htnam.com`; its document root is
`/home2/raymond/public_html` and it is configured for PHP 8.3. The current
root `.htaccess` redirects only the domain homepage to
`https://chilliserv.net/index.php`. The `.htaccess` in this package preserves
the account's cPanel PHP directives and intentionally removes that redirect.

1. Create a dated backup of `/home2/raymond/public_html` before changing it.
2. Do not delete the existing `.well-known`, `aps`, `cal`, `cgi-bin`, `chrapp`,
   `emlimage`, or `hd` folders, or the current `php.ini` and `.user.ini` files.
3. Turn maintenance mode on in `config.php` in the local copy.
4. Upload and extract the *contents* of this folder into
   `/home2/raymond/public_html`, allowing the package `.htaccess` to replace
   the redirecting one only after the backup exists.
5. Visit `https://htnam.com/` and test navigation, images, modals, calculators,
   and responsive layout. Then switch maintenance mode off.

Keep `config.php`, `.htaccess`, `index.php`, `site.html`, `admin/`, and
`content/` together in the document root. The web-server user must be able to
write `content/site-content.json`, `content/backups/`, `images/uploads/`, and
the document root during first-run password setup. No Node.js, Vite, Rails,
Passenger, Softaculous application, or database setup is required.

The consultation and advisory forms are visual prototypes. They currently keep
their values only in the visitor's browser and do not email or store personal
information. Connect them to a real mailbox only after the final contact
address, consent text, and anti-spam approach are chosen.
