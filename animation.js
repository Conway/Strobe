//credit: http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

if(getParameterByName('col1') != null){
var color1 = getParameterByName('col1');
}
else{
  var color1 = 'black';
}
if(getParameterByName('col2') != null){
var color2 = getParameterByName('col2');
}
else{
  var color2 = 'white';
}
if(getParameterByName('duration') != null){
var duration = getParameterByName('duration') + "s";
}
else{
  var duration = '0.1s';
}

var css = `
     <style>
    @keyframes strobe {
    from {
        background:` + color1 + `;
        color:` + color2 + `;
    }
    to {
        background:` + color2 + `;
        color:` + color1 + `;
    }
}

html {
    animation-duration:` + duration + `;
    animation-name: strobe;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
</style>
`;
$("head").append(css);
