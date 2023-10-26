$('.tit .btn').click(
    function(){
        // $('.nav').toggle();
        // $('.nav').fadeToggle();
        $('.nav').slideToggle();
        $(this).toggleClass("on")
    }
);


$('.ban').slick({
    infinite: true,
    slidesToShow: 3,   /* 한화면에 보이는 갯수 */
    slidesToScroll: 1,   /* 버튼을 클릭하면 넘어가는 갯수 */
    dots: true,
  });


  //탭메뉴
//.next()는 바로밑 요소(바로아래동생)
//.parent()는 부모요소
//.siblings()는 수업