var i;
var j;
var rec = document.getElementById('rectangle');
var start = document.getElementById('start');
var stop = document.getElementById('stop');

function randomPosition() {
	i = Math.floor((Math.random()*1000));
	j = Math.floor((Math.random()*600));
	rec.style.left = i +'px';
	rec.style.top = j + 'px';
}
randomPosition();
function getStart() {
	rec.addEventListener('mouseover', randomPosition);
}

function removeEvent() {
	rec.removeEventListener('mouseover', randomPosition);
}

start.addEventListener('click', getStart);
stop.addEventListener('click', removeEvent);


