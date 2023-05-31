$(function(){

    //메뉴
$(".main>li").hover(function(){
    $(this).find(".sub").stop().slideDown();
},function(){
    $(".sub").stop().slideUp();
})

//이미지슬라이드

//첫번째 방법
// var n=0;
// setInterval(function(){
//     if(n==2){
//         n=0;
//     }else{
//         n++;
//     }
//     pos= n* (-100) + "%"
//     $(".move").animate({left:pos},500)
// },3000)


//2번째방법
setInterval(function(){
    $(".move").animate({left:"-100%"},500,function(){
        $(".move").append($(".move li").eq(0));
        $(".move").css({left:"0"})
    })
},2500)

//모달팝업
$(".pop").click(function(){
    $(".popup , .bg_popup").show();
})
$(".close").click(function(){
    $(".popup , .bg_popup").hide();
})
})//jq