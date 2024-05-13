
// nice select
$("select").niceSelect();

// Homepage main slider
$(".mainslider").slick({
  arrows: false,
  autoplay: false,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
        arrows: false,
        infinite: false,
      },
    },
  ],
});

$(".innerslider, .meetslider").slick({
  arrows: false,
  autoplay: false,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        infinite: false,
        dots: false,
      },
    },
  ],
});


$("#serviceSlider").slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});


$(".serviceslider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: false,
  autoplaySpeed: 1000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".chooseCourseSlider").slick({
  dots: true,
  rows: 2,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  autoplaySpeed: 1000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".similarcourseourse").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".testimonialslider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: false,
  autoplaySpeed: 1000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".mainTopic").slick({
  dots: true,
  rows: 4,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  autoplaySpeed: 1000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});


// expansion

$(".expansionlist > a").on("click", function (e) {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).siblings(".expansioncontent").slideUp(200);
    $(".expansionlist > a .icon-box")
      .removeClass("fa-chevron-up")
      .addClass("fa-chevron-down");
  } else {
    $(".expansionlist > a .icon-box")
      .removeClass("fa-chevron-up")
      .addClass("fa-chevron-down");
    $(this).find(".icon-box").removeClass("fa-chevron-down").addClass("fa-chevron-up");
    $(".expansionlist > a").removeClass("active");
    $(this).addClass("active");
    $(".expansioncontent").slideUp(200);
    $(this).siblings(".expansioncontent").slideDown(200);
  }
  e.preventDefault();
});

// Video play

$(function () {
  $('.popup-youtube').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
});


$("#videoplayButton").click(function () {
  var video = $("#myVideo").get(0);
  if (video.paused) {
    video.play();
    $(this).hide();
  } else {
    video.pause();
    $(this).show();
  }
});

