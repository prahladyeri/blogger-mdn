/**
* Main script file for storing all functions related to blogger-mdn
* 
* @author Prahlad Yeri<prahladyeri@yahoo.com>
* @license Apache-2.0
* @date
* created 2020-08-01
*/

/**
* Handle the window.hashchange event
*/
function hashchange() {
	//console.log("onhashchange:", location.hash);
	var hash = location.hash;
	var path = hash.substring(1);
	var title = path[0].toUpperCase() + path.substring(1);
	$("#lblRoute").text("/"+path);
	console.log('title', title);
	document.title = title + " - " + document.title;
	switch(path) {
		case "connect":
			/*@todo: check if connected to blogger
			if not, prompt for connection.
			if yes, fill blogs dropdown, set current blog, display list from current blog
			*/
		case "about":
		default:
	}
}

/**
* Initialize the app
*/
function init() {
	//change_route('home')
	$(window).on('hashchange', hashchange);
	
	if (location.hash=="") {
		location.hash = "#connect";
	}
	else {
		$(window).trigger("hashchange");
	}
}

/**
* Handle the DOMContentLoaded event
*/
window.addEventListener("DOMContentLoaded", function(){
	console.log("domcontent loaded!");
	init();
});