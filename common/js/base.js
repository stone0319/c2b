$(function(){
	//60秒后重新发送
	  btn =$("#getCodeBtn");
        function time(btn) {
            if (wait == 0) {
                btn.removeAttribute("disabled");
                btn.value = "获取验证码";
                wait = 60;
                $("#getCodeBtn").removeClass("hui");
            } else {
            	//只在第一次发送短信
            	if(wait == 60){
            		if(checkMobile($("#mobileInput").val())){
            			sendMobileMsg();
            		}else{
            			wait = 3;
            		}
            	}
            	
                btn.setAttribute("disabled", true);
                btn.value = wait + "秒后重新获取";
                wait--;
                setTimeout(function () {
                    time(btn);
                },
                1000)
              $("#getCodeBtn").addClass("hui");
            }
        }
        $("#getCodeBtn").click(function(){
        	time(this); 
        });
        $(".cinput").focus(function () {
        	$(".csubmit").addClass("active");
        	
        });
        $("#more").click(function  () {
        	alert("开发中。。。")
        });
        //tab
        
        $("#tabNav a").click(function(){
        	
        	$(this).siblings().removeClass("hover").addClass("hover");
        	var num=$(this).index();
        	$("#tabCont .newlist").siblings().hide().eq(num).show() ;
        });
        // 点赞
          // 点赞
     $.fn.extend({
		dianZan:function(){
			var obj = $(this);
			if (obj.hasClass("hover")) {
               
                           obj.removeClass("hover");

                           $(this).find("em").append('<div id="zhan">-1</div>');

                           $('#zhan').css({'position':'absolute','z-index':'1', 'color':'#c30','left':-10+'px','top':-10+'px'}).animate({top:-10-10,left:10-10 },'3000',function(){
                                   $(this).fadeIn('fast').remove();

                                   var Num = parseInt(obj.find('em').html());

                                   Num--;

                                   obj.find('em').html(Num);

                                });

                           return false;      
                 
               }  else {
						obj.addClass("hover");
					
						$(this).find("em").append('<div id="zhan">+1</div>');
					
						$('#zhan').css({
							'position': 'absolute',
							'z-index': '1',
							'color': '#c30',
							'left': -10 + 'px',
							'top': -10 + 'px'
						}).animate({
							top: -10 - 10,
							left: 10 - 10
						}, 'slow', function() {
							// $(this).fadeIn('fast').remove();
							var Num = parseInt(obj.find('em').html());
							Num++;
							obj.find('em').html(Num);
						});


						return false;
}
						}
	});
   
//     $(".like").on("click",function(){
//     	 		var obj=$(this);
//              obj.dianZan();
//     })
       //收藏点了之后加hover
      $(".like2").click(function(){
      	var obj = $(this);
      	if(obj.hasClass("hover")){
      		obj.removeClass("hover");
      	}
      	else{
      		obj.addClass("hover")
      	}
      	
      });

		var log = function(text){
			console.log(text);
		}

         $(".subChoose a").click(function ( ) {
            $(this).addClass("hover").siblings().removeClass("hover")
         });
         
         // 滑块拖动
//       scale=function (btn,bar,title){
//				this.btn=document.getElementById(btn);
//				this.bar=document.getElementById(bar);
//				this.title=document.getElementById(title);
//				this.step=this.bar.getElementsByTagName("DIV")[0];
//				this.init();
//				};
//				scale.prototype={
//					init:function (){
//						var f=this,g=document,b=window,m=Math;
//						f.btn.onmousedown=function (e){
//							var x=(e||b.event).clientX;
//							var l=this.offsetLeft;
//							var max=f.bar.offsetWidth-this.offsetWidth;
//							g.onmousemove=function (e){
//								var thisX=(e||b.event).clientX;
//								var to=m.min(max,m.max(-2,l+(thisX-x)));
//								f.btn.style.left=to+'px';
//								f.ondrag(m.round(m.max(0,to/max)*100),to);
//								b.getSelection ? b.getSelection().removeAllRanges() : g.selection.empty();
//							};
//							g.onmouseup=new Function('this.onmousemove=null');
//						};
//					},
//					ondrag:function (pos,x){
//						 
//						this.step.style.width=Math.max(0,x)+10+'px';
//						this.title.innerHTML=pos+'%';
//					}
//				} 
//    new scale('hdBtn','bar','bartitle');
//    new scale('hdBtn2','bar2','bartitle2');
      var dx, dy;
      //支持手机拖滚动条

      touch.on('.chooseBtn', 'touchstart', function(ev){
		ev.preventDefault();
		});

		var mainWidth=$(".huaDongBox").width();
		touch.on('.chooseBtn', 'drag', function(ev){
			dx = dx || 0;
			dy = dy || 0;
			
			var offx = dx + ev.x + "px";
			var offy = 0;
			if(parseInt(offx)>=mainWidth - 15){
				offx = mainWidth - 15;
			}
			if(parseInt(offx)<=0){
				offx = 0;
			}
			$(this).css({"left":offx}).next().css({"width":offx });
		});
		
		touch.on('.chooseBtn', 'dragend', function(ev){
			dx += ev.x;
			dy += ev.y; 
			if(parseInt(dx)>=mainWidth- 15){
				dx = mainWidth - 15;
			}
			if(parseInt(dx)<=0){
				dx = 0;
			}
			var dx2=dx/mainWidth*100;
				$("input.valueB").val(Math.round(dx2 / 10));
		});
		 
		$(".hdBar").click(function(e){

		 	 dx =e.offsetX,
			mainWidth=$(".huaDongBox").width();
			 
			if(dx>mainWidth){
				dx=mainWidth -30;
			}
		
			$(this).find(".chooseBtn").css({"left":dx});
			$(this).find(".barCs").css({"width":dx})
			var dx2=dx/mainWidth*100;
			$("input.valueB").val(Math.round(dx2 / 10));
			
		})
		
	 
//	 
		//单行文字切换
		$.fn.extend({
		"slideUp":function(value){
			
			var docthis = this,
			mh=$(".news_li li").height();
			//默认参数
			value=$.extend({
				 "li_h":mh,
				 "time":2000,
				 "movetime":1000
			},value)
			
			//向上滑动动画
			function autoani(){
				$("li:first").animate({"margin-top":-value.li_h},value.movetime,function(){
					$(this).appendTo(".news_li").css("margin-top",0);
				})
			}
			
			//自动间隔时间向上滑动
			var anifun = setInterval(autoani,value.time);
			
			//悬停时停止滑动，离开时继续执行
			$(docthis).children("li").hover(function(){
				clearInterval(anifun);			//清除自动滑动动画
			},function(){
				anifun = setInterval(autoani,value.time);	//继续执行动画
			})
		}	
	})
		
		$(".news_li").slideUp();
		
		
		//消息系统切换
		 
		  $(".htNavCont  a").click(function(){
        	
        	$(this).addClass("hover").siblings().removeClass("hover");
        	var num=$(this).index();
        	$(".tabContHt .newlist").siblings().hide().eq(num).show() ;
        });
        
        //切换tab
        
          $("#htNav li").click(function(){
        	
        	$(this).addClass("hover").siblings().removeClass("hover");
        	var num=$(this).index();
        	$("#htCont .tabList").eq(num).show().siblings().hide();
        });
        
        //首页活动弹框
        $(".activityBounced .close ").click(function(){
        	$(".activityBox").hide();
        })
         //banner图片自适应
        $(window).resize(function(){
   			imgresize () 
     	});
	     function imgresize () {
	     	 var iweight =$("body").width()  ;
	         var s =iweight *9 /20;
	         $(".bnnerBox img").css({"height":s})
	      }
	     imgresize () ;  
		// 用户中心我的方案tab
	     $("#faTabNav a").click(function(){
        	
        	$(this).addClass("hover").siblings().removeClass("hover");
        	var num=$(this).index();
        	$("#upCont .uplanList").siblings().hide().eq(num).show() ;
        });
	     // 用户中心我的方案tab
	     $(".msgTabNav a").click(function(){
        	
        	$(this).addClass("hover").siblings().removeClass("hover");
        	var num=$(this).index();
        	$(".msgTabCont .msgtablist").siblings().hide().eq(num).show() ;
        });
        //编辑邀请人信息
        $("#save").click(function(){
        	var editflag = $(".yqLxrName").is(":hidden");
        	var beforesj=$(".yqLxrName").html();
        	if(!editflag){
        		$(".yqLxrName").hide();
        		$(".yqrNameInput").show();
        		$(".bianjiBox").html("&#xe626;").css({"margin-top":6}).addClass("baocun").removeClass("bianjiBox");
        	}else{
        		var bval =$(".yqrNameInput").val();
        	 	if(bval==""){
        	 		$(".yqrNameInput").hide();
        	 		$(".yqLxrName").show().html(beforesj);
        	 		$(".baocun").html("&#xe677;").css({"margin-top":-3}).addClass("bianjiBox").removeClass("baocun");
        	 	}else{
        	 		$(".yqrNameInput").hide();
		        	$(".yqLxrName").show().html(bval);
	        		$(".baocun").html("&#xe677;").css({"margin-top":-3}).addClass("bianjiBox").removeClass("baocun");
        	 	}
        		
        	}
        });
        
	   $(".tjhytkBtn").click(function(){
					$(".tjhytkMod").hide();
				})
				$("#smShare").click(function(){
					$("#ewmMod").show();
				});
			    $("#moreFs").click(function  () {
			    	$("#moresMod").css({"display":"block"});
			    });
			    
			    
//			     
//			    var swiper = new Swiper('.swiper-container', {
//			        pagination: '.swiper-pagination',
//			        paginationClickable: true,
//			        nextButton: '.swiper-button-next',
//			        prevButton: '.swiper-button-prev',
//			        spaceBetween: 30
//			    });
//			    $("#logoutBtn").on("click",function  () {
//			    	
//			    	//复制你的代码..
//			    	
//			    });

var versondm ="<div class='c2bVersion'>	<a href='http://www.saicmaxus.com'><span class='c2bVersioncont'>上汽大通汽车有限公司 © 版权所有</span>	</a></div>"
	$(".c2bMain").append(versondm ); 
	 
        
})
window.onload=function  () {
//	var ds=$(".djicon em").html().length;
//	if(ds==1){
//		$(".djicon").addClass("dsnum");
//	};
 
	 
}