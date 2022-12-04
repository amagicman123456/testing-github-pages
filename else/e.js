var _location = document.location.toString();
var serverNameIndex = _location.indexOf('/', _location.indexOf('://') + 3);
var serverName = _location.substring(0, serverNameIndex) + '/';
var button = document.querySelector('button');
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
        template = [_location.hash, routes];
        if(template == [-1]){
            _location.hash = root;
            $("#view").load(urls[0]);
        }
    }
};
button.addEventListener('click', function(){
    Router.loader('#about')
})