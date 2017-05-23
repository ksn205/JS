// var myBtn1 = document.createElement('button');
// var t1 = document.createTextNode("Mở trang google");
// myBtn1.appendChild(t1);
// myBtn1.id = "btn1";
// document.body.appendChild(myBtn1);
function createBtn(text, IdName) {
	var myBtn = document.createElement('button');
	var t = document.createTextNode(text);
	myBtn.appendChild(t);
	myBtn.id = IdName;
	document.body.appendChild(myBtn);
}
createBtn("Mở trang google", "btnGg");
createBtn("Mở trang facebook", "btnFb");
createBtn("Mở trang đăng kí", "btnReg"); //Register

function openGgPage() {
	window.open().location.href = "https://www.google.com.vn/";
}

function openFbPage() {
	window.open().location.href = "https://www.facebook.com/";
}

function openRegPage() {
	var newWindow = window.open();
	var cssHead = '<head><link rel="stylesheet" type="text/css" href="../css/style.css"></head>';
	newWindow.document.write(cssHead);
	//Cách 1 -------------------------
/*	var myDiv = document.createElement('div');
	myDiv.id = "divNW"

	newWindow.document.write('<body></body>');
	newWindow.document.body.append(myDiv);
		var form = " Form đăng ký ";
		var br = document.createElement('br');
		myDiv.append(form);
		myDiv.append(br);

		var text = [
			"Username: ",
			"Password: ",
			"Ho ten: ",
			"Email: "
		]
		for(var i=0; i < 4; i++){
			var input = document.createElement('input');
			var br1 = document.createElement('br');
			var br2 = document.createElement('br');
			input.type = 'text';
			if(i==1){
				input.type = 'password';
			}
			input.id = 'input'+i;
			input.className = 'box';
			myDiv.append(text[i]);
			myDiv.appendChild(input);
			myDiv.append(br1,br2);
		}

		createBtn("Đăng ký", "btnRegis");
		var idBtn = document.getElementById('btnRegis');
		myDiv.appendChild(idBtn);
		var regMess = {
			message: function() {
				alert('Đăng ký thành công');
			}
		}
		newWindow.document.getElementById('btnRegis').addEventListener("click", regMess.message)
	//
}*/
	//Cách 2
	newWindow.document.write("<div class='divNW'>Form đăng ký<br>");
	newWindow.document.write("Username : <input type='text' class='box'><br><br>");
	newWindow.document.write("Password : <input type='password' class='box'><br><br>");
	newWindow.document.write("Ho Ten : <input type='text' class='box'><br><br>");
	newWindow.document.write("Email : <input type='text' class='box'><br><br>");
	newWindow.document.write("</div>");
	createBtn("Đăng ký", "btnRegis");
	var idBtn = document.getElementById('btnRegis');
	newWindow.document.body.appendChild(idBtn);
	var regMess = {
		message: function() {
			alert('Đăng ký thành công');
		}
	}
	newWindow.document.getElementById('btnRegis').addEventListener("click", regMess.message);
}

function clickBtn(idBtn, loadPage) {
	var id = document.getElementById(idBtn);
	id.addEventListener("click", loadPage);
}
clickBtn('btnGg', openGgPage);
clickBtn('btnFb', openFbPage);
clickBtn('btnReg', openRegPage);
