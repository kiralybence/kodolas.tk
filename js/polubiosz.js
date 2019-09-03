function polubiosz_kod(){
	var betuk = [['a','\xE1','b','c','d','e','\xE9'],['f','g','h','i','\xED','j','k'],['l','m','n','o','\xF3','\xF6','\u0151'],['p','q','r','s','t','u','\xFA'],['\xFC','\u0171','v','w','x','y','z']];
	var be = document.polubiosz_kod_form.polubiosz_kod_be.value.toLowerCase();
	var ki = "";

	for(z=0;z<be.length;z++){
		for(i=0;i<5;i++){
			for(y=0;y<7;y++){
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

	for(i=0;i<be.length;i++){
		ki+=betuk[be[i].charAt(0)-1][be[i].charAt(1)-1].charAt(0);
		ki+=betuk[be[i].charAt(0)-1][be[i].charAt(1)-1].charAt(1);
	}

	document.polubiosz_dekod_form.polubiosz_dekod_ki.value = ki.toUpperCase();
}
