function changeText() {
	var ele = document.getElementById('intro');
	ele.innerHTML = 'My Name is Dinh . Nice to meet you!'
}

function changeDog() {
	document.body.style.backgroundImage = "url('./images/dog.jpg')";
}

function changeCat() {
	document.body.style.backgroundImage = "url('./images/cat.jpg')";
}

function changeAttr() {
	var attr = document.getElementById('intro');
	//cách 1
	attr.setAttribute("class", "text");
	//cách 2
	//attr.setAttribute("style", "border: solid 5px red; color: red; font-size: 30px");
}
