$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}

	var accordion = new Accordion($('#accordion'), false);

	var numCount = document.getElementById('num_count');
var plusBtn = document.getElementById('button_plus');
var minusBtn = document.getElementById('button_minus');
plusBtn.onclick = function() {
  var qty = parseInt(numCount.value);
  qty = qty + 1;
  numCount.value = qty;
}
minusBtn.onclick = function() {
  var qty = parseInt(numCount.value);
  qty = qty - 1;
  numCount.value = qty;
}

$('#multiCarousel').carousel({
  interval: 10000
})
$('.carousel .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<2;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}

        next.children(':first-child').clone().appendTo($(this));
      }
});

$(function () {
   $("#filter__range").slider({
  	min: 0,
  	max: 20000,
  	values: [5000,15000],
  	range: true,
  	stop: function(event, ui) {
      $("input#priceMin").val($("#filter__range").slider("values",0));
      $("input#priceMax").val($("#filter__range").slider("values",1));

      $('.price-range-min.value').html($("#filter__range").slider("values",0));
      $('.price-range-max.value').html($("#filter__range").slider("values",1));
    },
    slide: function(event, ui){
      $("input#priceMin").val($("#filter__range").slider("values",0));
      $("input#priceMax").val($("#filter__range").slider("values",1));

      $('.price-range-min.value').html($("#filter__range").slider("values",0));
      $('.price-range-max.value').html($("#filter__range").slider("values",1));
    }
  });

  $("input#priceMin").on('change', function(){
  	var value1=$("input#priceMin").val();
  	var value2=$("input#priceMax").val();
    if(parseInt(value1) > parseInt(value2)){
  		value1 = value2;
  		$("input#priceMin").val(value1);
      $('.price-range-min.value').html(value1);
  	}
  	$("#filter__range").slider("values", 0, value1);
    $('.price-range-min.value').html(value1);
  });

  $("input#priceMax").on('change', function(){
  	var value1=$("input#priceMin").val();
  	var value2=$("input#priceMax").val();
  	if (value2 > 20000) { value2 = 20000; $("input#priceMax").val(35000)}
  	if(parseInt(value1) > parseInt(value2)){
  		value2 = value1;
  		$("input#priceMax").val(value2);
      $('.price-range-max.value').html(value2);
  	}
  	$("#filter__range").slider("values",1,value2);
    $('.price-range-max.value').html(value2);
  });

  $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + $('#filter__range').slider('values', 0 ) + '</span>');
  $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + $('#filter__range').slider('values', 1 ) + '</span>');
});

 $("input#priceMin").on('change', function(){
	 var value1=$("input#priceMin").val();
	 var value2=$("input#priceMax").val();
	 if(parseInt(value1) > parseInt(value2)){
		 value1 = value2;
		 $("input#priceMin").val(value1);
		 $('.price-range-min.value').html(value1);
	 }
	 $("#filter__range").slider("values", 0, value1);
	 $('.price-range-min.value').html(value1);
 });

 $("input#priceMax").on('change', function(){
	 var value1=$("input#priceMin").val();
	 var value2=$("input#priceMax").val();
	 if (value2 > 20000) { value2 = 20000; $("input#priceMax").val(35000)}
	 if(parseInt(value1) > parseInt(value2)){
		 value2 = value1;
		 $("input#priceMax").val(value2);
		 $('.price-range-max.value').html(value2);
	 }
	 $("#filter__range").slider("values",1,value2);
	 $('.price-range-max.value').html(value2);
 });

 $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + $('#filter__range').slider('values', 0 ) + '</span>');
 $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + $('#filter__range').slider('values', 1 ) + '</span>');
});


$(".polzunok-5").slider({
	min: 0,
	max: 13000,
	values: [800, 10900],
	range: true,
	animate: "fast",
	slide : function(event, ui) {    
			$(".polzunok-input-5-left").val(ui.values[ 0 ]);   
			$(".polzunok-input-5-right").val(ui.values[ 1 ]);  
	}    
});
$(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
$(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
$(document).focusout(function() {
	var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),    
	opt_left = $(".polzunok-5").slider("option", "min"),
	where_right = $(".polzunok-5").slider("values", 1),
	input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),    
	opt_right = $(".polzunok-5").slider("option", "max"),
	where_left = $(".polzunok-5").slider("values", 0); 
	if (input_left > where_right) { 
			input_left = where_right; 
	}
	if (input_left < opt_left) {
			input_left = opt_left; 
	}
	if (input_left == "") {
	input_left = 0;    
	}        
	if (input_right < where_left) { 
			input_right = where_left; 
	}
	if (input_right > opt_right) {
			input_right = opt_right; 
	}
	if (input_right == "") {
	input_right = 0;    
	}    
	$(".polzunok-input-5-left").val(input_left); 
	$(".polzunok-input-5-right").val(input_right); 
	$(".polzunok-5").slider( "values", [ input_left, input_right ] );
});

