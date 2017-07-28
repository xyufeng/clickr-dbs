!function(){"use strict";function a(){function a(){function a(a,c){function d(a){var c=1===(e=1-e)?"width":"height";return Math.floor(Number(a)*b[c])}var e=0;i[c].coords=a.split(",").map(d).join(",")}var b={width:k.width/k.naturalWidth,height:k.height/k.naturalHeight};j.forEach(a)}function b(a){return a.coords.replace(/ *, */g,",").replace(/ +/g,",")}function c(){clearTimeout(l),l=setTimeout(a,250)}function d(){(k.width!==k.naturalWidth||k.height!==k.naturalHeight)&&a()}function e(){k.addEventListener("load",a,!1),window.addEventListener("focus",a,!1),window.addEventListener("resize",c,!1),window.addEventListener("readystatechange",a,!1),document.addEventListener("fullscreenchange",a,!1)}function f(){return"function"==typeof h._resize}function g(){i=h.getElementsByTagName("area"),j=Array.prototype.map.call(i,b),k=document.querySelector('img[usemap="#'+h.name+'"]'),h._resize=a}var h=this,i=null,j=null,k=null,l=null;f()?h._resize():(g(),e(),d())}function b(){function b(a){if(!a.tagName)throw new TypeError("Object is not a valid DOM element");if("MAP"!==a.tagName.toUpperCase())throw new TypeError("Expected <MAP> tag, found <"+a.tagName+">.")}function c(c){c&&(b(c),a.call(c),d.push(c))}var d;return function(a){switch(d=[],typeof a){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(a||"map"),c);break;case"object":c(a);break;default:throw new TypeError("Unexpected data type ("+typeof a+").")}return d}}"function"==typeof define&&define.amd?define([],b):"object"==typeof module&&"object"==typeof module.exports?module.exports=b():window.imageMapResize=b(),"jQuery"in window&&(jQuery.fn.imageMapResize=function(){return this.filter("map").each(a).end()})}();


(function ($) {
    $(document).ready(function () {

        $(".backtotop").click(function () {
            $("html, body").animate({scrollTop: 0}, "slow");
            return false;
        });

        var countflag = 0;
        $(window).scroll(function () {
            if ($('.abt-stats').length) {
                var oTop = $('.abt-stats').offset().top - window.innerHeight;
                if (countflag == 0 && $(window).scrollTop() > oTop) {
                    $('.abt-stats .counter').each(function () {
                        var $this = $(this),
                                countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        },
                                {

                                    duration: 2000,
                                    easing: 'swing',
                                    step: function () {
                                        $this.text(Math.floor(this.countNum));
                                    },
                                    complete: function () {
                                        $this.text(this.countNum);
                                        //alert('finished');
                                    }

                                });
                    });
                    countflag = 1;
                }
            }
        });

	/* Creating Impact Beyong Banking - First Section*/
        var countflagv0 = 0;
        $(window).scroll(function () {
            if ($('.marg-dbs-2').length) {
                var oTop = $('.marg-dbs-2').offset().top - window.innerHeight;
                if (countflagv0 == 0 && $(window).scrollTop() > oTop) {
                    $('.marg-dbs-2 .counter').each(function () {
                        var $this = $(this),
                                countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        },
                                {

                                    duration: 2000,
                                    easing: 'swing',
                                    step: function () {
                                        $this.text(Math.floor(this.countNum));
                                    },
                                    complete: function () {
                                        $this.text(this.countNum);
                                        //alert('finished');
                                    }

                                });
                    });
                    countflagv0 = 1;
                }
            }
        });
        
	/* Creating Impact Beyong Banking */
        var countflagv1 = 0;
        $(window).scroll(function () {
            if ($('.marg-dbs').length) {
                var oTop = $('.marg-dbs').offset().top - window.innerHeight;
                if (countflagv1 == 0 && $(window).scrollTop() > oTop) {
                    $('.marg-dbs .counter').each(function () {
                        var $this = $(this),
                                countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        },
                                {

                                    duration: 2000,
                                    easing: 'swing',
                                    step: function () {
                                        $this.text(Math.floor(this.countNum));
                                    },
                                    complete: function () {
                                        $this.text(this.countNum);
                                        //alert('finished');
                                    }

                                });
                    });
                    countflagv1 = 1;
                }
            }
        });	
	
	/* Creating Impact Beyong Banking - online platform */
        var countflagv2 = 0;
        $(window).scroll(function () {
            if ($('.online-platform').length) {
                var oTop = $('.online-platform').offset().top - window.innerHeight;
                if (countflagv2 == 0 && $(window).scrollTop() > oTop) {
                    $('.online-platform .counter').each(function () {
                        var $this = $(this),
                                countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        },
                                {

                                    duration: 2000,
                                    easing: 'swing',
                                    step: function () {
                                        $this.text(Math.floor(this.countNum));
                                    },
                                    complete: function () {
                                        $this.text(this.countNum);
                                        //alert('finished');
                                    }

                                });
                    });
                    countflagv2 = 1;
                }
            }
        });		

        $("map").imageMapResize();

        $('#houseareamap area').click(function () {
			$('#hse-tabnav a[data-maps="' + $(this).data('maps') + '"]').tab('show');		
        })
	

        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            var target = $(e.target).data('maps') // activated tab
	    	console.log(target);
            $('.hse-mask').fadeOut(300);
            $('#' + target).fadeIn(300);
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				console.log(target);
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 150
					}, 1000);
					return false;
				}
			}	    
        });



    });
})(jQuery)