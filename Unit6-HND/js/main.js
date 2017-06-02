var i;
var j;
var x;
var y;
var rec = document.getElementById('rectangle');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var drag = document.getElementById('drag');
var container = document.getElementById('container');

function randomPosition() {
	i = Math.floor((Math.random()*820));
	j = Math.floor((Math.random()*550));
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

function getMouse(event) {
 	x = event.clientX;
 	y = event.clientY;
	rec.style.left = x + 'px';
	rec.style.top = y + 'px';
}

function startDrag() {
	container.addEventListener('mousemove', getMouse);
	rec.style.background = " blue";
}
function stopDrag() {
	container.removeEventListener('mousemove',getMouse);
	rec.style.background = " purple";

}
function dragRec() {
	rec.removeEventListener('mouseover', randomPosition);
	rec.addEventListener('mousedown', startDrag);
	rec.addEventListener('mouseup', stopDrag );
}

start.addEventListener('click', getStart);
stop.addEventListener('click', removeEvent);
drag.addEventListener('click', dragRec);

for(var i=0; i<10; i++) {
	(function(x){
setTimeout(function() {
  console.log("so thu tu: " + i); } ,2000);
})(i);
};
var a;
setTimeout(function() {
	console.log(a);
},2000);
