function nightmode(){
	if(document.getElementById('kapcsolo').checked){
		document.getElementById('allapot').innerHTML = "ON&nbsp;";
		document.body.style.background = "#000";
		document.body.style.color = "#FFF";
		var metart = document.getElementsByClassName('metodus-tart');
		for(var i=0; i<metart.length; i++){
			metart[i].style.backgroundColor = "#404040";
			metart[i].style.border = "1px solid white";
		}/*c8c8c8*/
		var linkszine = document.getElementsByTagName("a");
		for(var i=0; i<linkszine.length; i++){
			linkszine[i].style.color = "#909090";
		}
		var tabok = document.getElementsByClassName("tab-content");
		for(var i=0; i<tabok.length; i++){
			tabok[i].style.backgroundColor = "#505050";
		}
		var inputok = document.getElementsByTagName("input");
		for(var i=0; i<inputok.length; i++){
			inputok[i].style.backgroundColor = "#000";
			inputok[i].style.border = "0.5px solid white";
		}
	}else{
		document.getElementById('allapot').innerHTML = "OFF";
		document.body.style.background = "#FFF";	
		document.body.style.color = "#000";
		document.getElementsByClassName('metodus-tart');
		var metart = document.getElementsByClassName('metodus-tart');
		for(var i=0; i<metart.length; i++){
			metart[i].style.backgroundColor = "lightgrey";
			metart[i].style.border = "1px solid black";
		}
		var linkszine = document.getElementsByTagName("a");
		for(var i=0; i<linkszine.length; i++){
			linkszine[i].style.color = "black";
		}
		var tabok = document.getElementsByClassName("tab-content");
		for(var i=0; i<tabok.length; i++){
			tabok[i].style.backgroundColor = "#FFF";
		}
		var inputok = document.getElementsByTagName("input");
		for(var i=0; i<inputok.length; i++){
			inputok[i].style.backgroundColor = "#FFF";
			inputok[i].style.border = "0.5px solid black";
		}		
	}
}