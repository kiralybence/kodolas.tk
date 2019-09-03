function szam_kod(){
	var betuk = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var be = document.szam_kod_form.szam_kod_be.value;
	var be_szam = [];
	var ki = "";
	var kulcs = document.szam_kod_form.szam_kod_kulcs.value;
	var kulcs_szam = [];
	var y = 0;

	for(i=0;i<be.length;i++){
		if(y==kulcs.length){
			y=0;
		}

		kulcs_szam[i]=kulcs.charAt(y).toLowerCase();
		y++;

		if(kulcs_szam[i]=='\xE1' || kulcs_szam[i]=='\xE9' || kulcs_szam[i]=='\xED' || kulcs_szam[i]=='\xF3' || kulcs_szam[i]=='\xF6' || kulcs_szam[i]=='\u0151' || kulcs_szam[i]=='\xFA' || kulcs_szam[i]=='\xFC' || kulcs_szam[i]=='\u0171'){
			switch(kulcs_szam[i]){
				case '\xE1':
					kulcs_szam[i]='a';
					break;
				case '\xE9':
					kulcs_szam[i]='e';
					break;
				case '\xED':
					kulcs_szam[i]='i';
					break;
				case '\xF3':
					kulcs_szam[i]='o';
					break;
				case '\xF6':
					kulcs_szam[i]='o';
					break;
				case '\u0151':
					kulcs_szam[i]='o';
					break;
				case '\xFA':
					kulcs_szam[i]='u';
					break;
				case '\xFC':
					kulcs_szam[i]='u';
					break;
				case '\u0171':
					kulcs_szam[i]='u';
					break;
			}
		}

		for(x=1;x<27;x++){
			if(kulcs_szam[i]==betuk[x]){
				kulcs_szam[i]=x;
			}
		}
		
		be_szam[i]=be.charAt(i).toLowerCase();

		if(be_szam[i]=='\xE1' || be_szam[i]=='\xE9' || be_szam[i]=='\xED' || be_szam[i]=='\xF3' || be_szam[i]=='\xF6' || be_szam[i]=='\u0151' || be_szam[i]=='\xFA' || be_szam[i]=='\xFC' || be_szam[i]=='\u0171'){
			switch(be_szam[i]){
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

		for(z=1;z<27;z++){
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
	var kulcs = document.szam_dekod_form.szam_dekod_kulcs.value;
	var kulcs_szam = [];
	var y = 0;

	for(i=0;i<be.length;i++){
		if(y==kulcs.length){
			y=0;
		}

		kulcs_szam[i]=kulcs.charAt(y).toLowerCase();
		y++;

		switch(kulcs_szam[i]){
			case '\xE1':
				kulcs_szam[i]='a';
				break;
			case '\xE9':
				kulcs_szam[i]='e';
				break;
			case '\xED':
				kulcs_szam[i]='i';
				break;
			case '\xF3':
				kulcs_szam[i]='o';
				break;
			case '\xF6':
				kulcs_szam[i]='o';
				break;
			case '\u0151':
				kulcs_szam[i]='o';
				break;
			case '\xFA':
				kulcs_szam[i]='u';
				break;
			case '\xFC':
				kulcs_szam[i]='u';
				break;
			case '\u0171':
				kulcs_szam[i]='u';
				break;
		}

		for(x=1;x<27;x++){
			if(kulcs_szam[i]==betuk[x]){
				kulcs_szam[i]=x;
			}
		}

		ki+=betuk[be[i]-kulcs_szam[i]];
	}

	document.szam_dekod_form.szam_dekod_ki.value = ki.toUpperCase();
}
