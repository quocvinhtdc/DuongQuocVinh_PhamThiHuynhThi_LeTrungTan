(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _$$owlCarousel;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// $(document).ready(function(){
//  // $(".detail-item").hide();
//  // $('.status a').click(function(){
//  //  var data = $(this).attr('data-idproduct');
//  //  if($("."+data).is(':hidden')===true){
//  //      $(".detail-item").slideUp();
//  //      $("."+data).slideDown();
//  //  }else{
//  //      $(".detail-item").slideUp();
//  //  }
//     // });
//     // //Show mobi
//     // $(".detail-item-mb").hide();
//  // $('.bt-view .readmore').click(function(){
//  //  var data = $(this).attr('data-idproduct');
//  //  if($("."+data).is(':hidden')===true){
//  //      $(".detail-item-mb").slideUp();
//  //      $("."+data).slideDown();
//  //  }else{
//  //      $(".detail-item-mb").slideUp();
//  //  }
//     // });
//     // $('.slide-new-product').owlCarousel({
//     //     items:1,
//     //     pagination: true,
//     //     navText:["",""],
//     //     responsiveClass:true,
//     //     loop:true,
//     //     margin:0,
//     //     nav:true,
//     //     //navText: ["","<img src='/templates/current/img/icon/next.png'>"],
//     //     responsive:{
//     //         0:{
//     //             items:1
//     //         },
//     //         568:{
//     //             items:1
//     //         },
//     //         768:{
//     //             items:1
//     //         },
//     //         1000:{
//     //             items:1
//     //         }
//     //     }
//     // });
//  // $(".slide-product").owlCarousel({
//     //     items:1,
//     //     pagination: true,
//     //     navText:["",""],
//     //     responsiveClass:true,
//     //     loop:true,
//     //     margin:0,
//     //     nav:true,
//     //     navText: ["","<img src='/templates/current/img/icon/next.png'>"],
//     //     responsive:{
//     //         0:{
//     //             items:1
//     //         },
//     //         568:{
//     //             items:1
//     //         },
//     //         768:{
//     //             items:1
//     //         },
//     //         1000:{
//     //             items:1
//     //         }
//     //     }
//     // });
//     // $(".group-item").owlCarousel({
//     //     items:1,
//     //     pagination: true,
//     //     navText:["",""],
//     //     responsiveClass:true,
//     //     loop:true,
//     //     margin:30,
//     //     nav:true,
//     //     navText: ["<img src='/templates/current/img/media/prev.png'>","<img src='/templates/current/img/media/next.png'>"],
//     //     responsive:{
//     //         0:{
//     //             items:1
//     //         },
//     //         568:{
//     //             items:1
//     //         },
//     //         768:{
//     //             items:1
//     //         },
//     //         1000:{
//     //             items:2
//     //         },
//     //         1199:{
//     //             items:3
//     //         }
//     //     }
//     // });
//     $(".item").click(function(){
//         var qs = $(this).parent().attr('data-ct');
//         if($(this).hasClass('active'+ qs)){
//             //Da co active roi
//         }else{
//             $('.item').removeClass('active'+ qs);
//             $(this).addClass('active'+ qs);
//         }
//     });
//     $('.button-next').click(function(){
//         var groupqs = $('.active-group').attr('data-next');
//         $('.group-qs').removeClass("active-group");
//         $('.group-qs[data-qs="'+ groupqs +'"]').addClass("active-group");
//         $('html, body').animate({
//             scrollTop: $(".content-qs-page").offset().top
//           }, 1000);
//     });
//     $('.tabhome li').click(function(){
//         var tab = $(this).attr('data-tab');
//         if($(this).hasClass('active-tab')){
//             //Da co active roi
//         }else{
//             $('.tabhome li').removeClass('active-tab');
//             $('.content-tab').addClass('hide');
//             $(this).addClass('active-tab');
//             $('.content-tab[data-ct="'+ tab +'"]').removeClass('hide');
//         }
//     });

// });
// //Get iframe video youtube
// function mouseOverOption(argument) {
//     var parent = $(argument).parent('p');
//     var input = parent.find('input');
//     var key = input.attr('data-optiongroup');
//     var valueviewer = $('.valueviewer[data-optiongroup="'+key+'"]');
//     var value = $(argument).attr('data-value');

//     valueviewer.html(value);
// }
// ////Gift card
// $('.mess-card').keyup(function(){
//     var content1 = $('.content1').val();
//     var content2 = $('.content2').val();
//     var content3 = $('.content3').val();
//     var color = $('#color-mess').val();
//     $('#giftcard .content-input .show-content').css('color',color);
//     $('#giftcard .content-input .show-content .input1').text(content1);
//     $('#giftcard .content-input .show-content .input2').text(content2);
//     $('#giftcard .content-input .show-content .input3').text(content3);

// });
// $('#giftcard .list-price li').click(function(){
//     $('#giftcard .list-price li').removeClass('active-change');
//     $(this).addClass('active-change');
//     $('#giftcard .list-template .item').removeClass('active-change');
//     $('#giftcard .list-template .item:first-child').addClass('active-change');
// });
// $('#giftcard .list-template .item').click(function(){
//     $('#giftcard .list-template .item').removeClass('active-change');
//     $(this).addClass('active-change');
// });
// $('#giftcard .item-information .title-info').click(function(){
//     $('#giftcard .item-information .icon-close-info').toggle();
//     $('#giftcard .item-information .icon-show-info').toggle();
//     $('#giftcard .item-information .content-item').toggle();
// });
// //Cart checkout
// $("#ttmh:checkbox").change(function() {
//     var ischecked= $(this).is(':checked');
//     if(!ischecked){
//         $('.user-info').slideDown();
//     }
//     else{
//         $('.user-info').slideUp();
//     }
// });
// //Chọn địa chỉ nhận hàng
// $('.tab-shipping li').click(function(){
//     if($(this).hasClass('active')){

//     }else{
//         $('.tab-shipping li').removeClass('active');
//         $(this).addClass('active');
//         var datacontent = $(this).attr('data-content');
//         $('.data-content-address').hide();
//         $('.data-content-address[data-tab="'+ datacontent+'"]').show();
//     }
// });
// //XHĐ GTGT
// $("#xuathd:checkbox").change(function() {
//     var ischecked= $(this).is(':checked');
//     if(ischecked){
//         $('.bill-form').slideDown();
//     }
//     else{
//         $('.bill-form').slideUp();
//     }
// });

$.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '', // Text for element
    activeOverlay: false });

