


//燈箱

$(document).ready(function(){
				//Examples of how to assign the Colorbox event to elements
				var a = 0;
				
				$(window).scroll(function() {

						if ($(this).scrollTop() > 700) {
							// apply effects and animations
							$(".call").addClass("visible");		
							$(".call").mouseenter(function(){$('.number').addClass("visible");});
							$(".call").mouseleave(function(){$('.number').removeClass("visible");});
						}
						else {
							$(".call").removeClass("visible");
							$('.number').removeClass("visible");
						}
						
					});


					$(function(){
					　$(window).load(function(){
					　　$(window).bind('scroll resize', function(){
					　　var $this = $(this);
					　　var $this_Top=$this.scrollTop();

					　　//當高度小於100時，關閉區塊 
					   
					　　if($this_Top < 100){
					　　　
						  $('.navside').stop().animate({top:"-620px"});　
						  a = 0;
					　　　}
					　　　　if($this_Top > 100){
					　　　　$('.nav').stop().animate({top:"0px"});
					　　　 }
					　　}).scroll();
					　});
					});

				$(".index").click(function()
				{
				a++;
				console.log(a);
				if (a%2 != 0)
				{
					$('.navside').stop().animate({top:"145px"});
				}
				else
				{
					$('.navside').stop().animate({top:"-620px"});　
				}	
				});
				
				$(".barside > a").click(function()
				{
				  a++;
				  $('.navside').stop().animate({top:"-620px"});　
				});
				
				$(".play").addClass("visible2 ");
				$("#play").addClass("colorAA");
				
				$("#eat").click(function()
				{
					$(".eat").addClass("visible2");
					$("#eat").addClass("colorBB");
					$(".play").removeClass("visible2");
					$("#play").removeClass("colorAA");
					
				});
				
				$("#play").click(function()
				{
					$(".play").addClass("visible2 ");
					$("#play").addClass("colorAA");
					$(".eat").removeClass("visible2");
					$("#eat").removeClass("colorBB");
					
				});
				var w = $(window).width();
				if(w>1000){
				$(".group1").colorbox({rel:'group1',transition:"elastic", width:"75%", height:"100%", slideshow:"true",slideshowSpeed:"2000"});
				$(".group2").colorbox({rel:'group2', transition:"elastic", width:"75%", height:"100%", slideshow:"true",slideshowSpeed:"2000"});
				$(".group3").colorbox({rel:'group3', transition:"elastic", width:"75%", height:"100%", slideshow:"true",slideshowSpeed:"2000"});
				$(".group4").colorbox({rel:'group4', transition:"elastic", width:"75%", height:"100%", slideshow:"true",slideshowSpeed:"2000"});
				$(".group5").colorbox({rel:'group5',transition:"elastic", width:"75%", height:"100%", slideshow:"true",slideshowSpeed:"2000"});
				$(".group6").colorbox({rel:'group6', transition:"elastic", width:"75%", height:"100%", slideshow:"true",slideshowSpeed:"2000"});
				$(".group7").colorbox({rel:'group7', transition:"elastic", width:"75%", height:"100%", slideshow:"true",slideshowSpeed:"2000"});
				$(".group8").colorbox({rel:'group8', transition:"elastic", width:"75%", height:"100%", slideshow:"true",slideshowSpeed:"2000"});
				$(".group9").colorbox({rel:'group9',transition:"elastic", width:"75%", height:"100%", slideshow:"true",slideshowSpeed:"2000"});
				$(".group10").colorbox({rel:'group10', transition:"elastic", width:"75%", height:"100%", slideshow:"true",slideshowSpeed:"2000"});
				$(".ajax").colorbox();
				$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
				$(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
				$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
				$(".inline").colorbox({inline:true, width:"50%"});
				$(".callbacks").colorbox({
					onOpen:function(){ alert('onOpen: colorbox is about to open'); },
					onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
					onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
					onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
					onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
				});

				$('.non-retina').colorbox({rel:'group5', transition:'none'})
				$('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
				}
				else if (w<1000)
				{
					$(".group1").colorbox({rel:'group1',transition:"elastic", width:"100%", height:"50%", slideshow:"true",slideshowSpeed:"2000"});
				$(".group2").colorbox({rel:'group2', transition:"elastic", width:"100%", height:"50%", slideshow:"true",slideshowSpeed:"2000"});
				$(".group3").colorbox({rel:'group3', transition:"elastic", width:"100%", height:"50%", slideshow:"true",slideshowSpeed:"2000"});
				$(".group4").colorbox({rel:'group4', transition:"elastic", width:"100%", height:"50%", slideshow:"true",slideshowSpeed:"2000"});
				$(".group5").colorbox({rel:'group5',transition:"elastic", width:"100%", height:"50%", slideshow:"true",slideshowSpeed:"2000"});
				$(".group6").colorbox({rel:'group6', transition:"elastic", width:"100%", height:"50%", slideshow:"true",slideshowSpeed:"2000"});
				$(".group7").colorbox({rel:'group7', transition:"elastic", width:"100%", height:"50%", slideshow:"true",slideshowSpeed:"2000"});
				$(".group8").colorbox({rel:'group8', transition:"elastic", width:"100%", height:"50%", slideshow:"true",slideshowSpeed:"2000"});
				$(".group9").colorbox({rel:'group9',transition:"elastic", width:"100%", height:"50%", slideshow:"true",slideshowSpeed:"2000"});
				$(".group10").colorbox({rel:'group10', transition:"elastic", width:"100%", height:"50%", slideshow:"true",slideshowSpeed:"2000"});
				}
				//Example of preserving a JavaScript event for inline calls.
						
				  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

				  ga('create', 'UA-105093765-1', 'auto');
				  ga('send', 'pageview');
			});