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


$('.gallery_img').slick({
    arrows: false,
    // autoplay: true,
});

//탭메뉴
//.next()는 바로밑 요소(바로아래동생)
//.parent()는 부모요소
//.siblings()는 나를 제외한 형제들
//.find()는 하위요소(내 안에 있는 요소들)

let tab_list = $('.tab_menu');

tab_list.find('ul ul').hide();
tab_list.find('li.active ul').show();

$('.tab_menu>ul>li>a').click(function(ev){
    ev.preventDefault();
    let $this = $(this); //변수를 만들때 사용 할 수 있는 특수문자 $, _ (두가지)

    //console.log($this);
    $this.next('ul').show();
    $this.parent('li').siblings('li').find('ul').hide();

    $this.parent('li').addClass('active');
    $this.parent('li').siblings('li').removeClass('active');
});



