
var game = angular.module('myGame', []);

var elementsZoom = function(){
	$('#elements').dblclick(function(){
		$(this).children('.img').css({width: "400px;"});
		alert('ok');
	});
};

var eyesAdd = function(){
	$('.eyes-img').click(function(){
		$('.eyes-base-img').remove();
		$(this).clone().appendTo('#base').removeClass('img').addClass('eyes-base-img');
	});
};

var eyesClean = function(){
	$('#eyesClean').click(function(){
		$('.eyes-base-img').remove();
	});
};


var hairAdd = function(){
	$('.hair-img').click(function(){
		$('.hair-base-img').remove();
		$(this).clone().appendTo('#base').removeClass('img').addClass('hair-base-img');
	});
};

var hairClean = function(){
	$('#hairClean').click(function(){
		$('.hair-base-img').remove();
	});
};

var wingsAdd = function(){
	$('.wings-img').click(function(){
		$('.wings-base-img').remove();
		$(this).clone().appendTo('#base').removeClass('img').addClass('wings-base-img');

	});
};

var wingsClean = function(){
	$('#wingsClean').click(function(){
		$('.wings-base-img').remove();
	});
};

var skirtAdd = function(){
	$('.skirt-img').click(function(){
		$('.skirt-base-img').remove();
		$(this).clone().appendTo('#base').removeClass('img').addClass('skirt-base-img');

	});
};

var skirtClean = function(){
	$('#skirtClean').click(function(){
		$('.skirt-base-img').remove();
	});
};

var topAdd = function(){
	$('.top-img').click(function(){
		$('.top-base-img').remove();
		$(this).clone().appendTo('#base').removeClass('img').addClass('top-base-img');

	});
};

var topClean = function(){
	$('#topClean').click(function(){
		$('.top-base-img').remove();
	});
};

var shoesAdd = function(){
	$('.shoes-img').click(function(){
		$('.shoes-base-img').remove();
		$(this).clone().appendTo('#base').removeClass('img').addClass('shoes-base-img');

	});
};

var shoesClean = function(){
	$('#shoesClean').click(function(){
		$('.shoes-base-img').remove();
	});
};

var cleanAll = function(){
	$('#cleanAll').click(function(){
		$('.eyes-base-img').remove();
		$('.hair-base-img').remove();
		$('.wings-base-img').remove();
		$('.skirt-base-img').remove();
		$('.top-base-img').remove();
		$('.shoes-base-img').remove();
	});
};

var preLoader = function(){
	$(window).load(function(){
		$('#preloader').fadeOut('slow');
	});
};


$(function() {
	elementsZoom();
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
	cleanAll();
	preLoader();
});