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
    // Header
    var app = new App();
    window.app = app;

    var links = new Links();
    window.links = links;

    $('#list .link').each(function () {
        var link = new Link($(this).data('link-id'));
        links.add(link);
    });

    links.layout();
});


function App() {
    this.listViewElement = $('#list');
    this.graphViewElement = $('#graph');

    this.listButtonElement = $('#list-button');
    this.graphButtonElement = $('#graph-button');

    this.graphListSwitch();
    this.graphDraggable();
}

App.prototype.openList = function () {
    this.listViewElement.addClass('active');
    this.graphViewElement.removeClass('active');
};

App.prototype.openGraph = function () {
    this.listViewElement.removeClass('active');
    this.graphViewElement.addClass('active');
};

App.prototype.graphListSwitch = function () {
    var that = this;
    // Switch graph view and list view
    this.listButtonElement.click(function () {
        that.openList();
    });
    this.graphButtonElement.click(function () {
        that.openGraph();
    });
};

App.prototype.graphDraggable = function () {
    // Use interact.js, support touch screen devices
    interact('#graph .inner').draggable({
        inertia: true,
        restrict: {
            restriction: "parent",
            endOnly: true,
            elementRect: {top: 0, left: 0, bottom: 1, right: 1}
        },
        onmove: dragMoveListener
    });

    function dragMoveListener(event) {
        var $target = $(event.target);
        var x = ($target.data('x') || 0) + event.dx;
        var y = ($target.data('y') || 0) + event.dy;

        // translate the element
        $target.css({
            transform: 'translate(' + x + 'px, ' + y + 'px)'
        });
        // update the posiion attributes
        $target.data('x', x);
        $target.data('y', y);
    }
    
    var $graph = $('#graph');
    var $outer = $('#graph .outer'); // Drag boundary
    var $inner = $('#graph .inner'); // Drag target
    function alignCenter() {
        if($graph.width() > $inner.width()) {
            $outer.width($inner.width());
        } else {
            $outer.width($graph.width() + 2 * ($inner.width() - $graph.width()));
        }
        if($graph.height() > $inner.height()) {
            $outer.height($inner.height());
        } else {
            $outer.height($graph.height() + 2 * ($inner.height() - $graph.height()));
        }
        $outer.css({
            left: ($graph.width() - $outer.width()) / 2 + 'px',
            top: ($graph.height() - $outer.height()) / 2 + 'px'
        });
        $inner.css({
            left: ($outer.width() - $inner.width()) / 2 + 'px',
            top: ($outer.height() - $inner.height()) / 2 + 'px'
        });
        
        // translate the element
        $inner.css({
            transform: 'translate(' + 0 + ', ' + 0 + ')'
        });
        // update the posiion attributes
        $inner.data('x', 0);
        $inner.data('y', 0);
    }
    alignCenter();
    $(window).resize(alignCenter);
};