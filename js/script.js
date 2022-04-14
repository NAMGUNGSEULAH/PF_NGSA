

$(function() {


    // gnb 에 마우스 호버 시
    $('.gnb').on('mouseover', function() {
        $('.sub-nav').slideDown()
        submenu = true
    })

    // 서브메뉴에서 마우스 벗어날 때
    $('header').on('mouseleave', function() {
        $('.sub-nav').slideUp()
    })

     // 슬릭 슬라이드 시작!
     $('.col-slide').slick({
        dots: true,
        arrows: false,

        autoplay: true,                 // 자동재생 여부
        autoplaySpeed: 4000,            // 자동재생 슬라이드 시간
        infinite: true,                 // 무한 반복 
        speed:400,                      // 슬라이드가 전환되는 시간


        // centerMode: true,            // 센터 모드
        // centerPadding: '60px',       // 센터 모드 시, 내부여백
        slidesToShow: 1,                // 보여질 슬라이드 개수
        slidesToScroll: 1,              // 스크롤될 슬라이드 개수


        pauseOnDotsHover: true,         // 페이지네이션 호버 시 자동재생 멈춤
        pauseOnFocus: true,             // 포커스 시, 자동재생 멈춤
        pauseOnHover: true,             // 호버 시, 자동재생 멈춤

     })


})