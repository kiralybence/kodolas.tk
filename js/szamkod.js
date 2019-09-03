function szam_kod(){
	var betuk = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var be;
	var be_szam = [];
	var ki = [];
	var kulcs;
	var kulcs_szam = [];
	
	be = document.szam_kod_form.szam_kod_be.value;
	kulcs = document.szam_kod_form.szam_kod_kulcs.value;
	
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
		
		ki[i]=be_szam[i]+kulcs_szam[i];
	}
	
	document.szam_kod_form.szam_kod_ki.value = ki;
}

function szam_dekod(){
	var betuk = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var be;
	var ki;
	var kulcs;
	var kulcs_szam;
	
	be = document.szam_dekod_form.szam_dekod_be.value;
	kulcs = document.szam_dekod_form.szam_dekod_kulcs.value;
	
	switch(kulcs.toLowerCase()){
		case '\xE1':
			kulcs_szam=1;
			break;
		case '\xE9':
			kulcs_szam=5;
			break;
		case '\xED':
			kulcs_szam=9;
			break;
		case '\xF3':
			kulcs_szam=15;
			break;
		case '\xF6':
			kulcs_szam=15;
			break;
		case '\u0151':
			kulcs_szam=15;
			break;
		case '\xFA':
			kulcs_szam=21;
			break;
		case '\xFC':
			kulcs_szam=21;
			break;
		case '\u0171':
			kulcs_szam=21;
			break;
		default:
			for(z=1;z<27;z++){
				if(kulcs_szam==betuk[z]){
					kulcs_szam=z;
				}
			}
	}
	
	ki=betuk[be-kulcs_szam];
	
	document.szam_dekod_form.szam_dekod_ki.value = ki;
}