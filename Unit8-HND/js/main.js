var s = document.getElementById('result')
function click(cal) {
	var idCal = document.getElementById(cal);
	idCal.addEventListener("click",function () {
		var a = parseInt(document.getElementById('value1').value);
		var b = parseInt(document.getElementById('value2').value);
			if(cal == 'sum') {
				var result = a+b;
				s.value = result;
			}
			else if(cal == 'sub') {
				var result = a-b;
				s.value = result;
			}
			else if(cal == 'multi') {
				var result = a*b;
				s.value = result;
			}
			else if(cal == 'divide') {
				var result = a/b;
				try {
					if(b==0) {
						throw('Error! Do not divide zero')
					}
				}
				catch (err) {
					alert(err);
					result ="";
				}
				finally {
					s.value = result;
				}
			}

		});
}
click('sum');
click('sub');
click('multi');
click('divide');



