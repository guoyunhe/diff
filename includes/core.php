<?php

/* 
 * Copyright (C) 2015 Guo Yunhe <guoyunhebrave@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or (at
 * your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// Initialize system

// Composer autoload
require_once __DIR__ . '/../vendor/autoload.php';

// Config Smarty template engine
$smarty = new Smarty();
$smarty->setTemplateDir(__DIR__ . '/../templates/');
$smarty->setCompileDir(__DIR__ . '/../template-compile/');
$smarty->setConfigDir(__DIR__ . '/../config/');
$smarty->setCacheDir(__DIR__ . '/../cache/');


// Setup Klein routing pattern
$klein = new \Klein\Klein();

// Home page
$klein->respond('GET', '/', function () {
    global $smarty;
    $smarty->display('home.tpl');
});

// Diff a link
// URL http://diff.guoyunhe.me/diff?q=https%3A%2F%2Fgithub.com%2Fguoyunhe
$klein->respond('GET', '/diff', function ($request, $response) {
    global $smarty;
    $smarty->assign([
        'id' => 12345,
        'url' => $request->url,
        'differences' => [
            [
                'id' => 10234,
                'title' => 'LibreOffice - Wikipedia, the free encyclopedia',
                'url' => 'https://en.wikipedia.org/wiki/LibreOffice',
            ],
            [
                'id' => 10235,
                'title' => 'LibreOffice - Wikipedia, the free encyclopedia',
                'url' => 'https://en.wikipedia.org/wiki/LibreOffice',
            ],
            [
                'id' => 10237,
                'title' => 'LibreOffice - Wikipedia, the free encyclopedia',
                'url' => 'https://en.wikipedia.org/wiki/LibreOffice',
            ],
            [
                'id' => 10297,
                'title' => 'LibreOffice - Wikipedia, the free encyclopedia',
                'url' => 'https://en.wikipedia.org/wiki/LibreOffice',
            ],
            [
                'id' => 10312,
                'title' => 'LibreOffice - Wikipedia, the free encyclopedia',
                'url' => 'https://en.wikipedia.org/wiki/LibreOffice',
            ],
            [
                'id' => 12456,
                'title' => 'LibreOffice - Wikipedia, the free encyclopedia',
                'url' => 'https://en.wikipedia.org/wiki/LibreOffice',
            ],
            [
                'id' => 12743,
                'title' => 'LibreOffice - Wikipedia, the free encyclopedia',
                'url' => 'https://en.wikipedia.org/wiki/LibreOffice',
            ],
            [
                'id' => 12991,
                'title' => 'LibreOffice - Wikipedia, the free encyclopedia',
                'url' => 'https://en.wikipedia.org/wiki/LibreOffice',
            ],
            [
                'id' => 12992,
                'title' => 'LibreOffice - Wikipedia, the free encyclopedia',
                'url' => 'https://en.wikipedia.org/wiki/LibreOffice',
            ],
            [
                'id' => 13003,
                'title' => 'LibreOffice - Wikipedia, the free encyclopedia',
                'url' => 'https://en.wikipedia.org/wiki/LibreOffice',
            ],
        ]
    ]);
    $smarty->display('diff.tpl');
});

// View: Add new link, URL http://diff.guoyunhe.me/link/add
$klein->respond('GET', '/link/add', function ($request, $response) {
});

// API: add new link
$klein->respond('POST', '/link/add', function ($request, $response) {
});

/**
 * API: edit a link
 * [Request]
 * link_id
 * 
 */

$klein->respond('POST', '/link/edit', function ($request, $response) {
});

/**
 * API: remove a link
 */

$klein->respond('POST', '/link/remove', function ($request, $response) {
});

// Club business router, URL http://example.com/club/rabbit_night_club

$klein->dispatch();