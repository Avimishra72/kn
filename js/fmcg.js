/* Sleepy Swiper Starts */

const sleepySwiper2 = new Swiper(".sleepySwiper2", {
  spaceBetween: 30,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const sleepySwiper = new Swiper(".sleepySwiper", {
  spaceBetween: 10,
  slidesPerView: 1,
  navigation: {
    nextEl: ".sleepy-next",
    prevEl: ".sleepy-prev",
  },
  thumbs: {
    swiper: sleepySwiper2,
  },
});

/* Sleepy Swiper Ends */

/* Sleepy Popup Starts */
$(document).ready(function () {
  $(".popup-sleepy").magnificPopup({
    delegate: "a",
    type: "image",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    callbacks: {
      elementParse: function (item) {
        // Check if the href is a YouTube link
        if (item.src.includes("youtube.com") || item.src.includes("youtu.be")) {
          item.type = "iframe"; // Render as video
        } else {
          item.type = "image"; // Default to image
        }
      },
    },
  });
});
/* Sleepy Popup Ends */

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