$(document).ready(function () {
    if ($(window).width() > 991) {
        startCarousel();
    } else {
        $('.owl-carousel').addClass('off');
    }
});
$(window).resize(function () {
    if ($(window).width() > 991) {
        startCarousel();
    } else {
        stopCarousel();
    }
});
$('.btn-showmenu').click(function() {
    $(this).toggleClass('active');
    $('.menu').toggleClass('open');
    $('.overlay').fadeToggle(500);
    $('.main-header').toggleClass('fixed-header');
    $('.search-mobi').removeClass('active');
});
$('.btn-showsub').click(function () {
    $(this).toggleClass('active');
    //$(this).siblings('.sub').slideToggle(300);
    $(this).siblings('.sub').toggleClass('open');
});
$('.btn-closesub').click(function () {
    $(this).parent().toggleClass('open');
});
$('.search-icon').click(function () {
    $('.search-mobi').toggleClass('active');
    $('.search-mobi input').focus();

    $('.menu').removeClass('open');
    $('.btn-showmenu').removeClass('active');
    $('.main-header').removeClass('fixed-header');
});
$(".mainslide").owlCarousel((_$$owlCarousel = {
    items: 1,
    pagination: true,
    navText: ["", ""],
    responsiveClass: true,
    loop: true,
    margin: 0,
    autoplay:true,
    autoplayTimeout: 5000,
    autoplayHoverPause:true,
    nav: true
}, _defineProperty(_$$owlCarousel, 'navText', ["<img src='/templates/current/img/n-icon/prev.png'>", "<img src='/templates/current/img/n-icon/next.png'>"]), _defineProperty(_$$owlCarousel, 'responsive', {
    0: {
        items: 1
    },
    568: {
        items: 1
    },
    768: {
        items: 1
    },
    1000: {
        items: 1
    },
    1190: {
        items: 1
    },
    1820: {
        items: 1
    }
}), _$$owlCarousel));
function startCarousel() {
    var _$$owlCarousel2, _$$owlCarousel3;

    $(".slide-block.slide-col-4").owlCarousel((_$$owlCarousel2 = {
        items: 4,
        pagination: true,
        navText: ["", ""],
        responsiveClass: true,
        loop: true,
        margin: 15,
        nav: true
    }, _defineProperty(_$$owlCarousel2, 'navText', ["<img src='/templates/current/img/n-icon/prev.png'>", "<img src='/templates/current/img/n-icon/next.png'>"]), _defineProperty(_$$owlCarousel2, 'responsive', {
        0: {
            items: 1,
            margin: 30
        },
        568: {
            items: 2,
            margin: 30
        },
        768: {
            items: 2,
            margin: 30
        },
        992: {
            items: 3,
            margin: 30
        },
        1190: {
            items: 4,
            margin: 30
        },
        1820: {
            items: 4,
            margin: 30
        }
    }), _$$owlCarousel2));
    $(".slide-block.slide-col-3").owlCarousel((_$$owlCarousel3 = {
        items: 3,
        pagination: true,
        navText: ["", ""],
        responsiveClass: true,
        loop: true,
        margin: 15,
        nav: true
    }, _defineProperty(_$$owlCarousel3, 'navText', ["<img src='/templates/current/img/n-icon/prev.png'>", "<img src='/templates/current/img/n-icon/next.png'>"]), _defineProperty(_$$owlCarousel3, 'responsive', {
        0: {
            items: 1,
            margin: 30
        },
        568: {
            items: 2,
            margin: 30
        },
        768: {
            items: 2,
            margin: 30
        },
        992: {
            items: 3,
            margin: 30
        },
        1190: {
            items: 3,
            margin: 30
        },
        1820: {
            items: 3,
            margin: 30
        }
    }), _$$owlCarousel3));
}
function stopCarousel() {
    var owl = $('.slide-block');
    owl.trigger('destroy.owl.carousel');
}
/*$(".sortprice").ionRangeSlider({
    min: 300000,
    max: 5000000,
    from: 300000,
    to: 5000000,
    type: 'double',
    step: 50000,
    prettify_separator: ".",
    input_values_separator: "-"
});*/
$(".irs-slider.from").html('<i class="fa fa-angle-right" aria-hidden="true"></i>');
$(".irs-slider.to").html('<i class="fa fa-angle-left" aria-hidden="true"></i>');
$('.title-group-filter').click(function () {
    $(this).toggleClass('show');
    $(this).nextUntil().toggleClass('active');
});
$('html').on('click','.facet', function(){
    var col = $(this).attr('data-col');
    $('.facet').each(function(){
        $(this).removeClass('active');
    });
    $(this).addClass('active');
    if(col == 2){
        $('.listproduct .item').addClass('col-2');
    }else{
        $('.listproduct .item').removeClass('col-2');
    }
});

