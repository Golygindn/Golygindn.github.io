

$('.menu a').each(function () {

    const link = $(this).attr('href');

    if (window.location.href.includes(link)) {
        $(this).addClass('active');
    }
});




/*burger*/

(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header');

    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());
