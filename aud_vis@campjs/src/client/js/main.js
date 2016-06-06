/*
*  require all files here
*/

var $ = require('./utils')();
var scroll = require('./scroll');
var Jump = require('jump.js');

(function(window, document, undefined, callback){

    document.addEventListener('DOMContentLoaded', function(evt) {

        //* Storing all elements *//
        var moon = $.qSelect('.scroll');
        var hamburger = $.qSelect('.container-hamburger');
        var logo = $.qSelect('.container-logo');
       
        //* Click handlers *//
        hamburger.onclick = function (evt) {
            $.toggleClass(this.parentNode, 'items-visible');
        };

        logo.onclick = function (evt) {
            $.toggleClass(this.children[0], '-flyRight');
        };

        document.onclick= function (evt) { 
            if (evt.target.classList[0] === 'scroll') {
                $.removeClass(moon, '-dimAndShrink');
                $.addClass(moon, '-glowAndExpand');
            } else {
                $.addClass(moon, '-dimAndShrink');
            }
        };

        var ting = new Jump();
    });

    window.onload = function () {
        //.. handle scripts on window loaded
        // This will fire second
        
        
    };
})(window, document, undefined, function(){});
