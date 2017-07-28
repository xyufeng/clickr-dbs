/*
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
 
ga('create', 'UA-97102740-1', 'auto');
ga('send', 'pageview');
*/
(function($) { 	
	$(document).ready(function() {		
		/* Setting Menu */		
		$.ajax({
			//url: "https://dbs1bank.sharepoint.com/sites/brandportal/SitePages/brand-portal/wp-content/themes/brand-portal/js/menu.txt",
			//url: "http://dbs.s1.clickrlabs.com/brand-portal/wp-content/themes/brand-portal/js/menu.txt",
			dataType: "json",
			success: function( globalContent ) {
				$.each(globalContent.mainMenu, function( key, value ) {	
					if(value.dropdown == "true"){
							$(".navbar-nav").append('<li class="dropdown '+ value.full +'" id="'+value.id+'"><a href="#" data-toggle="dropdown" class="dropdown-toggle" aria-expanded="true">'+value.label+'<b class="caret"></b></a><ul class="dropdown-menu"><li><div class="yamm-content"><div class="row"></div></div></li></ul></li>');
					} else {
						$(".navbar-nav").append('<li id="'+value.id+'"><a href="'+value.link+'">'+value.label+'</a></li>');
					}
				});	

				$.each(globalContent.sectionDropDown, function( key, value ) {
					if(value.col){
						if(value.hideSectionTitle == "true"){
							$("#" + value.parentID + " .dropdown-menu .row").append('<ul class="'+ value.col + ' list-unstyled" id="'+value.sectionID+'"></ul>');
						} else {
							$("#" + value.parentID + " .dropdown-menu .row").append('<ul class="'+ value.col + ' list-unstyled" id="'+value.sectionID+'"><li><p class="dropdown-menu-title">'+value.label+'</p></li></ul>');
						}
					} else {
						if(value.hideSectionTitle == "true"){
							$("#" + value.parentID + " .dropdown-menu .row").append('<ul class="col-sm-3 list-unstyled" id="'+value.sectionID+'"></ul>');
						} else {
							$("#" + value.parentID + " .dropdown-menu .row").append('<ul class="col-sm-3 list-unstyled" id="'+value.sectionID+'"><li><p class="dropdown-menu-title">'+value.label+'</p></li></ul>');	
						}
					}
				});	
				/*
				$.each(globalContent.sectionDropDownHeader, function( key, value ) {
					$("#" + value.sectionID ).append('<li><p class="dropdown-menu-subtitle">'+value.label+'</p><ul class="dropdown-menu-listing" id="'+value.headerID+'"></ul></li>	');
				});	
				*/
				$.each(globalContent.dropDownMenuAdd, function( key, value ) {
					if(value.menuClass){
						$("#" + value.headerID ).append('<li class="'+value.menuClass+' "><a href="'+value.link+'" target="'+value.target+'" >'+value.label+'</a></li>');
					} else {
						$("#" + value.headerID ).append('<li><a href="'+value.link+'" target="'+value.target+'">'+value.label+'</a></li>');
					}
				});					
				
				$(".dropdown-menu-subtitle").each(function(count, ele){
					$(ele).click(function(){
						$(ele).next().toggle();
					});
				});
				
				$(document).on('click', '.yamm .dropdown-menu', function(e) {
					e.stopPropagation();
				});				
			}			
		});	
		/*
		$(".btn-download").click(function(){
			var filepath = $('select.for-download').val();
			if(filepath != "none"){
				window.open(filepath, '_blank');
			}				
		});
		*/
		$(".btn-download").each(function (count, ele){
			$(ele).click(function(){
				console.log("click");
				var filepath = $('select.for-download:eq('+count+') ').val();
				console.log(filepath);
				if(filepath != "none"){
					window.open(filepath, '_blank');
				}				
			});			
		});
		
		$(".sub-menu li:first-child a").addClass("active");
		$('.sub-menu a[href*="#"]:not([href="#"])').click(function() {
			$(".sub-menu a").removeClass("active");
			$(this).addClass("active");
			
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 150
					}, 1000);
					return false;
				}
			}
		});	
		var total = $('.sub-menu li a').length;	
		$(".sub-menu li a").each(function(count,ele){
			var section = $(ele).attr("href");
			var finalize_section = section.substring(1);
			
			if( count === total - 1 ){
				$('#' + finalize_section).waypoint({
					handler: function(direction) {
						$(".sub-menu a").removeClass("active");
						$(ele).addClass("active");
						/*
						$(".backtotop").css("bottom","90px");

						if( $(window).width() > 768 ){
							if(direction == "down"){
								$(".backtotop").css("bottom","90px");
							} else {
								$(".backtotop").css("bottom","10px");
							}
						}*/
					},
					offset: 'bottom-in-view'
				})
				
			} else{
				$('#' + finalize_section).waypoint({
					handler: function(direction) {
						$(".sub-menu a").removeClass("active");
						$(ele).addClass("active");
						/*
						$(".backtotop").css("bottom","10px");
						if( $(window).width() > 768 ){
							if(direction == "down"){
								$(".backtotop").css("bottom","10px");
							} else {
								$(".backtotop").css("bottom","10px");
							}
						} */
					}
				})				
			}
		});	
		
		$(".backtotop").css("bottom","10px");
		var waypoint = new Waypoint({
			element: document.getElementById('backtotop'),
			handler: function(direction) {
				console.log('Bottom of element hit bottom of viewport')
				if( $(window).width() > 768 ){
					if(direction == "down"){
						$(".backtotop").css("bottom","90px");
					} else {
						$(".backtotop").css("bottom","10px");
					}
				}				
			},
			offset: 'bottom-in-view'
		})

			
		$("#sticky-submenu").sticky({topSpacing:0});					
		$(".dbs-logo").attr("href","https://dbs1bank.sharepoint.com/sites/brandportal/SitePages/brand-portal/index.aspx");
		$(".backtotop").click(function () {
			$("html, body").animate({scrollTop: 0}, "slow");
			return false;
		});			
	});
})(jQuery)
