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


// Collection of links

// Constructor
function Links() {
    this.links = [];
}

// Methods

// Add a link
Links.prototype.add = function (link) {
    link.attach();
    this.links.push(link);
    return this;
};

// Remove a link
Links.prototype.remove = function (link) {
    link.detach();
    var index = this.links.indexOf(link);
    if (index > -1) {
        delete links[index];
    }
    return this;
};

// Layout link graph
Links.prototype.layout = function () {
    var i;
    var length = this.links.length;
    for (i = 0; i < length; i++) {
        var r = Math.random() * 200;
        var arc = i / length * 2 * Math.PI;
        this.links[i].setPosition(r * Math.cos(arc), r * Math.sin(arc));
    }
};


// Link

// Constructor
function Link(id, url, title, rating, newElement) {
    this.id = id;

    if (newElement) {
        this.attached = false;
        this.url = url;
        this.title = title;
        this.rating = rating;
        this.listElement = $('#link-list-template .link').clone();
        this.graphElement = $('#link-graph-template .link').clone();
        // TODO: render template
    } else {
        this.attached = true;
        this.listElement = $('#link-' + id + '-list');
        this.graphElement = $('#link-' + id + '-graph');
        this.url = this.listElement.find('.url a').attr('href');
        this.title = this.listElement.find('.title').text();
        this.rating = this.listElement.data('rating');
    }
    
    var that = this;

    // Bind event
    this.listElement.click(function () {
        that.highlight();
    });
    this.graphElement.click(function () {
        that.highlight();
    });
}

// Methods

/**
 * Get link ID
 * @returns {Number}
 */
Link.prototype.getId = function () {
    return this.id;
};

Link.prototype.highlight = function () {
    $('.link').removeClass('active');
    this.listElement.addClass('active');
    this.graphElement.addClass('active');
    var top = this.listElement.position().top;
    var innerHeight = $('#list .inner').height();
    var listItemHeight = this.listElement.height();
    if (top < 0 || top > innerHeight - listItemHeight) {
        this.scrollToListTop();
    }
};

Link.prototype.scrollToListTop = function () {
    var scroll = $('#list .inner').scrollTop() + this.listElement.position().top;
    $('#list .inner').scrollTop(scroll);
};

Link.prototype.setPosition = function (x, y) {
    this.graphElement.css({
        left: $('#graph .inner').width() / 2 + x,
        top: $('#graph .inner').height() / 2 + y
    });
};

Link.prototype.attach = function () {
    if (!this.attached) {
        this.listElement.prependTo('#list .inner');
        this.graphElement.prependTo('#graph .inner');
        this.attached = true;
    }
};

Link.prototype.detach = function () {
    this.listElement.detach();
    this.graphElement.detach();
    this.attached = false;
};

Link.prototype.remove = function () {
    this.listElement.remove();
    this.graphElement.remove();
};