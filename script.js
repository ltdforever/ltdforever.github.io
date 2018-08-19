//Stop looking at my fancy javascript

//its not even a good trade secret to steal

$(document).ready(function () {
	function getFlicker() {
		var rNum = Math.floor((Math.random() * 20) + 79);
		return rNum;
	}
	function getDelay() {
		var rNum2 = Math.floor((Math.random() * 700) + 800);
		return rNum2;
	}
	function getDelayShort() {
		var rNum3 = Math.floor((Math.random() * 500) + 300);
		return rNum3;
	}
	function runFlicker(selectorClass) {
		var bTime = getDelay();
		var bTime2 = getDelayShort();
		var bOpacity = getFlicker();
		setTimeout(function () {
			$(selectorClass + " .blue").css('opacity', '.' + bOpacity );
		}, bTime);
		setTimeout(function () {
			$(selectorClass + " .blue").css('opacity', '.6');
		}, bTime2);
		
		
		var yTime = getDelay();
		var yTime2 = getDelayShort();
		var yOpacity = getFlicker();
		setTimeout(function () {
			$(selectorClass + " .yellow").css('opacity', '.' + yOpacity );
		}, yTime);
		setTimeout(function () {
			$(selectorClass + " .yellow").css('opacity', '.6');
		}, yTime2);
		
		
		var rTime = getDelay();
		var rTime2 = getDelayShort();
		var rOpacity = getFlicker();
		setTimeout(function () {
			$(selectorClass + " .red").css('opacity', '.' + rOpacity );
		}, rTime);
		setTimeout(function () {
			$(selectorClass + " .red").css('opacity', '.6');
		}, rTime2);
	}
	
	runFlicker(".left_stripes");
	runFlicker(".right_stripes");
	setInterval(function () {
		runFlicker(".left_stripes");
		runFlicker(".right_stripes");
	}, 1500);
});
