function polubiosz_kod(){
	var betuk = [['a','\xE1','b','c','d','e','\xE9'],['f','g','h','i','\xED','j','k'],['l','m','n','o','\xF3','\xF6','\u0151'],['p','q','r','s','t','u','\xFA'],['\xFC','\u0171','v','w','x','y','z']];
	var be = document.polubiosz_kod_form.polubiosz_kod_be.value.toLowerCase();
	var ki = [];
	
	for(z=0;z<be.length;z++){
		for(i=0;i<5;i++){
			for(y=0;y<7;y++){
				if(be.charAt(z)==betuk[i][y]){
					ki[z]=""+(i+1)+(y+1);
				}
			}
		}
	}
	
	document.polubiosz_kod_form.polubiosz_kod_ki.value = ki;
}

function polubiosz_dekod(){
	var betuk = [['a','\xE1','b','c','d','e','\xE9'],['f','g','h','i','\xED','j','k'],['l','m','n','o','\xF3','\xF6','\u0151'],['p','q','r','s','t','u','\xFA'],['\xFC','\u0171','v','w','x','y','z']];
	var be = document.polubiosz_dekod_form.polubiosz_dekod_be.value;
	
	document.polubiosz_dekod_form.polubiosz_dekod_ki.value = betuk[be.charAt(0)-1][be.charAt(1)-1];
}