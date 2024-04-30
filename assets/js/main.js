
// $(".drawer").drawer();

$(".drawer-toggle").click(function () {
  var targetDrawer = $("#" + $(this).data("target"));

  // Close all open drawers except the one being opened
  $(".drawer").not(targetDrawer).removeClass("drawer-open");

  // Toggle the open class for the clicked drawer
  targetDrawer.toggleClass("drawer-open");
});

// nice select
$("select").niceSelect();

// navbar
$(".navigation-portrait").hide();
setTimeout(function () {
  $(".navigation-portrait").show();
}, 100); // Change the delay time as needed


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

$("#serviceSlider").slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
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


// popup

const $openModalButton = $("#openModal");
const $closeModalButton = $("#closeModal");
const $modal = $("#modal");

$openModalButton.click(function () {
  $modal.removeClass("hidden");
});

$closeModalButton.click(function () {
  $modal.addClass("hidden");
});

$modal.find(".modal-overlay").click(function () {
  $modal.addClass("hidden");
});

// expansion

$(".expansionlist > a").on("click", function (e) {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).siblings(".expansioncontent").slideUp(200);
    $(".expansionlist > a .iconbox")
      .removeClass("icon-chevron-up")
      .addClass("icon-chevron-down");
  } else {
    $(".expansionlist > a .iconbox")
      .removeClass("icon-chevron-up")
      .addClass("icon-chevron-down");
    $(this).find(".iconbox").removeClass("icon-chevron-down").addClass("icon-chevron-up");
    $(".expansionlist > a").removeClass("active");
    $(this).addClass("active");
    $(".expansioncontent").slideUp(200);
    $(this).siblings(".expansioncontent").slideDown(200);
  }
  e.preventDefault();
});


// filter

$(".accordion").on("click", function () {
  $(this).toggleClass("active");
  $(this).next().slideToggle(200);
  if ($(".accordion.active").length > 0) {
    $(".toggleText").text("Show Filters");
  } else {
    $(".toggleText").text("Hide Filters");
  }
});

if (window.innerWidth > 768) {

  var toggleAllButton = $("#togglefilter");
  if ($(".accordion.active").length > 0) {
    $(".toggleText").text("Show Filters");
  } else {
    $(".toggleText").text("Hide Filters");
  }

  $("#togglefilter, .drawer-toggle").on("click", function () {
    var allAccordions = $(".accordion");
    var allContents = $(".filtercontent");
    var isAllCollapsed = allAccordions.filter(".active").length === 0;

    if (isAllCollapsed) {
      allAccordions.addClass("active");
      allContents.slideUp(200);
    } else {
      allAccordions.removeClass("active");
      allContents.slideDown(200);
    }

    // Update button text based on state
    $(".toggleText").text(isAllCollapsed ? "Show Filters" : "Hide Filters");
  });
}

// view more

$(".show-more-btn").click(function () {
  const hiddenContent = $(this).prev(".filter-hidden");
  hiddenContent.slideToggle();

  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $(this).find(".viewmore_text").text("Show Less");
  } else {
    $(this).find(".viewmore_text").text("Show More");
  }
});

// Video play

$(function () {
  $('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
});


