
(function($){
	$(function(){

        
        $('.phone-nav').click(function () {
            $("body").toggleClass("navshown");
        });
        
        
        
        /*Header on scroll*/
        var header = new Headroom(document.querySelector(".header-wrap"), {
            tolerance: 5,
            offset: 205,
            classes: {
                initial: "headroom",
                pinned: "header-fixed",
                unpinned: "header-static"
            }
        });

        header.init();
        
        

        // ANIMATION CHECK IF IN VIEW
        var $animation_elements = $('.anim-el');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var insetAmount = window_height / 20 // fifth of the screen
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height) - insetAmount;

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                }
            });
        }
        $window.on('scroll orientationchange resize', check_if_in_view);
        $window.trigger('scroll');
        
        
        
        
        if ($('.creat-item-inner').length) {
            $('.creat-item-inner').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.creat-item-inner').slick('resize');
            });
        }
        
        
        
        if ($('.products-item-wrap').length) {
            $('.products-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                autoplay: false,
                autoplaySpeed: 2000,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.products-item-wrap').slick('resize');
            });
        }
        
        
        if ($('.equipment-thumb-inner').length) {
            $('.equipment-thumb-inner').slick({
                arrows: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 4300,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false,
                variableWidth: false,
            })
            
            $(window).on('resize', function () {
                $('.equipment-thumb-inner').slick('resize');
            });
        }
        
        
        if ($("select.styled-select").length) {
            $("select.styled-select").selectric({

            });
        }
        
        $('.products-page-tab-triger-wrap ul li').click(function(){
            $('.products-page-tab-triger-wrap ul li').removeClass('active');
            $(this).addClass('active');
            $('.products-page-inner .products-page-item-wrap').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
       
        
        $('.single-tab-inner ul li').click(function(){
            $('.single-tab-inner ul li').removeClass('active');
            $(this).addClass('active');
            $('.single-item-wrap').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        
        
        $('.blog-tab-triger-wrap ul li').click(function(){
            $('.blog-tab-triger-wrap ul li').removeClass('active');
            $(this).addClass('active');
            $('.blog-welcome-item-wrap').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        
        
        
     
        
        
		
	})// End ready function.
   
	

})(jQuery)

function alertFilename() {
    var thefile = document.getElementById('thefile');
    document.getElementById('fileName').innerHTML =  thefile.value; 
}