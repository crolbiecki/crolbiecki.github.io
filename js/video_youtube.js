	
	//set your video options
	var image_replacement = true;
	
	//start the video functios. 
	if (image_replacement == true){
	
		if( !device.tablet() && !device.mobile() ) {
			jQuery(function(){
				if (self.location.href == top.location.href){
				    var logo=$("<a href='http://pupunzi.com/#mb.components/components.html' style='position:absolute;top:0;z-index:1000'><img id='logo' border='0' src='http://pupunzi.com/images/logo.png' alt='mb.ideas.repository'></a>");
				   	$("#wrapper").prepend(logo);
				    $("#logo").fadeIn();
				}
				jQuery("button").not(".command").click(function(){
					jQuery("button").not(".command").removeClass("sel");
					jQuery(this).addClass("sel");
				});
				jQuery("#bgndVideo").on("YTPStart", function(){ jQuery("#eventListener").html("YTPStart")});
				jQuery("#bgndVideo").on("YTPEnd", function(){ jQuery("#eventListener").html("YTPEnd")});
				jQuery("#bgndVideo").on("YTPPause", function(){ jQuery("#eventListener").html("YTPPause")});
				jQuery("#bgndVideo").on("YTPBuffering", function(){ jQuery("#eventListener").html("YTPBuffering")});
				jQuery("#bgndVideo").mb_YTPlayer();
			});
		
		} else {
			$('#bgimg').addClass('poster-image');
			$('#bgndVideo').fadeOut();
			$('#video-content').fadeOut();
		}
	
	} else {
	
		jQuery(function(){
			if (self.location.href == top.location.href){
			    var logo=$("<a href='http://pupunzi.com/#mb.components/components.html' style='position:absolute;top:0;z-index:1000'><img id='logo' border='0' src='http://pupunzi.com/images/logo.png' alt='mb.ideas.repository'></a>");
			   	$("#wrapper").prepend(logo);
			    $("#logo").fadeIn();
			}
			jQuery("button").not(".command").click(function(){
				jQuery("button").not(".command").removeClass("sel");
				jQuery(this).addClass("sel");
			});
			jQuery("#bgndVideo").on("YTPStart", function(){ jQuery("#eventListener").html("YTPStart")});
			jQuery("#bgndVideo").on("YTPEnd", function(){ jQuery("#eventListener").html("YTPEnd")});
			jQuery("#bgndVideo").on("YTPPause", function(){ jQuery("#eventListener").html("YTPPause")});
			jQuery("#bgndVideo").on("YTPBuffering", function(){ jQuery("#eventListener").html("YTPBuffering")});
			jQuery("#bgndVideo").mb_YTPlayer();
		});
	
	}
	
