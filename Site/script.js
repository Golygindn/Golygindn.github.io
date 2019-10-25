

$('.menu a').each(function () {

    const link = $(this).attr('href');

    if (window.location.href.includes(link)) {
        $(this).addClass('active');
    }
});




// /*burger*/
//
// (function(){
//     const burger = document.querySelector('.burger-container'),
//         header = document.querySelector('.header');
//
//     burger.onclick = function() {
//         header.classList.toggle('menu-opened');
//     }
// }());


/*burger ver 2*/

$('.mobile-menu-btn').on('click', function() {
    if($(this).hasClass('active')) {
        $('.mobile-menu-btn').removeClass('active');
        $('.menu_mobile-active').removeClass('menu_mobile-active');
    } else {
        $('.mobile-menu-btn').addClass('active');
        $('.menu_mobile').addClass('menu_mobile-active');
        $('html').addClass('menu_html');

    }
});
s
