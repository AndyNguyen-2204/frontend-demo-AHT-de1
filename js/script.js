$(document).ready(function () {
     //Ẩn hiện title HEADER
     $('.header-right-wrap').click(function (e) { 
        e.preventDefault();
        $(this).find('.header-right-title').toggle('show');
        $(this).siblings().toggle('hide');
    });

    //ĐÓNG TITLE WELCOME TO FRANCO
    $('.content-welcome').click(function (e) { 
        e.preventDefault();
        $(this).find('.content-welcome-title').toggle('show');
    });

    $('.button-search').click(function (e) { 
        e.preventDefault();
       $('.form').show();
    });


//ĐÓNG FORM TÌM KIẾM
    $('.close').click(function (e) { 
        e.preventDefault();
       $('.form').hide();
    });

//SHOW ICON HEART AND CART
    $('.category').click(function (e) { 
        e.preventDefault();
        $('.button-love-and-cart').show();
    });
     
//CLOSE ICON HEART AND CART
$('.close-heart-and-cart').click(function (e) { 
    e.preventDefault();
    $('.button-love-and-cart').hide();
}); 
// MỞ NAVIGATION  MOBILE
    $('.nav-title').click(function (e) { 
        e.preventDefault();
       $('.navigation').addClass('active');
    });

//ĐÓNG NAVIGATION MOBILE
    $('.button-close-navigation').click(function (e) { 
        e.preventDefault();
       $('.navigation').removeClass('active');
    });


   
});