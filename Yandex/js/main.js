$(".panel-heading").click(function(e) {
  e.preventDefault();
  $(".panel-heading").not(this).removeClass('active');
  $(this).toggleClass('active');
})

jQuery(function() {
    var result_outptut = jQuery("#revenue span"),
        client = 6,
        revenue = 0,
        check = 5;

    function recount() {
        revenue = (client*400)*check;
        result_outptut.html(revenue + ' руб');
    };
    $(document).on("change keyup", "#amount", function() {
        client = +$(this).val();
        $("#slider-range-min").slider("value", client);
        recount();
    });
    $(document).on("change keyup", "#amount2", function() {
        check = +$(this).val();
        $("#slider-range-min2").slider("value", check);
        recount();
    });
});
$(function() {
    $("#slider-range-min").slider({
        range: "min",
        value: 6,
        min: 1,
        max: 12,
        slide: function(event, ui) {
            $('#amount').val(ui.value).trigger("change");
        }
    });
    $("#amount").val($("#slider-range-min").slider("value"));
});

$(function() {
    $("#slider-range-min2").slider({
        range: "min",
        value: 5,
        min: 1,
        max: 7,
        slide: function(event, ui) {
            $("#amount2").val(ui.value).trigger("change");
        }
    });
    $("#amount2").val($("#slider-range-min2").slider("value"));
});
