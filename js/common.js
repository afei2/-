//����
// $(document).ready(function () {
//     var box0 = $(".main_2"),v0 = 5; //������ӹ����Ķ����������
// 	var box1 = $(".two"),v1 = 1;
// 	Rin(box0,v0);
// 	Rin(box1,v1); 

// 		 function Rin($Box,v){//$Box�ƶ��Ķ���v�����ƶ�������
//            var $Box_ul = $Box.find("ul"),
//                $Box_li = $Box_ul.find("li"),
//                $Box_li_span = $Box_li.find("span"),
// 	           left = 0,
// 	           s=0,
// 	           timer;//��ʱ��

// 			      $Box_li.each(function(index){
// 			       $($Box_li_span[index]).width($(this).width());//hover
//                    s += $(this).outerWidth(true); //��Ҫ�����ĳ���
// 			     })
			      
// 		window.requestAnimationFrame = window.requestAnimationFrame||function(Tmove){return setTimeout(Tmove,1000/60)};
// 	    window.cancelAnimationFrame = window.cancelAnimationFrame||clearTimeout;
			      
//                   if( s>=$Box.width()){//����������ȳ���Box���ȼ���ʼ������û�еĻ��Ͳ�ִ�й���
//                            $Box_li.clone(true).appendTo($Box_ul);                       
// 					       Tmove();
// 						      function Tmove(){
// 						           //�˶����ƶ�left  ��0��-s;������ϰ���������
// 						           left -= v;
// 						           if(left <= -s){left = 0;$Box_ul.css("left",left)}else{ $Box_ul.css("left",left) }
// 					                   timer = requestAnimationFrame(Tmove);   
// 						      }
// 					    $Box_ul.hover(function(){cancelAnimationFrame(timer)},function(){Tmove()})    
// 		          }  
 
// 	} 	 	
// }) 	
//���صײ�
$("#to-top").click(function () {
        $('html , body').animate({scrollTop: 0}, 'slow');
  });
//
var mySwiper = new Swiper('.swiper_1', {
	pagination: {
	    el: '.swiper_1 .swiper-pagination',
	    clickable :true,
	},
	navigation: {
	  nextEl: '.swiper_1 .swiper-button-next',
	  prevEl: '.swiper_1 .swiper-button-prev',
	},
});

$(".main_w").slide({mainCell:"ul",autoPlay:true,effect:"leftMarquee",vis:5,interTime:1,});