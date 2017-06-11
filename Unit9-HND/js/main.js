function getText(){
	var rT = document.getElementById('value3').value;
	var text = document.getElementById('result-text');
	var number = /[0-9]/g;
	var resultNumber = rT.match(number);
	var sumNumber = 0;
	for ( var i =0; i<resultNumber.length; i++) {
		sumNumber += parseInt(resultNumber[i]);
	}
	text.innerHTML = sumNumber;
}

var sN = document.getElementById('sum-number');
sN.addEventListener('click', getText);



