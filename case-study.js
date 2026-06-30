/* Case study page – load project details + before/after slider */

// Before / After image slider
function initSlider(slider) {
  var layer = slider.querySelector(".before-layer");
  var handle = slider.querySelector(".slider-handle");
  var drag = false;

  function moveSlider(x) {
    var box = slider.getBoundingClientRect();
    var pct = (x - box.left) / box.width * 100;
    if (pct < 0) pct = 0;
    if (pct > 100) pct = 100;
    layer.style.width = pct + "%";
    handle.style.left = pct + "%";
  }

  slider.onmousedown = function (e) {
    drag = true;
    moveSlider(e.clientX);
  };
  window.addEventListener("mousemove", function (e) {
    if (drag) moveSlider(e.clientX);
  });
  window.addEventListener("mouseup", function () {
    drag = false;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("before-after");
  if (!slider) return;

  var id = new URLSearchParams(location.search).get("id");
  var data = typeof caseData !== 'undefined' ? caseData[id] : null;

  if (!data) {
    document.getElementById("case-content").innerHTML = "<p>Project not found. <a href='work.html'>Back to Work</a></p>";
    return;
  }

  document.getElementById("case-title").textContent = data.title;
  document.getElementById("case-desc").textContent = data.desc;
  document.getElementById("case-category").textContent = data.cat;
  slider.querySelector(".after-img").src = data.after;
  slider.querySelector(".before-img").src = data.before;

  initSlider(slider);
});
