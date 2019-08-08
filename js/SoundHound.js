$(".logo").click(function () {
    $(".bath").show();
    $(".box").show();
    $(".wave ripple danger").show();
    var t = 30;
    var timer=null;
   timer= setInterval(function(){
                // index--;
                t -= 1;
            document.getElementsByClassName('time')[0].innerHTML= t;
        if (t<=0){
            alert("识别失败");
            clearTimeout(timer);
        }
            },1000);
});
