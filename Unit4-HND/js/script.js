var dog = {
	name: 'boo',
	picture: './images/dog.jpg',
	class: 'pet',
	action: function() {
		alert('boo said hello everybody');
	}
}

function showDog() {
	var eInfo = document.getElementById('animal').children;
	eInfo[0].innerHTML = dog.name + ', ' + dog.class;
	eInfo[1].src = dog.picture;
	//cách 1
	eInfo[3].onclick = dog.action;
	//cách 2
	//eInfo[3].addEventListener("click", dog.action);
}
