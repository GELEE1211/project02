$(document).ready(function(){//시작

  //햄버거 버튼
  $(".ham").click(function(){
    $(".mgnb-wrap").animate({
      right:"0"
    },1000);
  });

  //메뉴닫기버튼
  $(".menu-close").click(function(){
    $(".mgnb-wrap").animate({
      right:"-100%"
    },1000);
  });

  //모바일 검색창
  $(".search-bar").hide();
  $(".m-search").click(function(){
    $(".search-bar").fadeIn();
  });

  $(".search-close").click(function(){
    $(".search-bar").fadeOut();
  });
 //모바일 언어설정
  $(".lang-opt").hide();
  $(".lang").click(function(){
    $(".lang-opt").stop().slideToggle();
  });
  $(".lang-opt li:first-child a").click(function(){
    $(".lang-opt").stop().slideUp();
  });


  //모바일 메뉴 슬라이드 업다운 효과
  $(".depth2").hide();

  $(".depth1 > a").click(function(){
   
    if($(this).next(".depth2").css("display")=="block"){
      $(this).next(".depth2").slideUp();
      $(".moreless").attr("src", "img/plus.png");
    }else{
      $(".depth2").slideUp();
      $(this).next(".depth2").slideDown();
      $(".moreless").attr("src", "img/plus.png");
      $(this).find(".moreless").attr("src", "img/minus.png");
    }
    
  });

  //pc 언어설정
  $(".pclang-opt").hide();
  $(".pc-lang").click(function(){
    $(".pclang-opt").stop().slideDown();
  });
  $(".pclang-opt li:first-child a").click(function(){
    $(".pclang-opt").stop().slideUp();
  });

  //tap 메뉴 슬라이드업다운
  $(".tap-depth2").hide();
  $(".tap-depth1 li:nth-child(1) a").click(function(){
    $(".tap-depth2set .t1 .tap-depth2").stop().slideToggle();
    $(".depth2-wrap:not(.t1) .tap-depth2").stop().slideUp();
  });
  $(".tap-depth1 li:nth-child(2) a").click(function(){
    $(".tap-depth2set .t2 .tap-depth2").stop().slideToggle();
    $(".depth2-wrap:not(.t2) .tap-depth2").stop().slideUp();
  });
  $(".tap-depth1 li:nth-child(3) a").click(function(){
    $(".tap-depth2set .t3 .tap-depth2").stop().slideToggle();
    $(".depth2-wrap:not(.t3) .tap-depth2").stop().slideUp();
  });
  $(".tap-depth1 li:nth-child(4) a").click(function(){
    $(".tap-depth2set .t4 .tap-depth2").stop().slideToggle();
    $(".depth2-wrap:not(.t4) .tap-depth2").stop().slideUp();
  });
  $(".tap-depth1 li:nth-child(5) a").click(function(){
    $(".tap-depth2set .t5 .tap-depth2").stop().slideToggle();
    $(".depth2-wrap:not(.t5) .tap-depth2").stop().slideUp();
  });
  $(".tap-depth1 li:nth-child(6) a").click(function(){
    $(".tap-depth2set .t6 .tap-depth2").stop().slideToggle();
    $(".depth2-wrap:not(.t6) .tap-depth2").stop().slideUp();
  });
  $(".tap-depth1 li:nth-child(7) a").click(function(){
    $(".tap-depth2set .t7 .tap-depth2").stop().slideToggle();
    $(".depth2-wrap:not(.t7) .tap-depth2").stop().slideUp();
  });


  //pc 메뉴 슬라이드업다운
  $(".pc-depth2").hide();
  $(".pc-depth1 li:nth-child(1) a").click(function(){
    $(".depth2-set .w1 .pc-depth2").stop().slideToggle();
    $(".depth2-wrap:not(.w1) .pc-depth2").stop().slideUp();
  });
  $(".pc-depth1 li:nth-child(2) a").click(function(){
    $(".depth2-set .w2 .pc-depth2").stop().slideToggle();
    $(".depth2-wrap:not(.w2) .pc-depth2").stop().slideUp();
  });
  $(".pc-depth1 li:nth-child(3) a").click(function(){
    $(".depth2-set .w3 .pc-depth2").stop().slideToggle();
    $(".depth2-wrap:not(.w3) .pc-depth2").stop().slideUp();
  });
  $(".pc-depth1 li:nth-child(4) a").click(function(){
    $(".depth2-set .w4 .pc-depth2").stop().slideToggle();
    $(".depth2-wrap:not(.w4) .pc-depth2").stop().slideUp();
  });
  $(".pc-depth1 li:nth-child(5) a").click(function(){
    $(".depth2-set .w5 .pc-depth2").stop().slideToggle();
    $(".depth2-wrap:not(.w5) .pc-depth2").stop().slideUp();
  });
  $(".pc-depth1 li:nth-child(6) a").click(function(){
    $(".depth2-set .w6 .pc-depth2").stop().slideToggle();
    $(".depth2-wrap:not(.w6) .pc-depth2").stop().slideUp();
  });
  $(".pc-depth1 li:nth-child(7) a").click(function(){
    $(".depth2-set .w7 .pc-depth2").stop().slideToggle();
    $(".depth2-wrap:not(.w7) .pc-depth2").stop().slideUp();
  });


  //모바일 스와이퍼1
  var swiper1 = new Swiper(".mobaSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });

  //모바일 스와이퍼2
  var swiper2 = new Swiper(".collections", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints :{
      800 : {
        centeredSlides: false,
        slidesPerView : 4,
        spaceBetween : 30,
      },
    }
  });

  //교육행사 아이콘 이미지 변경
  $("#pro-event .icons ul li.sign a").hover(function(){
    $(this).find("img").attr("src", "img/sign-w.png");
  }, function(){
    $(this).find("img").attr("src", "img/sign.png");
  });

  $("#pro-event .icons ul li.calendar a").hover(function(){
    $(this).find("img").attr("src", "img/calendar-outline-w.png");
  }, function(){
    $(this).find("img").attr("src", "img/calendar-outline.png");
  });

  $("#pro-event .icons ul li.notice a").hover(function(){
    $(this).find("img").attr("src", "img/notice-w.png");
  }, function(){
    $(this).find("img").attr("src", "img/notice.png");
  });

  $("#pro-event .icons ul li.reader a").hover(function(){
    $(this).find("img").attr("src", "img/reader-outline-w.png");
  }, function(){
    $(this).find("img").attr("src", "img/reader-outline.png");
  });

  //화살표 색깔 변경

  $(".more").hover(function(){
    $(this).find("img").attr("src", "img/arrow-right_hover.png");
  }, function(){
    $(this).find("img").attr("src", "img/arrow-right.png");
  },);


  //햄버거 메뉴클릭시 top버튼 숨기기
  $(".ham").click(function(){
    $(".goto-top").hide();
  });
  $(".menu-close").click(function(){
    $(".goto-top").show();
  });

  //aos
  AOS.init();

  //sub-section 5-1 달력 띄우기
  $(function () {
    $("#datepicker-from").datepicker({
      showOn: "both" // button > 버튼을 클릭할 때 datepicker 표시. focus > input 필드가 포커스를 받을 때 표시. both > 두 이벤트 중 하나가 발생할 때 표시.
      , buttonImage: "img/calendar.png" // datepicker를 사용할 버튼 이미지의 URL
      , buttonImageOnly: true // 위에서 설정한 buttonImage를 button 요소 안에 렌더링 하지 않고 단독으로 렌더링
      , buttonText: "선택" // 버튼에 표시되는 글자
      , changeYear: true // dropdown으로 year 선택 가능
      , changeMonth: true // dropdown으로 month 선택 가능
      , dateFormat: 'yy-mm-dd' // 표시되는 날짜의 형식
      , dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] // 일요일부터 시작하는 요일 이름 목록
      , dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'] // Datepicker 내에서 열 머리글로 사용할 수 있도록 일요일부터 시작하는 최소화된 요일 이름 목록 
      , maxDate: "+5y" // 선택할 수 있는 최대 날짜 (+1D:하루후, -1M:한달후, -1Y:일년후)    
      , minDate: "-5Y" // 선택할 수 있는 최소 날짜 (-1D:하루전, -1M:한달전, -1Y:일년전)
      , monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] // 1월부터 시작하는 월 이름 목록
      , monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] // Datepicker header의 month에 사용되는 월 이름 목록
      , showMonthAfterYear: true // Datepicker header에서 표시 순서가 연도-월이 되도록
      , showOtherMonths: true // 현재 월의 시작 또는 끝에 다른 월의 날짜를 표시하겠다. (선택은 불가. 이러한 날짜를 선택할 수 있게 하려면 selectOtherMonths 옵션을 사용할 것)
      , yearSuffix: "년" // Datepicker header의 연도 뒤에 표시할 추가 텍스트
    });
    // Datepicker의 default 날짜를 설정
    $("#datepicker-to").datepicker({
      showOn: "both" // button > 버튼을 클릭할 때 datepicker 표시. focus > input 필드가 포커스를 받을 때 표시. both > 두 이벤트 중 하나가 발생할 때 표시.
      , buttonImage: "img/calendar.png" // datepicker를 사용할 버튼 이미지의 URL
      , buttonImageOnly: true // 위에서 설정한 buttonImage를 button 요소 안에 렌더링 하지 않고 단독으로 렌더링
      , buttonText: "선택" // 버튼에 표시되는 글자
      , changeYear: true // dropdown으로 year 선택 가능
      , changeMonth: true // dropdown으로 month 선택 가능
      , dateFormat: 'yy-mm-dd' // 표시되는 날짜의 형식
      , dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] // 일요일부터 시작하는 요일 이름 목록
      , dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'] // Datepicker 내에서 열 머리글로 사용할 수 있도록 일요일부터 시작하는 최소화된 요일 이름 목록 
      , maxDate: "+5y" // 선택할 수 있는 최대 날짜 (+1D:하루후, -1M:한달후, -1Y:일년후)    
      , minDate: "-5Y" // 선택할 수 있는 최소 날짜 (-1D:하루전, -1M:한달전, -1Y:일년전)
      , monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] // 1월부터 시작하는 월 이름 목록
      , monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] // Datepicker header의 month에 사용되는 월 이름 목록
      , showMonthAfterYear: true // Datepicker header에서 표시 순서가 연도-월이 되도록
      , showOtherMonths: true // 현재 월의 시작 또는 끝에 다른 월의 날짜를 표시하겠다. (선택은 불가. 이러한 날짜를 선택할 수 있게 하려면 selectOtherMonths 옵션을 사용할 것)
      , yearSuffix: "년" // Datepicker header의 연도 뒤에 표시할 추가 텍스트
    });

  });

});//끝