function pkod(){
	var betuk = [['a','\xE1','b','c','d','e','\xE9'],['f','g','h','i','\xED','j','k'],['l','m','n','o','\xF3','\xF6','\u0151'],['p','q','r','s','t','u','\xFA'],['\xFC','\u0171','v','w','x','y','z']];
	var bekert = document.pk.pszoveg.value.toLowerCase();
	var kodolt = [];
	
	for(z=0;z<bekert.length;z++){
		for(i=0;i<5;i++){
			for(y=0;y<7;y++){
				if(bekert.charAt(z)==betuk[i][y]){
					kodolt[z]=""+(i+1)+(y+1);
				}
			}
		}
	}
	
	document.pk.peredmeny.value = kodolt;
}

function pdekod(){
	var betuk = [['a','\xE1','b','c','d','e','\xE9'],['f','g','h','i','\xED','j','k'],['l','m','n','o','\xF3','\xF6','\u0151'],['p','q','r','s','t','u','\xFA'],['\xFC','\u0171','v','w','x','y','z']];
	var bekert = document.pk.pszoveg.value;
	
	document.pk.peredmeny.value = betuk[bekert.charAt(0)-1][bekert.charAt(1)-1];
}