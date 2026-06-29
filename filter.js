/* Project category filter (work.html) */
document.addEventListener("DOMContentLoaded", function () {
  var filterBtns = document.querySelectorAll(".filter-btn");
  if (!filterBtns.length) return;

  for (var i = 0; i < filterBtns.length; i++) {
    filterBtns[i].onclick = function () {
      var cat = this.getAttribute("data-filter");
      for (var j = 0; j < filterBtns.length; j++) {
        filterBtns[j].classList.remove("active");
      }
      this.classList.add("active");

      var cards = document.querySelectorAll(".project-card");
      for (var k = 0; k < cards.length; k++) {
        var show = cat === "All" || cards[k].getAttribute("data-category") === cat;
        cards[k].style.display = show ? "block" : "none";
      }
    };
  }
});
