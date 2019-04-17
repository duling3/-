(function() {
	var htmlSize = window.innerWidth * 1 / 3.75;
	var gethtml = document.querySelector('html');
	gethtml.style.fontSize = htmlSize + 'px';
	window.onresize = function() {
		var htmlSize = window.innerWidth * 1 / 3.75;
		var gethtml = document.querySelector('html');
		gethtml.style.fontSize = htmlSize + 'px';
	}
})()