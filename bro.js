/*
    Awesome Bro(wser) CSS Detector
    Copyright   Ivan Grishin
    License     MIT / http://bit.ly/mit-license
    Version     0.3

**	 Inspired by HeadJS (http://headjs.com) & jQuery (http://jquery.com)
**/
(function(doc) {
	var html = doc.documentElement,
		 cclass = [];
	
	function pushClass(name) { cclass[cclass.length] = name; }
    
	var ua = navigator.userAgent.toLowerCase();
	
	var ismobile= ua.match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i)
    
	ua = /(iphone|ipod|ipad)/.exec(ua) ||
		/(android)/.exec(ua) ||
		/(webkit)[ \/]([\w.]+)/.exec(ua) ||
        /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) ||
        /(msie) ([\w.]+)/.exec( ua ) ||
        !/compatible/.test(ua) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua) ||
        ['','other', '0']; 
    
    
    if (ua[1] == 'ipad') {
		pushClass('webkit');
    } else if (ua[1] == 'ipod' || ua[1] == 'iphone') {
		ua[1] = 'iphone';
		pushClass('webkit');
    } 
    
    if (ismobile) {
    	pushClass('mobile');
    } else if (!ismobile) {
    	pushClass('desktop');
    }
		
	if (ua[1] == 'msie') {
			ua[1] = 'ie';
			ua[2] = document.documentMode || ua[2];
	}
	
	pushClass(ua[1]);

	if (ua[1] == 'ie') {
	
		pushClass("ie" + parseFloat(ua[2]));
		
		// IE versions
		for (var ver = 5; ver < 15; ver++) {
		   if (parseFloat(ua[2]) < ver) { pushClass("lt-ie" + ver); }
		}
	} 
	
	html.className += ' ' + cclass.join(' ');
	html.className = html.className.replace('no-js', '');
})(document)