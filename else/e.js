var _location = document.location.toString();
var serverNameIndex = _location.indexOf('/', _location.indexOf('://') + 3);
var serverName = _location.substring(0, serverNameIndex) + '/';
var button = document.querySelector('button')
function loading() {
    template = [_location.hash, routes];
    if(template == [-1]){
        location.hash = root;
        $("#view").load(urls[0]);
    }
}
button.addEventListener('click', function(){
    loading('#about')
})