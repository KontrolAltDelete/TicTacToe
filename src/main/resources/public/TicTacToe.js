var trs = document.getElementsByTagName("tr");
var tds = document.getElementsByTagName("td");
var indexNr = document.getElementById("indexNr");
var fields = [9];
var turn = true;

class field{
	constructor(done, td, index){
	    this.done = done;
	    this.td = td;
	    this.index = index;
  	}
}

window.onload = function(){
	makeFields();
	fields.forEach(makeClick);
}

function makeFields(){
	for(var i = 0; i < 9; i++)
		fields[i] = new field(false, tds[i], i+1);
}
/*
function makeClick(item){
	item.td.onclick = function(){
		if(item.done == false)
		{
			item.done = true;
			item.td.style.backgroundImage = turn == true ? "url(img/X.png)" : "url(img/O.png)";
			turn = !turn;
			indexNr.innerHTML = item.index;
		}
	}
}
*/
$('body').delegate('td', 'click', function() {
		var index = $( "td" ).index( this ) + 1;
		$.ajax({
			type: 'POST',
			url: '/makeMove',
			dataType: 'json',
			data: {move: index},
			success: function(data) {
				if (data) {
					console.log("move: " + data);
				}
			}
		});	
		
	});
