
 // Harlem Shake jQuery
 // by akif.rabbani.my :D
 
  var all = $("a");
 var first = $("div:eq(0)");
document.write('<audio controls="controls" id="harlem-play" style="display:none"><source src="https://raw.github.com/akifrabbani/harlem.js/master/hs.ogg?raw=true" type="audio/ogg" /></audio>');
   
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
function startharlem() {
var audioplayer = document.getElementById("harlem-play");

 $(first).addClass('first');
$(first).trigger('startRumble');
 audioplayer.play();
 var startdrunk = setInterval(function() {
$(all).trigger('startRumble');
 var stopdrunk = setInterval(function() {
 $(all).trigger('stopRumble');
 $(first).trigger('stopRumble');
      audioplayer.pause();
clearInterval( stopdrunk );
    }, 14500);
clearInterval( startdrunk );
    }, 17000);
	 }