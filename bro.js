/*
    Awesome Bro(wser) CSS Detector
    Copyright   Ivan Grishin
    License     MIT / http://bit.ly/mit-license
    Version     0.2.1

**	 Inspired by HeadJS (http://headjs.com) & jQuery (http://jquery.com)
**/
(function(doc) {
	var html = doc.documentElement,
		 cclass = [];
	
	function pushClass(name) { cclass[cclass.length] = name; }
    
	var ua = navigator.userAgent.toLowerCase();
    
	ua = /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version)?[ \/]([\w.]+)/.exec( ua ) ||
        /(msie) ([\w.]+)/.exec( ua ) ||
        !/compatible/.test( ua ) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec( ua ) ||
        ['','other', '0']; 
        
		
	if (ua[1] == 'msie') {
			ua[1] = 'ie';
			ua[2] = document.documentMode || ua[2];
	}
	
	pushClass(ua[1]);

	if (ua[1] == 'ie') {
	
		pushClass("ie" + parseFloat(ua[2]));
		
		// IE versions
		for (var ver = 3; ver < 11; ver++) {
		   if (parseFloat(ua[2]) < ver) { pushClass("lt-ie" + ver); }
		}
	}
	
	html.className += ' ' + cclass.join(' ');
	html.className = html.className.replace('no-js', '');
})(document)