$(function(){
//抽奖
$.fn.extend({
		"slideUp":function(value){
			
			var docthis = this,
			mh=$(".news_li li").height();
			//默认参数
			value=$.extend({
				 "li_h":34,
				 "time":60,
				 "movetime":20
			},value)
			
			//向上滑动动画
			function autoani(){
				$("li:first").animate({"margin-top":-value.li_h},value.movetime,function(){
					$(this).appendTo(".news_li").css("margin-top",0);
				})
			}
			
			//自动间隔时间向上滑动
			var anifun = setInterval(autoani,value.time);
			$("#stop").click(function(){
				$(".hover").show();
				clearInterval(anifun);	 
			});
			
			//悬停时停止滑动，离开时继续执行
			
		}	
	})
		
		
		$("#stat").click(function(){
			$(".news_li").slideUp(); 
			$(".hover").hide();
		})
		$(".giveUp").click(function(){
			$(".hover").hide();
		})
		 
		var log = function(text){
			console.log(text);
		}

  

     
		 
	  
		
	 
 
	  
})