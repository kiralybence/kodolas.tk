function szkkod(){
	var betuk = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var sz01;
	var sz02 = [];
	var sz03 = [];
	var k01;
	var k02 = [];
	
	sz01 = document.szk.szkszoveg.value;
	k01 = document.szk.szkkulcs.value;
	
	for(i=0;i<sz01.length;i++){
		for(y=1;y<27;y++){
			if(sz01.charAt(i).toLowerCase()==betuk[y]){
				sz02[i]=y;
			}
		}
	}
	
	y=0;
	
	for(i=0;i<sz02.length;i++){
		if(y==k01.length){
			y=0;
		}
		k02[i]=k01.charAt(y);
		y++;
		for(z=1;z<27;z++){
			if(k02[i]==betuk[z]){
				k02[i]=z;
			}
		}
		if(sz02[i]+k02[i]>26){
			sz03[i]=sz02[i]+k02[i]-26;
		}
		if(sz02[i]+k02[i]<27){
			sz03[i]=sz02[i]+k02[i];
		}
	}
	
	document.szk.szkeredmeny.value = sz03;
}

function szkde(){
	var betuk = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var sz01;
	var sz03;
	var k01;
	var k02;
	
	sz03 = document.szk.szkszoveg.value;
	k01 = document.szk.szkkulcs.value;
	
	for(z=1;z<27;z++){
		if(k01==betuk[z]){
			k02=z;
		}
	}
	if(sz03-k02<1){
		sz02=sz03-k02+26;
	}
	if(sz03-k02>0){
		sz02=sz03-k02;
	}
	sz01=betuk[sz02];
	
	document.szk.szkeredmeny.value = sz01;
}