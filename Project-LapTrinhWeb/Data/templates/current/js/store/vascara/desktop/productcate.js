$(document).ready(function () {
    var productCateFilter = new ProductCateFilter();
    productCateFilter.listen();

    var arvalue0 = '';
    var arvalue1 = '';
    var a = window.location.search.replace('?', '').split('&');
    var arvalues;
    if (a != '')
    {
        for (var i = 0; i < a.length; i++) {
            var b = a[i].split("=");
            if (b[0] == 'price') {
                arvalues = b[1].split("-");
                arvalue0 = arvalues[0];
                arvalue1 = arvalues[1];
                break;
            }
        }
    }

    $("#filterbyprice").ionRangeSlider({
        min: 300000,
        max: 5000000,
        from: (arvalue0 != '') ? arvalue0 : 300000,
        to: (arvalue1 != '') ? arvalue1 : 5000000,
        type: 'double',
        step: 50000,
        prettify_separator: ".",
        input_values_separator: "-",
        onFinish: function () {
            var viewcol =3;
            $('.facet').each(function(){
                if($(this).hasClass('active')){
                    viewcol = $(this).attr('data-col');
                }
            });
            if (location.search == '') {
                var prcate = $("#hdn_cate_id").val();
                var urls = '?price=' + $('#filterbyprice').val();
                if(urls.indexOf("?") >=0){
                    urls +="&cate="+prcate+"&viewcol="+viewcol;
                }else{
                    urls +="?cate="+prcate+"&viewcol="+viewcol;
                }
                urls = rooturl_store+"product/filterproduct" + urls;

                $.ajax({
                    url: urls,
                    dataType: "json",
                    beforeSend: function(){
                        $(".cls_loader").css('display','flex');
                    },
                    success: function (data) {
                        $('.listproduct').html("");
                        $('.listproduct').html(data.html);
                        if(data.endviewmore ==1){
                            $('.cate-view-more').addClass('hide');
                            $('.viewmore-totalitem').text(data.totalviewmore);
                       }else{
                           if(data.totalviewmore >0){
                                $('.cate-view-more').removeClass('hide');
                                $('.cate-view-more').attr('data-currentpage',data.curPage);
                                $('.viewmore-totalitem').text(data.totalviewmore);
                           }else{
                                $('.viewmore-totalitem').text('0');
                                $('.cate-view-more').addClass('hide');
                           }
                       }
                        window.history.pushState(null, null, '?price=' + $('#filterbyprice').val());
                    },
                    complete: function(){
                        $(".cls_loader").css('display','none');
                    }
                });
            } else
            {
                var urlsearch = removeParam('price', location.search);
                var priceparam = $('#filterbyprice').val();
                if (urlsearch.length == 1) {
                    priceparam = 'price=' + priceparam;
                } else {
                    priceparam = '&price=' + priceparam;
                }
                var prcate = $("#hdn_cate_id").val();
                var urls =  urlsearch + priceparam;
                if(urls.indexOf("?") >=0){
                    urls +="&cate="+prcate+"&viewcol="+viewcol;
                }else{
                    urls +="?cate="+prcate+"&viewcol="+viewcol;
                }
                urls = rooturl_store+"product/filterproduct" + urls;
                $.ajax({
                    url: urls,
                   // url: strurl,
                    dataType: "json",
                    beforeSend: function(){
                        $(".cls_loader").css('display','flex');
                    },
                    success: function (data) {
                        $('.listproduct').html("");
                        $('.listproduct').html(data.html);
                        if(data.endviewmore ==1){
                            $('.cate-view-more').addClass('hide');
                            $('.viewmore-totalitem').text(data.totalviewmore);
                       }else{
                           if(data.totalviewmore >0){
                                $('.cate-view-more').removeClass('hide');
                                $('.cate-view-more').attr('data-currentpage',data.curPage);
                                $('.viewmore-totalitem').text(data.totalviewmore);
                           }else{
                                $('.viewmore-totalitem').text('0');
                                $('.cate-view-more').addClass('hide');
                           }
                       }
                        window.history.pushState(null, null, urlsearch + priceparam); //TAYLQ change location.search + '&price=' + $('#filterbyprice').val()
                    },
                    complete: function(){
                        $(".cls_loader").css('display','none');
                    }
                });
            }

        }
    });

    $(".irs-slider.from").html('<i class="fa fa-angle-right" aria-hidden="true"></i>');
    $(".irs-slider.to").html('<i class="fa fa-angle-left" aria-hidden="true"></i>');
});

$(document).ready(function () {
    $(".btn-select").each(function (e) {
        var value = $(this).find("ul li.selected").html();
        if (value != undefined) {
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
    });

    //swap image on color select
    $(".btn-select-color label.btn.btn-primary").click(function () {
        var image = $(this).data("image");
        imageElement = $(this).parents("div.caption").prev().find("img");
        imageElement.attr("src", image);
    });
});

$(document).on('click', function (e) {
    var target = $(e.target).closest(".btn-select");
    if (!target.length) {
        $(".btn-select").removeClass("active").find("ul").hide();
    }
});

//TayLQ created function
function removeParam(key, sourceURL) {
    var rtn = sourceURL.split("?")[0],
            param,
            params_arr = [],
            queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        rtn = rtn + "?" + params_arr.join("&");
    }
    return rtn;
}
$(document).ready(function() {
    if ( $(window).width() > 1200 ) {
        var width = $(".filter").parent().width();
        $('.filter').css('width',width); 
    }
  });
$(window).resize(function() {
    if ( $(window).width() > 1200 ) {
        var width = $(".filter").parent().width();
        $('.filter').css('width',width); 
    }
});
$(document).ready(function(){
    var start = $(".filter").offset().top;
    if ($(window).width() > 991) {
        $(window).scroll(function(){
            var scroll_top = $(this).scrollTop();
            if (scroll_top > start) {
                $('.filter').addClass('fixed-filter'); 
            }else if(scroll_top < start){
                $('.filter').removeClass('fixed-filter'); 
            }
            var height_element_parent =  $(".filter").parent().outerHeight();

            var height_element = $(".filter").height();

            var position_fixed_max = height_element_parent - height_element;

            var position_fixed = scroll_top < start ? start : position_fixed_max > scroll_top ? 0 : position_fixed_max - scroll_top ;
            $(".filter").css("top",position_fixed);
        });
    };
})