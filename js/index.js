
window.onload=function(){

	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'vertical',
		loop: false,

	});

    // $("#box1-top").addClass('animated');
    $("#box1-top img").css("animation","Move1 0.8s ease-in-out forwards");
    // $('body').oneTime('1s',function(){
    // 	$("#box1-z1 p").css("display","block");
    // 	$("#box1-z1 p").addClass('animated tada')
    // });
    $(function(){
    	function aa(){
    		$("#box1-z1 p").css("display","block");
    		$("#box1-z1 p").addClass('animated tada')
    	}
    	setInterval(aa,1000); 
    });

    $(function(){
    	function bb(){
    		$("#box1-m2 img").css("display","block");
    		$("#box1-m2 img").addClass('animated slideInLeft')
    	}
    	setInterval(bb,1500); 
    });

    $(function(){
    	function cc(){
    		$("#box1-z2 p").css("display","block");
    		$("#box1-z2 p").addClass('animated slideInRight')
    	}
    	setInterval(cc,1500); 
    });

    $(function(){
    	function cc(){
    		$("#box1-z3 p").slideDown("2s",function(){
    		})
    		// $("#box1-z3 p").addClass('animated slideInRight')
    	}
    	setInterval(cc,2000); 
    });

    $(function(){
    	function dd(){
    		$("#box1-z4 p").show();
    		$("#box1-z4 p").addClass('animated rollIn')
    	}
    	setInterval(dd,2100); 
    });

}
