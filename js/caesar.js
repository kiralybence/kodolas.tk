function csrkod(){
	var betuk = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var sz01;
	var sz02 = [];
	var sz03 = [];
	var sz04 = "";
	var k01;
	
	sz01 = document.csr.csrszoveg.value;
	k01 = parseInt(document.csr.csrkulcs.value);
	
	for(i=0;i<sz01.length;i++){
		for(y=1;y<27;y++){
			if(sz01.charAt(i).toLowerCase()==betuk[y]){
				sz02[i]=y;
			}
		}
		if(sz02[i]+k01>26){
			sz03[i]=betuk[sz02[i]+k01-26];
		}
		if(sz02[i]+k01<27){
			sz03[i]=betuk[sz02[i]+k01];
		}
	}
	
	for(i=0;i<sz03.length;i++){
		sz04=sz04+sz03[i];
	}
	
	document.csr.csreredmeny.value = sz04.toUpperCase();
}
	
function csrde(){
	var betuk = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var sz01 = [];
	var sz02 = [];
	var sz03 = [];
	var sz04 = "";
	var k01;
	
	sz03 = document.csr.csrszoveg.value;
	k01 = parseInt(document.csr.csrkulcs.value);
	
	for(i=0;i<sz03.length;i++){
		for(y=1;y<27;y++){
			if(sz03.charAt(i).toLowerCase()==betuk[y]){
				sz02[i]=y;
			}
		}
		if(sz02[i]-k01<1){
			sz01[i]=betuk[sz02[i]-k01+26];
		}
		if(sz02[i]-k01>0){
			sz01[i]=betuk[sz02[i]-k01];
		}
	}
	
	for(i=0;i<sz01.length;i++){
		sz04=sz04+sz01[i];
	}
	
	document.csr.csreredmeny.value = sz04.toUpperCase();
}