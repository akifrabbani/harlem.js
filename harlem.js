
 // Harlem Shake jQuery
 // by akif.rabbani.my :D
 
 // messy. made in 20 minutes.
 document.write(' <audio controls="controls" autoplay="autoplay" style="display:none"><source src="hs.ogg" type="audio/ogg" /></audio>');
  var all = $("a");
 var first = $("a:eq(0)");

   $(first).jrumble({
        x: 2,
        y: 2,
		speed:50,
        rotation: 1
    });
	   $(all).jrumble({
        x: 5,
        y: 2,
		speed:50,
        rotation: 1
    });
	


 $(first).addClass('first');
$(first).trigger('startRumble');
 var startdrunk = setInterval(function() {
$(all).trigger('startRumble');
 var stopdrunk = setInterval(function() {
 $(all).trigger('stopRumble');
clearInterval( stopdrunk );
    }, 14500);
clearInterval( startdrunk );
    }, 15500);