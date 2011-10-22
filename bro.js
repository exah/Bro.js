/*
    Awesome Bro(wser) CSS Detector
    Copyright   Ivan Grishin
    License     MIT / http://bit.ly/mit-license
    Version     0.2

**	 Inspired/Used code by HeadJS (http://headjs.com) & jQuery (http://jquery.com)
**/
(function(doc) {
	var html = doc.documentElement,
		 cclass = [];
	
	function pushClass(name) { cclass[cclass.length] = name; }
	
	function each(arr, fn) {
		for (var i = 0, arr_length = arr.length; i < arr_length; i++) {
			fn.call(arr, arr[i], i);
		}
	}	
    
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
		
		// HTML5 support
		each("abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video".split("|"), function(el) {
										   doc.createElement(el);
										});
	}
	
	html.className += ' ' + cclass.join(' ');
	html.className = html.className.replace('no-js', '');
})(document)