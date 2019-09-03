function polubiosz_kod(){
	var betuk = [['a','\xE1','b','c','d','e','\xE9'],['f','g','h','i','\xED','j','k'],['l','m','n','o','\xF3','\xF6','\u0151'],['p','q','r','s','t','u','\xFA'],['\xFC','\u0171','v','w','x','y','z']];
	var be = document.polubiosz_kod_form.polubiosz_kod_be.value.toLowerCase().replace(/[^a-zA-Z0-9\xE1\xE9\xED\xF3\xF6\u0151\xFA\xFA\xFC\u0171]/g,'');
	var ki = "";

	for(var z=0;z<be.length;z++){
		for(var i=0;i<5;i++){
			for(var y=0;y<7;y++){
				if(be.charAt(z)==betuk[i][y]){
					if(z!=be.length-1){
						ki+=""+(i+1)+(y+1)+"-";
					}else{
						ki+=""+(i+1)+(y+1);
					}
				}
			}
		}
	}

	document.polubiosz_kod_form.polubiosz_kod_ki.value = ki;
}

function polubiosz_dekod(){
	var betuk = [['a','\xE1','b','c','d','e','\xE9'],['f','g','h','i','\xED','j','k'],['l','m','n','o','\xF3','\xF6','\u0151'],['p','q','r','s','t','u','\xFA'],['\xFC','\u0171','v','w','x','y','z']];
	var be = document.polubiosz_dekod_form.polubiosz_dekod_be.value.split("-");
	var ki = "";

	for(var i=0;i<be.length;i++){
		ki+=betuk[be[i].charAt(0)-1][be[i].charAt(1)-1].charAt(0);
		ki+=betuk[be[i].charAt(0)-1][be[i].charAt(1)-1].charAt(1);
	}

	document.polubiosz_dekod_form.polubiosz_dekod_ki.value = ki.toUpperCase();
}

function fesu_kod(){
	var be = document.fesu_kod_form.fesu_kod_be.value;
	var sor = document.fesu_kod_form.fesu_kod_kulcs.value;
	var sorhossz = (be.length - (be.length%sor))/sor;
	var ki = "";

	var hosszok = [];
	var maradek = be.length%sor;
	for(var i=0; i<sor; i++){
		if(maradek>0){
			hosszok[i] = sorhossz+1;
			maradek--;
		}else{
			hosszok[i] = sorhossz;
		}
	}

	for(var i=0; i<sor; i++){
		for(var j=0; j<hosszok[i];j++){
			ki += be.charAt((sor*j)+i);
		}
	}

	document.fesu_kod_form.fesu_kod_ki.value = ki.toUpperCase();
}

function fesu_dekod(){
	var be = document.fesu_dekod_form.fesu_dekod_be.value;
	var sor = document.fesu_dekod_form.fesu_dekod_kulcs.value;
	var sorhossz = (be.length - (be.length%sor))/sor;
	var ki = be.split("");

	var hosszok = [];
	var maradek = be.length%sor;
	for(var i=0; i<sor; i++){
		if(maradek>0){
			hosszok[i] = sorhossz+1;
			maradek--;
		}else{
			hosszok[i] = sorhossz;
		}
	}

	var counter = 0;
	for(var i=0; i<sor; i++){
		for(var j=0; j<hosszok[i];j++){
			ki[(sor*j)+i] = be.charAt(counter);
			counter++;
		}
	}

	ki = ki.join("");
	document.fesu_dekod_form.fesu_dekod_ki.value = ki.toUpperCase();
}

function szam_kod(){
	var betuk = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var be = document.szam_kod_form.szam_kod_be.value.replace(/\xE1/g,'a').replace(/\xE9/g,'e').replace(/\xED/g,'i').replace(/[\u0151\xF6\xF3]/g,'o').replace(/[\u0171\xFC\xFA]/g,'u').replace(/[^a-zA-Z0-9]/g,'');
	var be_szam = [];
	var ki = "";
	var kulcs = document.szam_kod_form.szam_kod_kulcs.value.replace(/\xE1/g,'a').replace(/\xE9/g,'e').replace(/\xED/g,'i').replace(/[\u0151\xF6\xF3]/g,'o').replace(/[\u0171\xFC\xFA]/g,'u').replace(/[^a-zA-Z]/g,'');
	var kulcs_szam = [];
	var y = 0;

	for(var i=0;i<be.length;i++){
		if(y==kulcs.length){
			y=0;
		}

		kulcs_szam[i]=kulcs.charAt(y).toLowerCase();
		y++;

		for(var x=1;x<27;x++){
			if(kulcs_szam[i]==betuk[x]){
				kulcs_szam[i]=x;
			}
		}

		be_szam[i]=be.charAt(i).toLowerCase();

		for(var z=1;z<27;z++){
			if(be_szam[i]==betuk[z]){
				be_szam[i]=z;
			}
		}

		if(i<be.length-1){
			ki+=be_szam[i]+kulcs_szam[i]+"-";
		}else{
			ki+=be_szam[i]+kulcs_szam[i];
		}
	}

	document.szam_kod_form.szam_kod_ki.value = ki;
}

