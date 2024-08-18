/* counter script starts */
$(".counter-value").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");
  $({
    countNum: $this.text(),
  }).animate(
    {
      countNum: countTo,
    },
    {
      duration: 1200,
      easing: "swing",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
      },
    }
  );
});
/* counter script Ends */

/* Brand Swiper Starts */
var brandSwiper = new Swiper(".brandSwiper", {
  slidesPerView: "auto",
  spaceBetween: 100,
  speed: 9000,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});
/* Brand Swiper Ends */

/* Reveal Text Animation Starts */
let splitWords = function (selector) {
  var elements = document.querySelectorAll(selector);

  elements.forEach(function (el) {
    el.dataset.splitText = el.textContent;
    el.innerHTML = el.textContent
      .split(/\s/)
      .map(function (word) {
        return word
          .split("-")
          .map(function (word) {
            return '<span class="word">' + word + "</span>";
          })
          .join('<span class="hyphen">-</span>');
      })
      .join('<span class="whitespace"> </span>');
  });
};

let splitLines = function (selector) {
  var elements = document.querySelectorAll(selector);

  splitWords(selector);
};

splitLines(".reveal-text");
let revealText = document.querySelectorAll(".reveal-text");
let revealLines = revealText.forEach((element) => {
  const words = element.querySelectorAll(".word");

  let leverageTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".anim-para-box",
      // markers: true,
      scrub: 1,
      start: "0% 70%",
      end: "0% 50%",
    },
  });
  leverageTl.to(words, {
    opacity: 1,
    stagger: 0.1,
    delay: 0.15,
  });
});
/* Reveal Text Animation Ends */
