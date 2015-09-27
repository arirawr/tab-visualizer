var div = document.createElement('div');
div.style.width = '100vw';
div.style.height = '100vh';
div.style.background = 'url(http://cdn.makeagif.com/media/9-27-2015/RJaBlZ.gif)';
div.style.backgroundSize = 'cover';
div.style.zIndex = '10000';
div.style.position = 'fixed';
div.style.top = '0';
div.style.left = '0';
div.className = 'visualizer';

document.body.appendChild(div);

div.addEventListener('click', function() {
	if(div.style.height === '100vh') {
		div.style.height = '5vh';
	}
	else {
		div.style.height = '100vh';
	}
})