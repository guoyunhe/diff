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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
 * General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

$(function () {
    var viewSwitch = new ViewSwitch();
    
    var links = new Links();
    
    $('#list .link').each(function(){
        var link = new Link($(this).data('link-id'));
        links.add(link);
    });
    
    links.layout();
});

/**
 * Switch list and graph view.
 * @returns {ViewSwitch}
 */

function ViewSwitch() {
    var $listViewElement = $('#list');
    var $graphViewElement = $('#graph');

    var openList = function () {
        $listViewElement.addClass('active');
        $graphViewElement.removeClass('active');
    };


    var openGraph = function () {
        $graphViewElement.addClass('active');
        $listViewElement.removeClass('active');
        
    };

    // Bind events
    $('#list-button').click(openList);
    $('#graph-button').click(openGraph);

    return {
        openList: openList,
        openGraph: openGraph
    };
}

