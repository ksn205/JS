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
function alertLose() {
	alert('you lose the game!!! *LoL*');
}
function getStart() {
	rec.removeEventListener('mouseover', alertLose);
	rec.addEventListener('mouseover', randomPosition);

}

function removeEvent() {
	rec.removeEventListener('mouseover', randomPosition);
	alertLose();
}

start.addEventListener('click', getStart);
stop.addEventListener('click', removeEvent);


