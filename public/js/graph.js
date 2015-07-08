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

/**
 * Collection of links
 * @returns {Links.graphAnonym$1}
 */
function Links() {
    
    var links = [];
    
    var add = function (link) {
        links.push(link);
    };

    var layout = function () {
        var i;
        for (i = 0; i < links.length; i++) {
            var r = Math.random() * 200;
            var arc = i / links.length * 2 * Math.PI;
            links[i].setPosition(r * Math.cos(arc), r * Math.sin(arc));
        }
    };
    
    var remove = function (link) {
        var index = links.indexOf(link);
        if (index > -1) {
            delete links[index];
        }
    };

    return {
        add: add,
        layout: layout
    };
}

/**
 * Link
 * @param {type} id
 * @param {type} url
 * @param {type} title
 * @param {type} rating
 * @param {type} newElement
 * @returns {Link.graphAnonym$3}
 */

function Link(id, url, title, rating, newElement) {
    var $linkInListElement;
    var $linkInGraphElement;
    
    if (newElement) {
        $linkInListElement = $('#link-list-template .link').clone();
        $linkInGraphElement = $('#link-graph-template .link').clone();
    } else {
        $linkInListElement = $('#link-' + id + '-list');
        $linkInGraphElement = $('#link-' + id + '-graph');
    }
    
    var getId = function () {
        return id;
    };

    var highlight = function () {
        $('.link').removeClass('active');
        $linkInListElement.addClass('active');
        $linkInGraphElement.addClass('active');
    };

    // Bind event
    $linkInListElement.click(highlight);
    $linkInGraphElement.click(highlight);
    
    var setPosition = function (x, y) {
        $linkInGraphElement.css({
            left: $('#graph').width() / 2 + x - 20,
            top: $('#graph').height() / 2+ y - 20
        });
    };
    
    var detach = function () {
        $linkInListElement.detach();
        $linkInGraphElement.detach();
    };
    
    var remove = function () {
        $linkInListElement.remove();
        $linkInGraphElement.remove();
    };
    
    return {
        getId: getId,
        highlight: highlight,
        setPosition: setPosition,
        detach: detach,
        remove: remove
    };
}