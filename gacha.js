var no_rare = 0;
var no_srare = 0;
var no_urare = 0;
function gatcha() {
	var img = document.getElementById("card"); 
	var a = document.getElementById("cord");
	var number = Math.floor(1000*Math.random());
	if( number < 900 ) {
		img.src = "rare.png";
		a.href="rare.png";
		no_rare++;
	} else if( number < 999 ) {
		img.src = "srare.png";
		a.href="srare.png";
		no_srare++;
	} else {
		alert("おめでとう！");
		img.src = "urare.png";
		a.href="urare.png";
		no_urare++;
	}
	var total = no_rare + no_srare + no_urare;
	document.getElementById("price").innerHTML = total*500+"円";
	document.getElementById("no_rare").innerHTML = no_rare+"枚（確率"+Math.round(no_rare/total*100*100)/100+"％）";
	document.getElementById("no_srare").innerHTML = no_srare+"枚（確率"+Math.round(no_srare/total*100*100)/100+"％）";
	document.getElementById("no_urare").innerHTML = no_urare+"枚（確率"+Math.round(no_urare/total*100*100)/100+"％）";
}
