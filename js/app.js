(function($) {
    "use strict";

    $(document).ready(function() {

        // Menu
        $('.menu').slicknav({
            prependTo: '.mobile-menu',
            label: '',
            closedSymbol: '&#xf054;',
            openedSymbol: '&#xf078;'
        });

        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();

        // scroll up

        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
            activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });

        /*===jQuery Animated Number===*/
        /*===Appear===*/
        $('.number-animate').appear();
        $(document.body).on('appear', '.numeric-count', function() {
            $('.number-animate').each(function() {
                $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-animation-duration")));
            });
        });

        $.fn.animateNumbers = function(stop, commas, duration, ease) {
            return this.each(function() {
                var $this = $(this);
                var start = parseInt($this.text().replace(/,/g, ""));
                commas = (commas === undefined) ? true : commas;
                $({
                    value: start
                }).animate({
                    value: stop
                }, {
                    duration: duration == undefined ? 500 : duration,
                    easing: ease == undefined ? "swing" : ease,
                    step: function() {
                        $this.text(Math.floor(this.value));
                        if (commas) {
                            $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                        }
                    },
                    complete: function() {
                        if (parseInt($this.text()) !== stop) {
                            $this.text(stop);
                            if (commas) {
                                $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                            }
                        }
                    }
                });
            });
        };


        // Expand Toggle

        var navTgl = "0";

        function fnNavTgl() {
            if (navTgl == "0") {
                $('.navigation').slideDown();
                $('.nav-toggle > i').removeClass('fa-bars');
                $('.nav-toggle > i').addClass('fa-close');
                return navTgl = "1";
            } else if (navTgl == "1") {
                $('.navigation').slideUp();
                $('.nav-toggle > i').removeClass('fa-close');
                $('.nav-toggle > i').addClass('fa-bars');
                return navTgl = "0";
            }
        }


        $('.nav-toggle').on('click', function(e) {
            e.preventDefault();
            fnNavTgl();
        });

        function fullBanner() {
            var ww = $(window).height();

            $('.full-banner').each(function() {
                var bgImg = $(this).attr('data-src');
                $(this).css({
                    'height': ww + 'px',
                    'background-image': 'url(' + bgImg + ')'
                });

            });

        }

        fullBanner();
        $(window).smartresize(function() {
            fullBanner();
        });


        var jRes = jRespond([
            {
                label: 'tablet',
                enter: 0,
                exit: 800
            },{
                label: 'desktop',
                enter: 801,
                exit: 100000
            }
        ]);

        jRes.addFunc([
            {
                breakpoint: 'tablet',
                enter: function() {
                    $('.page-nav').onePageNav({
                        scrollOffset: 40,
                        currentClass: 'current',
                        easing: 'easeInExpo',
                        filter: ':not(.external)'
                    });
                    $('.slicknav_nav').onePageNav({
                        scrollOffset: 40,
                        currentClass: 'current',
                        easing: 'easeInExpo',
                        filter: ':not(.external)'
                    });

                },
                exit: function() {

                }
            },{
                breakpoint: 'desktop',
                enter: function() {
                    $('.page-nav').onePageNav({
                        scrollOffset: 78,
                        currentClass: 'current',
                        easing: 'easeInExpo',
                        filter: ':not(.external)'
                    });
                    $('.slicknav_nav').onePageNav({
                        scrollOffset: 78,
                        currentClass: 'current',
                        easing: 'easeInExpo',
                        filter: ':not(.external)'
                    });

                },
                exit: function() {

                }
            }
        ]);




        $('.slicknav_nav li a').on('click',function(){
            $('.slicknav_btn').trigger('click');
        });



        // Set options
        var options = {
            offset: $(window).height() - 78,
            classes: {
                clone: 'nav-clone',
                stick: 'nav-stick',
                unstick: 'nav-unstick'
            }
        };

        // Headhesive destroy
        // banner.destroy();
        // Initialise with options
        var banner = new Headhesive('.fixed-banner', options);

        $('.nav-clone .page-nav').onePageNav({
            scrollOffset: 78,
            currentClass: 'current',
            easing: 'easeInExpo',
            filter: ':not(.external)'
        });

        $('.panel-down').click(function(e) {
            e.preventDefault();
            $.scrollTo('.section-objective', 300, {
                easing: 'swing'
            });

        });

        $('.appear').appear();

        /*===SKILL BAR===*/
        $(document.body).on('appear', function() {
            /*===Knob Piechart===*/

            $('.circle-progress').each(function() {
                var barColor = $(this).data('color')
                $(this).easyPieChart({
                    barColor: barColor,
                    trackColor: '#f3f3f3',
                    scaleColor: '#eeeeee',
                    lineWidth: 3,
                    lineCap: 'square', // butt, round and square.
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
            })
        });

        // owl Carousel

        $(".fun-factor").each(function() {
            $(this).owlCarousel({
                navigation: true,
                pagination: false,
                mouseDrag: false,
                //        autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 3,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [980, 2],
                itemsTablet: [768, 2],
                itemsTabletSmall: [568, 1],
                itemsMobile: [479, 1]
            });
            var funFactorNext = '<i class="fa fa-angle-right"></i>'
            var funFactorPrev = '<i class="fa fa-angle-left"></i>'

            $('.fun-factor .owl-prev').html(funFactorPrev);
            $('.fun-factor .owl-next').html(funFactorNext);
        });
        $(".team").each(function() {
            $(this).owlCarousel({
                navigation: true,
                pagination: false,
                navigationText: ["<i class='fa fa-angle-left'></i> <span>Prev</span>","<span>Next</span> <i class='fa fa-angle-right'></i>"],
                mouseDrag: false,
                //autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 3,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [980, 2],
                itemsTablet: [768, 2],
                itemsTabletSmall: [568, 1],
                itemsMobile: [479, 1]
            });

        });
        $(".testimonial-carousel").each(function() {
            $(this).owlCarousel({
                navigation: false,
                pagination: true,
                mouseDrag: false,
                //        autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 1
            });



        });

        $('.video-bg').videoBG({
            mp4: 'http://cvx.markup.themebucket.net/vids/bouncyballs.mp4',
            ogv: 'http://cvx.markup.themebucket.net/vids/bouncyballs.ogv',
            webm: 'http://cvx.markup.themebucket.net/vids/bouncyballs.webm',
            scale: true,
            height: 600,
            position: "relative",
            zIndex: 0
        });


        $(".post-carousel").owlCarousel({
            navigation: false,
            //        autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 2],
            itemsTabletSmall: [568, 1],
            itemsMobile: [479, 1]
        });

        // Bxslider

        $('.bxslider').bxSlider({
            adaptiveHeight: false,
            mode: 'fade',
            pager: true,
            captions: true
        });

        $('.tiles').imagesLoaded(function() {
            // Prepare layout options.
            var options = {
                itemWidth: 300, // Optional min width of a grid item
                autoResize: true, // This will auto-update the layout when the browser window is resized.
                resizeDelay: 5,
                container: $('.tiles'), // Optional, used for some extra CSS styling
                offset: 10, // Optional, the distance between grid items
                outerOffset: 20, // Optional the distance from grid to parent
                flexibleWidth: '50%' // Optional, the maximum width of a grid item
            };

            // Get a reference to your grid items.
            var handler = $('.tiles li'),
                filters = $('.filters li');

            var $window = $(window);
            $window.resize(function() {
                var windowWidth = $window.width(),
                    newOptions = {
                        flexibleWidth: '50%'
                    };

                // Breakpoint
                if (windowWidth < 1024) {
                    newOptions.flexibleWidth = '100%';
                }

                handler.wookmark(newOptions);

            });

            // Call the layout function.
            handler.wookmark(options);
            /**
             * When a filter is clicked, toggle it's active state and refresh.
             */
            var onClickFilter = function(event) {
                var item = $(event.currentTarget),
                    activeFilters = [];

                if (!item.hasClass('active')) {
                    filters.removeClass('active');
                }
                item.toggleClass('active');

                // Filter by the currently selected filter
                if (item.hasClass('active')) {
                    activeFilters.push(item.data('filter'));
                }

                handler.wookmarkInstance.filter(activeFilters);
            }

            // Capture filter click events.
            filters.click(onClickFilter);
        });

        $('.venobox').venobox();

        //Justified Grid
        $(".grid-gallery").justifiedGallery({
            sizeRangeSuffixes : {
                lt100 : '',
                lt240 : '',
                lt320 : '',
                lt500 : '',
                lt640 : '',
                lt1024 : ''
            },
            rowHeight: 300,
            fixedHeight: false,
            lastRow: 'justify',
            margins: 10,
            randomize: false
        });

        // lightgallery
        $(".lightGallery").lightGallery();
        $('.grid-gallery').lightGallery();

        $('.grid-wrap').mouseenter(function(e) {

            $(this).children('.grid-hover').stop(false, true).fadeIn(300);

            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();


        }).mouseleave(function(e) {
                $(this).children('.grid-hover').stop(false, true).fadeOut(300);
            });

    });
})(jQuery);
