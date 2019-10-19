

$('.menu a').each(function () {

    const link = $(this).attr('href');

    if (window.location.href.includes(link)) {
        $(this).addClass('active');
    }
});

