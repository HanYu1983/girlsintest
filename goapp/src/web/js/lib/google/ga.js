(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

var googleTracking = googleTracking || {};
googleTracking.init = function( gacode ){
	ga('create', gacode, 'auto');
	ga('send', 'pageview');
}

googleTracking.page = function( inv ){
	console.log('tracking pageview', inv)
	ga('send', 'pageview', inv);
}
googleTracking.click = function( inv ){
	console.log('tracking event ', inv)
	ga('send', 'event','btn', inv );
}
googleTracking.event = function( inv ){
	console.log('tracking event ', inv)
	ga('send', 'event','eventTag', inv );
}
