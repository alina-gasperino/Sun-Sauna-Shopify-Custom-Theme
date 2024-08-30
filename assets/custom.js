$('.image_wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true
});

$(".left").click(function() {
    $(".slick-prev").click();
})

$(".right").click(function() {
    $(".slick-next").click();
})