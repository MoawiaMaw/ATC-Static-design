$(document).ready(function () {

    console.log($(window).scrollTop())
    $(document).on("scroll", function () {
        console.log($(window).scrollTop())
        if ($(window).scrollTop() < 95) {
            $('.up-button').fadeOut()
        } else {
            $(".up-button").fadeIn('200')
        }
    })
    $(".up-button").click(function () {
        $("html, body").animate({ scrollTop: 0 }, '300')
    })
})