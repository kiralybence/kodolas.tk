pkod{
	var ekbetuk = [a, á, b, c, d, e, é, f, g, h, i, í, j, k, l, m, n, o, ó, ö, ő, p, q, r, s, t, u, ú, ü, ű, v, w, x, y, z];
	var ekszamok = [11,12,13,14,15,16,17,
					21,22,23,24,25,26,27,
					31,32,33,34,35,36,37,
					41,42,43,44,45,46,47,
					51,52,53,54,55,56,57];
	var bekert = [];
	var kodolt = [];
	bekert = document.pk.pszoveg.value.toLowerCase();
	
	for(i=0;i<bekert.length;i++){
		if(ekbetuk[i]=bekert[i]){
			kodolt[i]=ekszamok[i];
		}
	}

	document.pk.peredmeny.value = kodolt.toUpperCase();	
}

pdekod{
	
}