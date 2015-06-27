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

// Serve static files before creating a Klein inctance
// see http://stackoverflow.com/questions/24222517/how-to-serve-static-files-using-klein-php
// and http://php.net/manual/en/features.commandline.webserver.php
if (preg_match('#^/(bower_components|js|css|images)/#', $_SERVER["REQUEST_URI"])) {
    return false;    // serve the requested resource as-is.
}

// Load core system
require_once __DIR__ . '/../includes/core.php';