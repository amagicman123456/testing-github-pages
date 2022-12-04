'use strict';
var button = document.querySelector("button")
var Router = {
    root: '#/',
    routes: [],
    urls: [],
    titles: [],
    navigate: function() {
        location.hash = this.root;
        return this;
    },
    add: function(thePath, theUrl, theTitle) {
        this.routes.push(thePath);
        this.urls.push(theUrl);
        this.titles.push(theTitle);
    },

    loader: function() {
        this.navigate();
        var r = this.routes;
        var u = this.urls;
        window.onload = function() {
            $("#view").load("tpl/home.html");
        };
        window.onhashchange = function() {
            for (var i = 0; i < r.length; i++) {
                if (location.hash == r[i]) {
                    $("#view").load(u[i]);
                }
            }
        };
    }
};
button.addEventListener('click', function(){
    var route = Router.add("#/yes", window.location.href, "yeee");
    window.location.href = route
    // Router.add("#/no", window.location.href, "noo");
    Router.loader();
})