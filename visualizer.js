alert("file opened");
var div = document.createElement('div');
div.style.width = '100vw';
div.style.height = '100vh';
div.style.backgroundImage = 'url(http://i.giphy.com/juy2vR1O234yI.gif)';
div.style.backgroundSize = 'cover';
div.style.zIndex = '10000';
div.style.position = 'absolute';
div.style.top = '0';
div.style.left = '0';
div.className = "visualizer";

document.body.appendChild(div);