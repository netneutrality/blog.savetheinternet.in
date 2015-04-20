/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

        var twitterLink = $("#twitter").data("link");

        if(twitterLink != undefined){
        	$(".twitter").removeClass("hidden");
        	$("#twitter-link").attr("href", twitterLink);
        }

        $("#showEmail").click(function(e){
        	e.preventDefault();
        	$(".input-group").addClass("show");
        });

    });

}(jQuery));