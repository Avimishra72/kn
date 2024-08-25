/* FAQ Accordian Starts */
var acc = document.querySelectorAll(".acc-item");

$(".acc-container .acc-item:first-child").addClass("active");
$(".acc-container .acc-item:nth-child(1) .panel").slideDown();

acc.forEach((el) =>
  el.addEventListener("click", () => {
    if (el.classList.contains("active")) {
      $(el).find(".panel").slideUp();
      $(el).removeClass("active");
    } else {
      $(".panel").slideUp();
      $(".acc-item").removeClass("active");
      $(el).find(".panel").slideDown();
      $(el).addClass("active");
    }
  })
);
/* FAQ Accordian Ends */
