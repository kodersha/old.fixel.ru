/*	
	AdBlocks
	- https://gist.github.com/6174/6062387
	- https://www.detectadblock.com/
	- https://yuukithemes.com/
*/

$(document).ready(function() {
    $("#message").removeClass("hidden");
});

var msg1=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
var msg2=Math.random().toString(36).substring(2, 7);
var e=document.getElementById("money");e.setAttribute("id", msg1);
e.classList.add("money_" + msg2);
if (!window.showAds) {
	document.getElementById('message').style.visibility = "visible";
	document.getElementById('message').style.display = "table";
}