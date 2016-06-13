/**
 *
 * @authors Cycle (marsak@Live.cn)
 * @date    2016-05-31 11：30
 * @version $1.0$
 */
 +(function($){
   Square = {
     global:function(){//公用方法
       var square = {};
       square.getRandomX = function(n){//生成单独的随机数
         return Math.floor(Math.random()*n+1);
       };
       square.getRandomArray = function(num,maxNum){//num：生成几个，maxNum：最大的数字是多少
         if(!maxNum || !num){
             console.log("please input two Number");
             return false;
         }
         var flag = 0,
             i=0,
             arr=[];
         if(maxNum - num < 0){
             flag = maxNum;
             maxNum = num;
             num = flag;
         }
         for(;i<maxNum;i++){
             arr[i] = i-0+1;
         }
         arr.sort(function(p1,p2){
             return 0.5-Math.random();
         });
         arr.length = num;
         return arr;
       };

       return square;
     },
     create:function(data){//参数who,length,colorful,tag,nromal,href,bigImg
       $(window).resize(function(){//自适应居中
        $("section").css("margin-left",($(window).width()-$("section").width())/2);
       });
       for(var i=0;i<data.length;i++){
         data.who.append('<li data-img="'+data.bigImg[i]+'">'+
           '<div class="img2"><a href="'+data.href[i]+'"><img src="'+data.colorful[i]+'" width="100%" alt=""></a></div>'+
           '<div class="img3"><a href="'+data.href[i]+'"><img src="'+data.tag[i]+'" width="100%" alt=""></a></div>'+
           '<a href="'+data.href[i]+'"><img src="'+data.normal[i]+'" width="100%" alt=""></a>'+
         '</li>');
       }
     },
     render:function(data){//参数who,length,time
       var SquareGlobal = Square.global();
       var render = SquareGlobal.getRandomArray(data.length,data.who.find("li").length);//随机数需要被渲染改变的块
       var renderArray = [];
       for(var i=0;i<data.length;i++){
         var renderHow = SquareGlobal.getRandomX(2);//随机书数变成什么样子的块
         renderArray.push(renderHow+1);
       }
       data.who.find("li>div").fadeOut(data.time);
       for(var i=0;i<render.length;i++){
         data.who.find("li:eq("+render[i]+")>.img"+renderArray[i]).fadeIn(data.time);
       }
     },
   };
   return Square;
 })($);
