//Stop looking at my fancy javascript

//its not even a good trade secret to steal

$(document).ready(function () {
	function getFlicker() {
		var rNum = Math.floor((Math.random() * 10) + 8);
		return rNum;
	}
	function getDelay() {
		var rNum2 = Math.floor((Math.random() * 1500) + 800);
		return rNum2;
	}
	function getDelayShort() {
		var rNum3 = Math.floor((Math.random() * 800) + 300);
		return rNum3;
	}
	function runFlicker(selectorClass) {
		var bTime = getDelay();
		var bTime2 = getDelayShort();
		setTimeout(function () {
			$(selectorClass + " .blue").removeClass('off');
		}, bTime);
		setTimeout(function () {
			$(selectorClass + " .blue").addClass('off');
		}, bTime2);
		
		
		var yTime = getDelay();
		var yTime2 = getDelayShort();
		setTimeout(function () {
			$(selectorClass + " .yellow").removeClass('off');
		}, yTime);
		setTimeout(function () {
			$(selectorClass + " .yellow").addClass('off');
		}, yTime2);
		
		
		var rTime = getDelay();
		var rTime2 = getDelayShort();
		setTimeout(function () {
			$(selectorClass + " .red").removeClass('off');
		}, rTime);
		setTimeout(function () {
			$(selectorClass + " .red").addClass('off');
		}, rTime2);
	}
	
	runFlicker(".left_stripes");
	runFlicker(".right_stripes");
	setInterval(function () {
		runFlicker(".left_stripes");
		runFlicker(".right_stripes");
	}, 1500);
});
