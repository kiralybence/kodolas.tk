function caesar_kod(){
	var betuk = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var be = document.caesar_kod_form.caesar_kod_be.value;
	var be_szam = [];
	var ki = "";
	var kulcs = parseInt(document.caesar_kod_form.caesar_kod_kulcs.value);

	for(i=0;i<be.length;i++){
		be_szam[i]=be.charAt(i).toLowerCase();

		if(be_szam[i]=='\xE1' || be_szam[i]=='\xE9' || be_szam[i]=='\xED' || be_szam[i]=='\xF3' || be_szam[i]=='\xF6' || be_szam[i]=='\u0151' || be_szam[i]=='\xFA' || be_szam[i]=='\xFC' || be_szam[i]=='\u0171'){
			switch(be.charAt(i).toLowerCase()){
				case '\xE1':
					be_szam[i]='a';
					break;
				case '\xE9':
					be_szam[i]='e';
					break;
				case '\xED':
					be_szam[i]='i';
					break;
				case '\xF3':
					be_szam[i]='o';
					break;
				case '\xF6':
					be_szam[i]='o';
					break;
				case '\u0151':
					be_szam[i]='o';
					break;
				case '\xFA':
					be_szam[i]='u';
					break;
				case '\xFC':
					be_szam[i]='u';
					break;
				case '\u0171':
					be_szam[i]='u';
					break;
			}
		}

		for(y=1;y<27;y++){
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
	var kulcs = parseInt(document.caesar_dekod_form.caesar_dekod_kulcs.value);;

	for(i=0;i<be.length;i++){
		switch(be.charAt(i).toLowerCase()){
			case '\xE1':
				be_szam[i]=1;
				break;
			case '\xE9':
				be_szam[i]=5;
				break;
			case '\xED':
				be_szam[i]=9;
				break;
			case '\xF3':
				be_szam[i]=15;
				break;
			case '\xF6':
				be_szam[i]=15;
				break;
			case '\u0151':
				be_szam[i]=15;
				break;
			case '\xFA':
				be_szam[i]=21;
				break;
			case '\xFC':
				be_szam[i]=21;
				break;
			case '\u0171':
				be_szam[i]=21;
				break;
			default:
				for(y=1;y<27;y++){
					if(be.charAt(i).toLowerCase()==betuk[y]){
						be_szam[i]=y;
					}
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