$('.show-filter').click(function () {
    $('.filter').toggleClass('open-filter');
});
$('.close-filter').click(function () {
    $('.filter').toggleClass('open-filter');
});
//Tooltip
$('[data-toggle="tooltip"]').tooltip();
//Change number detail
$('.plus').click(function () {
    var number = Number($('.input-number input').val());
    $('.input-number input').val(number + 1);
});
$('.minus').click(function () {
    var number = Number($('.input-number input').val());
    if(number==1){
        return false;
    }
    $('.input-number input').val(number - 1);
});
$('#pquantity').change(function () {
    var quantity = $(this).val();
    if(!$.isNumeric(quantity) || quantity <1 || quantity%1 !== 0){
        $(this).val(1);
    }
});
$('.group-content .body-content').hide();
$('.group-content:nth-child(1) .body-content').show();
$('.group-content .header-content').click(function () {
    $(this).nextUntil().slideToggle();
});
//
$('.colorselect.item-instock').click(function () {
    $('.colorselect.item-instock').removeClass('active');
    $('#choose-color').html('');
    if($('#option_size').length ==0){ //khong ton tai la trang giay
        $('.sizeselect.item-instock').removeClass('active');
        $('#lblsize').text("Tất cả");
    }
    $(".in-stock").html('');
    
    var name = $(this).attr('data-name');
    $("#lblcolor").text(name);
    $(this).addClass('active');
    var imgColor = $(this).attr('data-color');
    $('.list-images-product').each(function(){
        $(this).addClass('hide');
    });
    $('.list-images-product.colorimg'+imgColor).removeClass('hide');
});

