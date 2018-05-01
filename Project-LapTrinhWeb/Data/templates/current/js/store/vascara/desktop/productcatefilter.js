var ProductCateFilter = function () {
    var self = this;
    var url = '';
    var filterurl = ''; // store filter url exclude queryString
    var queryString = '';
    var location = window.location;
    var priceFilter = '';
    var timer;

    this.objectHTMLName = {
        options: '.viewtype',
        viewmoreproduct: '.cate-view-more'
    }

    this.objectHTML = {
        options: $(this.objectHTMLName.options),
        viewmoreproduct: $(this.objectHTMLName.viewmoreproduct)
    }

    this.init = function() {
        var hostname = location.origin;
        var pathname = location.pathname;
        this.filterurl = hostname + pathname;
        this.queryString = this.getQueryString();

    }


    // get queryString in url with define ?key1=value1&key2=value2 ...
    // return Array object = {key1:value1, key2:value2}
    this.getQueryString = function() {
        var search = location.search;
        var params = {
            'id': '',
            'page': 1
        };
        var pairs = [];

        // initialize parameters base on current page
        $('.filter .viewtype').each(function(){
            var key = $(this).data('name');
            params[key] = '';
        });

        if (search != '') {
            search = search.substr(1);
            pairs = search.split('&');

            if (pairs.length > 0) {
                for (var index in pairs) {
                    var tmp = pairs[index].split('=');
                    if (typeof tmp[0] !== 'undefined' && tmp[0] != 'undefined') {
                        params[tmp[0]] = tmp[1];
                    }
                }
            }
        }

        return params;
    }

    this.checboxClick = function() {
        self.objectHTML.options.each(function(index, el){
            $(el).find('input[type="checkbox"]').on('change', function(o){
                var checkbox = $(this).find('input[type="checkbox"]:checked');
                var i = $(this).find('i');
                var checked = checkbox.is(':checked');
                if (checked) {
                    i.removeClass('icon-check').addClass('icon-uncheck');
                } else {
                    i.removeClass('icon-uncheck').addClass('icon-check');
                }
                checkbox.prop('checked', !checked);

                self.updateOptionValue($(el));
                self.run();
            });
        });
    }
    
    this.viewmoreproductClick = function() {
        $('html').on('click','.cate-view-more', function(){
            self.runviewmoreproduct();
        });
    }
    

    this.updateOptionValue = function(element){
        //var name = unsign(element.data('name'));
        var name = element.data('name');
        var valueArray = [];
        var value = '';
        if (name == 'price') {
            if (priceFilter != '') {
                valueArray.push(priceFilter);
            }
        } else {
            element.find('input[type="checkbox"]:checked').each(function(index, el){
                valueArray.push($(el).data('value'));
            });
        }
        
        if (valueArray.length > 0 && name != 'undefined' && typeof name !== 'undefined') {
            value = valueArray.join('|');
            self.queryString[name] = value;
        } else {
            self.queryString[name] = '';
        }
        
    }


    this.buildUrl = function() {
        self.url = self.filterurl;
        var params = '';
        //Start TayLQ set price params if exists
        var pricevalue ='';
        if(location.search.includes("price")){
            pricevalue = self.getVauleParamByName('price');
            if(pricevalue != null){
                self.queryString["price"] = pricevalue;
            }
        }
        //End TayLQ set price params if exists
        for (var index in self.queryString) {
            if (self.queryString[index] != '') {
                if(index == 'page'){//TAYLQ fix khi chọn filter chuyen trang về 1, tránh trường hợp đang ở trang 2,3,.. (nếu kết quả filter chỉ 1 trang thì không hiển thị)
                    self.queryString[index] =1;
                }
                params += (params != '' ? '&' : '') + index + '=' + self.queryString[index];
            }
        }

        if (params != '') {
            self.url += '?' + params;
        }
        return self.url;
    }
    
    this.viewmoreproductbuildUrl = function() {
        self.url = self.filterurl;
        var params = '';
        //Start TayLQ set price params if exists
        var pricevalue ='';
        if(location.search.includes("price")){
            pricevalue = self.getVauleParamByName('price');
            if(pricevalue != null){
                self.queryString["price"] = pricevalue;
            }
        }
        //End TayLQ set price params if exists
        for (var index in self.queryString) {
            if (self.queryString[index] != '') {
                if(index == 'page'){
                    var pagenext = Number($('.cate-view-more').attr('data-currentpage'));
                    pagenext +=1;
                    self.queryString[index] =pagenext;
                }
                params += (params != '' ? '&' : '') + index + '=' + self.queryString[index];
            }
        }

        if (params != '') {
            self.url += '?' + params;
        }
        return self.url;
    }
    
    //Start TayLQ created function
    this.getVauleParamByName = function(name, url){
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    //End TayLQ created function
    
    // This function will load product base on filter
    this.run = function() {
        var viewcol =3;
        $('.facet').each(function(){
            if($(this).hasClass('active')){
                viewcol = $(this).attr('data-col');
            }
        });
        self.buildUrl();
        var currenturl = self.url;
        var urls =currenturl.replace(self.filterurl, "");
        var prcate = $("#hdn_cate_id").val();
        if(urls.indexOf("?") >=0){
            urls +="&cate="+prcate+"&viewcol="+viewcol;
        }else{
            urls +="?cate="+prcate+"&viewcol="+viewcol;
        }
        urls = rooturl_store+"product/filterproduct" + urls;
        self.filterProduct(urls,currenturl);
    }
    
    this.runviewmoreproduct = function() {
        var viewcol =3;
        $('.facet').each(function(){
            if($(this).hasClass('active')){
                viewcol = $(this).attr('data-col');
            }
        });
        self.viewmoreproductbuildUrl();
        var currenturl = self.url;
        var urls =currenturl.replace(self.filterurl, "");
        var prcate = $("#hdn_cate_id").val();
        if(urls.indexOf("?") >=0){
            urls +="&cate="+prcate+"&viewmore=1&viewcol="+viewcol;
        }else{
            urls +="?cate="+prcate+"&viewmore=1&viewcol="+viewcol;
        }
        urls = rooturl_store+"product/filterproduct" + urls;
        self.viewmorefilterProduct(urls,currenturl);
    }
    
    this.viewmorefilterProduct =  function(urls, currenturl){ //TayLQ add
        $.ajax({
        url: urls,
        dataType: "json",
        beforeSend: function(){
            $(".cls_loader").css('display','flex');
        },
        success: function(data){
                $('.listproduct').append(data.html);
                if(data.endviewmore ==1){
                    $('.cate-view-more').addClass('hide');
                    $('.viewmore-totalitem').text(data.totalviewmore);
                }else{
                    $('.cate-view-more').removeClass('hide');
                    $('.cate-view-more').attr('data-currentpage',data.curPage);
                    $('.viewmore-totalitem').text(data.totalviewmore);
                }
        }
        ,complete: function(){
            $(".cls_loader").css('display','none');
        }
        });
    }
    
    
    this.filterProduct =  function(urls, currenturl){ //TayLQ add
        $.ajax({
        url: urls,
        dataType: "json",
        beforeSend: function(){
            $(".cls_loader").css('display','flex');
        },
        success: function(data){
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
        }
        ,complete: function(){
            $(".cls_loader").css('display','none');
        }
        });
        window.history.pushState(null,null,currenturl);
    }
    // This function will listen of element filter event to filter product
    this.listen = function() {
        // register event of page
        self.checboxClick();
        self.viewmoreproductClick();
    }

    // run constructor when new instance had created
    this.init();
}