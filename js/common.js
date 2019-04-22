

$("#to-top").click(function () {
        $('html , body').animate({scrollTop: 0}, 'slow');
  });
//


$(".headert h5 a").click(function () {
    $(".mulu").show();
});
$(".mulu_a").click(function () {
    $(".mulu").hide();
})
$(".wechat").click(function () {
	$('.qrcode').fadeToggle();
})


