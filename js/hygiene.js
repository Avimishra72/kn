/* Brand Swiper Starts */
var brandSwiper = new Swiper(".brandSwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  speed: 9000,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});
/* Brand Swiper Ends */

// Handle tabs dynamically
$(".trm-tab").hide();
$(".trm-tab:first").show();

$(".trm-tab-box ul li").click(function () {
  $(".trm-tab").hide();
  var d_activeTab = $(this).attr("rel");
  $("#" + d_activeTab).fadeIn();

  $(".trm-tab-box ul li").removeClass("active");
  $(".trm-tab-box ul li[rel^='" + d_activeTab + "']").addClass("active");

  // Scroll clicked li to the left
  const ul = $(this).closest("ul")[0];
  const li = $(this)[0];
  ul.scrollTo({
    left: li.offsetLeft,
    behavior: "smooth",
  });
});

/* TRM Swiper Starts */
const trmSwiper = new Swiper(".trmSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 800,
  navigation: {
    nextEl: ".trm-next",
    prevEl: ".trm-prev",
  },
  breakpoints: {
    769: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 2.4,
      spaceBetween: 24,
    },
    1201: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
/* TRM Swiper Ends */

/* Fix Popup Starts */
$(document).ready(function () {
  $(".popup-fix").magnificPopup({
    type: "iframe",
    iframe: {
      patterns: {
        youtube: {
          index: "youtube.com/",
          id: function (url) {
            var match = url.match(/embed\/([^\?]+)/);
            return match && match[1] ? match[1] : null;
          },
          src: "https://www.youtube.com/embed/%id%?autoplay=1",
        },
      },
    },
  });
});
/* Fix Popup Ends */
