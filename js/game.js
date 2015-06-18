
var game = angular.module('myGame', []);

var eyesAdd = function(){
	$('.eyes-img').click(function(){
		$(this).clone().appendTo('#base').addClass('eyes-base-img');
	});
};

var eyesClean = function(){
	$('#eyesClean').click(function(){
		$('.eyes-base-img').remove();
	});
};


var hairAdd = function(){
	$('.hair-img').click(function(){
		$(this).clone().appendTo('#base').addClass('hair-base-img');
	});
};

var hairClean = function(){
	$('#hairClean').click(function(){
		$('.hair-base-img').remove();
	});
};

var wingsAdd = function(){
	$('.wings-img').click(function(){
		$(this).clone().appendTo('#base').addClass('wings-base-img');

	});
};

var wingsClean = function(){
	$('#wingsClean').click(function(){
		$('.wings-base-img').remove();
	});
};

var skirtAdd = function(){
	$('.skirt-img').click(function(){
		$(this).clone().appendTo('#base').addClass('skirt-base-img');

	});
};

var skirtClean = function(){
	$('#skirtClean').click(function(){
		$('.skirt-base-img').remove();
	});
};

var topAdd = function(){
	$('.top-img').click(function(){
		$(this).clone().appendTo('#base').addClass('top-base-img');

	});
};

var topClean = function(){
	$('#topClean').click(function(){
		$('.top-base-img').remove();
	});
};

var shoesAdd = function(){
	$('.shoes-img').click(function(){
		$(this).clone().appendTo('#base').addClass('shoes-base-img');

	});
};

var shoesClean = function(){
	$('#shoesClean').click(function(){
		$('.shoes-base-img').remove();
	});
};

var preLoader = function(){
	$(window).load(function(){
		$('#preloader-img').fadeOut();
		$('#preloader').delay(200).fadeOut('slow');
	})
};


$(function() {
	eyesAdd();
	eyesClean();
	hairAdd();
	hairClean();
	wingsAdd();
	wingsClean();
	skirtAdd();
	skirtClean();
	topAdd();
	topClean();
	shoesAdd();
	shoesClean();
	preLoader();
});