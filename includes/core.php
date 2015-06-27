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

// Router
// Serve static files before creating a Klein inctance
// see http://stackoverflow.com/questions/24222517/how-to-serve-static-files-using-klein-php
// and http://php.net/manual/en/features.commandline.webserver.php
if (preg_match('#^/(components|js|css|images)/#', $_SERVER["REQUEST_URI"])) {
    return false;    // serve the requested resource as-is.
}

$smarty->assign('site_name',$bp_config['site_name']);
$smarty->assign('site_tagline',$bp_config['site_tagline']);

// Setup Klein routing pattern
$klein = new \Klein\Klein();

// Home page
$klein->respond('GET', '/', function () {
    global $smarty;
    $smarty->display('home.tpl');
});

// View: View link, URL http://diff.guoyunhe.me/link/https%3A%2F%2Fgithub.com%2Fguoyunhe
$klein->respond('GET', '/link/[:url]', function ($request, $response) {
    global $smarty;
    global $db_continent;
    global $db_country;
    global $db_city;
    $city = $db_city[$request->city];
    $country = $db_country[$request->country];
    $continent = $db_continent[$country['continent']];
    
    $smarty->assign('city', $city);
    $smarty->assign('country', $country);
    $smarty->assign('continent', $continent);

    $smarty->display('city.tpl');
});

// View: Add new link, URL http://diff.guoyunhe.me/link/add
$klein->respond('GET', '/link/add', function ($request, $response) {
    global $smarty;
    global $db_country;
    $country = $db_country[$request->country];
    $smarty->assign('country_name', $country['display_name']);

    $smarty->display('country.tpl');
});

// API: add new link
$klein->respond('POST', '/link/add', function ($request, $response) {
    global $smarty;
    global $db_country;
    $country = $db_country[$request->country];
    $smarty->assign('country_name', $country['display_name']);

    $smarty->display('country.tpl');
});

/**
 * API: edit a link
 * [Request]
 * link_id
 * 
 */

$klein->respond('POST', '/link/edit', function ($request, $response) {
    global $smarty;
    global $db_country;
    $country = $db_country[$request->country];
    $smarty->assign('country_name', $country['display_name']);

    $smarty->display('country.tpl');
});

/**
 * API: remove a link
 */

$klein->respond('POST', '/link/remove', function ($request, $response) {
    global $smarty;
    global $db_country;
    $country = $db_country[$request->country];
    $smarty->assign('country_name', $country['display_name']);

    $smarty->display('country.tpl');
});

// Club business router, URL http://example.com/club/rabbit_night_club

$klein->dispatch();