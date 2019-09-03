function vigenere_kod(){
	var betuk = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var be;
	var be_szam = [];
	var ki_betu = [];
	var ki = "";
	var kulcs;
	var kulcs_szam = [];

	be = document.vigenere_kod_form.vigenere_kod_be.value;
	kulcs = document.vigenere_kod_form.vigenere_kod_kulcs.value;

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
	}

	y=0;

	for(i=0;i<be_szam.length;i++){
		if(y==kulcs.length){
			y=0;
		}
		
		kulcs_szam[i]=kulcs.charAt(y);
		y++;
		
		switch(kulcs.charAt(i).toLowerCase()){
			case '\xE1':
				kulcs_szam[i]=1;
				break;
			case '\xE9':
				kulcs_szam[i]=5;
				break;
			case '\xED':
				kulcs_szam[i]=9;
				break;
			case '\xF3':
				kulcs_szam[i]=15;
				break;
			case '\xF6':
				kulcs_szam[i]=15;
				break;
			case '\u0151':
				kulcs_szam[i]=15;
				break;
			case '\xFA':
				kulcs_szam[i]=21;
				break;
			case '\xFC':
				kulcs_szam[i]=21;
				break;
			case '\u0171':
				kulcs_szam[i]=21;
				break;
			default:
				for(z=1;z<27;z++){
					if(kulcs_szam[i]==betuk[z]){
						kulcs_szam[i]=z;
					}
				}
		}
		
		if(be_szam[i]+kulcs_szam[i]-1>26){
			ki_betu[i]=betuk[be_szam[i]+kulcs_szam[i]-27];
		}
		if(be_szam[i]+kulcs_szam[i]-1<27){
			ki_betu[i]=betuk[be_szam[i]+kulcs_szam[i]-1];
		}
	}
	
	for(i=0;i<ki_betu.length;i++){
		ki=ki+ki_betu[i];
	}

	document.vigenere_kod_form.vigenere_kod_ki.value = ki.toUpperCase();
}

function vigenere_dekod(){
	var betuk = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var be;
	var be_szam = [];
	var ki_betu = [];
	var ki = "";
	var kulcs;
	var kulcs_szam = [];

	be = document.vigenere_dekod_form.vigenere_dekod_be.value;
	kulcs = document.vigenere_dekod_form.vigenere_dekod_kulcs.value;

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
	}

	y=0;

	for(i=0;i<be_szam.length;i++){
		if(y==kulcs.length){
			y=0;
		}
		
		kulcs_szam[i]=kulcs.charAt(y);
		y++;
		
		switch(kulcs.charAt(i).toLowerCase()){
			case '\xE1':
				kulcs_szam[i]=1;
				break;
			case '\xE9':
				kulcs_szam[i]=5;
				break;
			case '\xED':
				kulcs_szam[i]=9;
				break;
			case '\xF3':
				kulcs_szam[i]=15;
				break;
			case '\xF6':
				kulcs_szam[i]=15;
				break;
			case '\u0151':
				kulcs_szam[i]=15;
				break;
			case '\xFA':
				kulcs_szam[i]=21;
				break;
			case '\xFC':
				kulcs_szam[i]=21;
				break;
			case '\u0171':
				kulcs_szam[i]=21;
				break;
			default:
				for(z=1;z<27;z++){
					if(kulcs_szam[i]==betuk[z]){
						kulcs_szam[i]=z;
					}
				}
		}
		
		if(be_szam[i]-kulcs_szam[i]+1<1){
			ki_betu[i]=betuk[be_szam[i]-kulcs_szam[i]+27];
		}
		if(be_szam[i]-kulcs_szam[i]+1>0){
			ki_betu[i]=betuk[be_szam[i]-kulcs_szam[i]+1];
		}
	}
	
	for(i=0;i<ki_betu.length;i++){
		ki=ki+ki_betu[i];
	}

	document.vigenere_dekod_form.vigenere_dekod_ki.value = ki.toUpperCase();
}