function szam_dekod(){
	var betuk = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var be = document.szam_dekod_form.szam_dekod_be.value.split("-");
	var ki = "";
	var kulcs = document.szam_dekod_form.szam_dekod_kulcs.value.replace(/\xE1/g,'a').replace(/\xE9/g,'e').replace(/\xED/g,'i').replace(/[\u0151\xF6\xF3]/g,'o').replace(/[\u0171\xFC\xFA]/g,'u').replace(/[^a-zA-Z]/g,'');
	var kulcs_szam = [];
	var y = 0;

	for(var i=0;i<be.length;i++){
		if(y==kulcs.length){
			y=0;
		}

		kulcs_szam[i]=kulcs.charAt(y).toLowerCase();
		y++;

		for(var x=1;x<27;x++){
			if(kulcs_szam[i]==betuk[x]){
				kulcs_szam[i]=x;
			}
		}

		ki+=betuk[be[i]-kulcs_szam[i]];
	}

	document.szam_dekod_form.szam_dekod_ki.value = ki.toUpperCase();
}

function caesar_kod(){
	var betuk = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var be = document.caesar_kod_form.caesar_kod_be.value.replace(/\xE1/g,'a').replace(/\xE9/g,'e').replace(/\xED/g,'i').replace(/[\u0151\xF6\xF3]/g,'o').replace(/[\u0171\xFC\xFA]/g,'u').replace(/[^a-zA-Z0-9]/g,'');
	var be_szam = [];
	var ki = "";
	var kulcs = parseInt(document.caesar_kod_form.caesar_kod_kulcs.value);

	for(var i=0;i<be.length;i++){
		be_szam[i]=be.charAt(i).toLowerCase();

		for(var y=1;y<27;y++){
			if(be_szam[i]==betuk[y]){
				be_szam[i]=y;
			}
		}

		if(be_szam[i]+kulcs>26){
			ki+=betuk[be_szam[i]+kulcs-26];
		}else{
			ki+=betuk[be_szam[i]+kulcs];
		}
	}

	document.caesar_kod_form.caesar_kod_ki.value = ki.toUpperCase();
}

function caesar_dekod(){
	var betuk = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var be = document.caesar_dekod_form.caesar_dekod_be.value;
	var be_szam = [];
	var ki = "";
	var kulcs = parseInt(document.caesar_dekod_form.caesar_dekod_kulcs.value);

	for(var i=0;i<be.length;i++){
		for(var y=1;y<27;y++){
			if(be.charAt(i).toLowerCase()==betuk[y]){
				be_szam[i]=y;
			}
		}

		if(be_szam[i]-kulcs<1){
			ki+=betuk[be_szam[i]-kulcs+26];
		}else{
			ki+=betuk[be_szam[i]-kulcs];
		}
	}

	document.caesar_dekod_form.caesar_dekod_ki.value = ki.toUpperCase();
}

function vigenere_kod(){
	var betuk = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var be = document.vigenere_kod_form.vigenere_kod_be.value.replace(/\xE1/g,'a').replace(/\xE9/g,'e').replace(/\xED/g,'i').replace(/[\u0151\xF6\xF3]/g,'o').replace(/[\u0171\xFC\xFA]/g,'u').replace(/[^a-zA-Z0-9]/g,'');
	var be_szam = [];
	var ki = "";
	var kulcs = document.vigenere_kod_form.vigenere_kod_kulcs.value.replace(/\xE1/g,'a').replace(/\xE9/g,'e').replace(/\xED/g,'i').replace(/[\u0151\xF6\xF3]/g,'o').replace(/[\u0171\xFC\xFA]/g,'u').replace(/[^a-zA-Z]/g,'');
	var kulcs_szam = [];
	var y = 0;

	for(var i=0;i<be.length;i++){
		if(y==kulcs.length){
			y=0;
		}

		kulcs_szam[i]=kulcs.charAt(y).toLowerCase();
		y++;

		for(var x=0;x<26;x++){
			if(kulcs_szam[i]==betuk[x]){
				kulcs_szam[i]=x;
			}
		}

		be_szam[i]=be.charAt(i).toLowerCase();

		for(var z=0;z<26;z++){
			if(be_szam[i]==betuk[z]){
				be_szam[i]=z;
			}
		}

		if(be_szam[i]+kulcs_szam[i]>25){
			ki+=betuk[be_szam[i]+kulcs_szam[i]-26];
		}else{
			ki+=betuk[be_szam[i]+kulcs_szam[i]];
		}
	}

	document.vigenere_kod_form.vigenere_kod_ki.value = ki.toUpperCase();
}

function vigenere_dekod(){
	var betuk = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var be = document.vigenere_dekod_form.vigenere_dekod_be.value;
	var be_szam = [];
	var ki = "";
	var kulcs = document.vigenere_dekod_form.vigenere_dekod_kulcs.value.replace(/\xE1/g,'a').replace(/\xE9/g,'e').replace(/\xED/g,'i').replace(/[\u0151\xF6\xF3]/g,'o').replace(/[\u0171\xFC\xFA]/g,'u').replace(/[^a-zA-Z]/g,'');
	var kulcs_szam = [];
	var y = 0;

	for(var i=0;i<be.length;i++){
		if(y==kulcs.length){
			y=0;
		}

		kulcs_szam[i]=kulcs.charAt(y).toLowerCase();
		y++;

		for(var x=0;x<26;x++){
			if(kulcs_szam[i]==betuk[x]){
				kulcs_szam[i]=x;
			}
		}

		be_szam[i]=be.charAt(i).toLowerCase();

		for(var z=0;z<26;z++){
			if(be_szam[i]==betuk[z]){
				be_szam[i]=z;
			}
		}

		if(be_szam[i]-kulcs_szam[i]<0){
			ki+=betuk[be_szam[i]-kulcs_szam[i]+26];
		}else{
			ki+=betuk[be_szam[i]-kulcs_szam[i]];
		}
	}

	document.vigenere_dekod_form.vigenere_dekod_ki.value = ki.toUpperCase();
}

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