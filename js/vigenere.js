function vgnrkod(){
	var betuk = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var sz01;
	var sz02 = [];
	var sz03 = [];
	var sz04 = "";
	var k01;
	var k02 = [];

	sz01 = document.vgnr.vgnrszoveg.value;
	k01 = document.vgnr.vgnrkulcs.value;

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
		if(sz02[i]+k02[i]-1>26){
			sz03[i]=betuk[sz02[i]+k02[i]-27];
		}
		if(sz02[i]+k02[i]-1<27){
			sz03[i]=betuk[sz02[i]+k02[i]-1];
		}
	}
	
	for(i=0;i<sz03.length;i++){
		sz04=sz04+sz03[i];
	}

	document.vgnr.vgnreredmeny.value = sz04.toUpperCase();
}

function vgnrde(){
	var betuk = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var sz01;
	var sz02 = [];
	var sz03 = [];
	var sz04 = "";
	var k01;
	var k02 = [];

	sz03 = document.vgnr.vgnrszoveg.value;
	k01 = document.vgnr.vgnrkulcs.value;

	for(i=0;i<sz03.length;i++){
		for(y=1;y<27;y++){
			if(sz03.charAt(i).toLowerCase()==betuk[y]){
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
		if(sz02[i]-k02[i]+1<1){
			sz02[i]=betuk[sz02[i]-k02[i]+27];
		}
		if(sz02[i]-k02[i]+1>0){
			sz02[i]=betuk[sz02[i]-k02[i]+1];
		}
	}
	
	for(i=0;i<sz02.length;i++){
		sz04=sz04+sz02[i];
	}

	document.vgnr.vgnreredmeny.value = sz04.toUpperCase();
}