$('.sizeselect').click(function () {
    if($(this).hasClass('item-instock')){
        $('.sizeselect.item-instock').removeClass('active');
        $('#choose-size').html('');
        var name = $(this).attr('data-name');
        $("#lblsize").text(name);
        $(this).addClass('active');
    }
});
////Detail
$(document).ready(function () {
    if ($(window).width() < 1200) {
        startCarouselDetail();
    } else {
        $('.owl-carousel').addClass('off');
    }
});
$(window).resize(function () {
    if ($(window).width() < 1200) {
        startCarouselDetail();
    } else {
        stopCarouselDetail();
    }
});
function startCarouselDetail() {
    $(".slide-detail").owlCarousel(_defineProperty({
        items: 1,
        pagination: true,
        navText: ["", ""],
        responsiveClass: true,
        loop: true,
        margin: 15,
        nav: true
    }, 'navText', ["<img src='/templates/current/img/n-icon/prev.png'>", "<img src='/templates/current/img/n-icon/next.png'>"]));
}
function stopCarouselDetail() {
    var owl = $('.slide-detail');
    owl.trigger('destroy.owl.carousel');
}

$('.subscribebutton').click(function(){
    var email = $('.subscribefrm input').val();
    $.ajax({
            type: 'POST',
            url:  rooturl_store + 'newslettersubscriber/addajax',
            dataType: 'json',
            data: 'email=' + email,
            success: function(json){
                if(json.success == 1){
                    $('.subscribefrm input').val('');
                }
                $('.alert-mess-subcri').text(json.message);
            }
    });
});

$('html').on('click','.ilikes',function(){
    var data = {
    'fpid' : $(this).attr('data-value'),
    'ftoken' : $('#fwishlisttoken').val()
    }
    var obj = $(this);
    if($(this).hasClass('active')){
        $.ajax({
            type: "POST",
            dataType: 'json',
            data : data,
            url: rooturl_store + 'wishlist/removev2',
            error: function() {

            },
            success: function(json) {
                if (json.success == 1) {
                    obj.removeClass('active');
                    obj.children().attr('src','/templates/current/img/n-icon/heart.png')
                    var totallove = Number($('.wishlisttoggle').find('span').text());
                    if(totallove ==1){
                        $('.wishlisttoggle').find('span').remove();
                    }else{
                        totallove -= 1;
                        $('.wishlisttoggle').find('span').text(totallove);
                    }
                }
            }
        });
    }else{
        $.ajax({
            type: "POST",
            dataType: 'json',
            data : data,
            url: rooturl_store + 'wishlist/addajax',
            error: function() {
            },
            success: function(json) {
                if (json.success == 1) {
                    obj.addClass('active');
                    obj.children().attr('src','/templates/current/img/n-icon/heart-ac.png')
                    var totallove = Number($('.wishlisttoggle').find('span').text());
                    if(totallove ==0){
                        $('.wishlisttoggle').find('a').append('<span>1</span>');
                    }else{
                    totallove += 1;
                    $('.wishlisttoggle').find('span').text(totallove);
                    }
                }
            }
        });
    }
});

$(document).ready(function () {
    if ($(window).width() > 991) {
        $('.content-product').insertAfter('.content-detail-pc');
    }else if($(window).width() < 768) {
       $('.content-product').insertAfter('.product-info');
    }else{
       $('.content-product').insertAfter('.content-detail-mobi'); 
    }
});
$(window).resize(function () {
    if ($(window).width() > 991) {
        $('.content-product').insertAfter('.content-detail-pc');
    }else if($(window).width() < 768) {
       $('.content-product').insertAfter('.product-info');
    }else{
       $('.content-product').insertAfter('.content-detail-mobi'); 
    }
});

$('.cartbottom').hide();
$(document).ready(function(){
    if ($(window).width() < 1199) {
        $.ajax({
            type: 'POST',
            url: rooturl_store + 'cart/getCartDetail',
            dataType: 'json',
            error: function() {
            },
            success: function(json){
                var html ='';
                if(json['count'] >0){
                    html += "<ul>";
                    $.each(json.listproduct, function (i, obj) {
                        $.each(obj, function (k, v) {
                            if(k=="fimage"){
                                if(i <=2){
                                    if(i!=2){
                                        html += '<li><img src="'+v+'" alt=""></li>';
                                    }else{
                                        if(json['count'] >3){
                                            html += '<li><img src="'+v+'" alt=""><span> +'+ (json['count']-3) +' </span></li>';
                                        }else{
                                            html += '<li><img src="'+v+'" alt=""></li>';
                                        }
                                    }  
                                }
                            }
                        });
                    });
                    html += "</ul>";
                    $(".listitemcart").html(html);
                    $("#hd_totalprice").html(json.total+" VND");
                    $('.cartbottom').show();
                }
            }
        });
    }
})

$('.fancybox').fancybox();
$('.top-header .close').click(function(){
    $('.top-header').html('');
});

},{}]},{},[1])
//# sourceMappingURL=main.js.map

