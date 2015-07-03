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
    
    linkLayout();
    
    $(window).resize(linkLayout);
    
    function linkLayout() {
        var o = {x: $(window).width() / 2, y: $(window).height() / 2};
        var s = {
            width: $('#master-link').width(),
            height: $('#master-link').height()
        };
        
        $('#master-link').css({
            left: ($(window).width() - s.width) / 2,
            top: ($(window).height() - s.height) / 2
        });
        
        $('.link.servant').each(function (index) {
            // Archimedes Screw
            // r = 100 / Math.PI * θ
            var r = Math.sqrt(index + 2) * 100;
            var θ = Math.sqrt(index + 2) * Math.PI;
            $(this).css({
                left: r * Math.cos(θ) + o.x - s.width / 2,
                top: r * Math.sin(θ) + o.y - s.height / 2
            });
        });
    }
});