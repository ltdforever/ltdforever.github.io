$(document).ready(function () {

	setTimeout(function () {
		$(".left_stripes .blue").removeClass('off');
	}, 350);
	setTimeout(function () {
		$(".left_stripes .yellow").removeClass('off');
	}, 750);
	setTimeout(function () {
		$(".left_stripes .red").removeClass('off');
	}, 1050);
	setTimeout(function () {
		$(".left_stripes .blue").addClass('off');
	}, 1450);
	setTimeout(function () {
		$(".left_stripes .yellow").addClass('off');
	}, 1500);
	setTimeout(function () {
		$(".left_stripes .red").addClass('off');
	}, 1550);
	setTimeout(function () {
		$(".right_stripes .red").removeClass('off');
	}, 350);
	setTimeout(function () {
		$(".right_stripes .yellow").removeClass('off');
	}, 750);
	setTimeout(function () {
		$(".right_stripes .blue").removeClass('off');
	}, 1050);
	setTimeout(function () {
		$(".right_stripes .red").removeClass('off');
	}, 1450);
	setTimeout(function () {
		$(".right_stripes .yellow").removeClass('off');
	}, 1500);
	setTimeout(function () {
		$(".right_stripes .blue").removeClass('off');
	}, 1600);

	setInterval(function () {
		setTimeout(function () {
			$(".left_stripes .blue").removeClass('off');
		}, 350);
		setTimeout(function () {
			$(".left_stripes .yellow").removeClass('off');
		}, 750);
		setTimeout(function () {
			$(".left_stripes .red").removeClass('off');
		}, 1050);
		setTimeout(function () {
			$(".left_stripes .blue").addClass('off');
		}, 1450);
		setTimeout(function () {
			$(".left_stripes .yellow").addClass('off');
		}, 1500);
		setTimeout(function () {
			$(".left_stripes .red").addClass('off');
		}, 1550);
		setTimeout(function () {
			$(".right_stripes .red").removeClass('off');
		}, 350);
		setTimeout(function () {
			$(".right_stripes .yellow").removeClass('off');
		}, 750);
		setTimeout(function () {
			$(".right_stripes .blue").removeClass('off');
		}, 1050);
		setTimeout(function () {
			$(".right_stripes .red").addClass('off');
		}, 1450);
		setTimeout(function () {
			$(".right_stripes .yellow").addClass('off');
		}, 1500);
		setTimeout(function () {
			$(".right_stripes .blue").addClassd('off');
		}, 1600);
	}, 1650);
});
