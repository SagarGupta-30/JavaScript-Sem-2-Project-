/* Project page logic – Handles interactive before/after sliders */

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
  
  // Touch support for mobile devices
  slider.ontouchstart = function (e) {
    drag = true;
    if (e.touches.length > 0) {
      moveSlider(e.touches[0].clientX);
    }
  };

  window.addEventListener("mousemove", function (e) {
    if (drag) moveSlider(e.clientX);
  });
  
  window.addEventListener("touchmove", function (e) {
    if (drag && e.touches.length > 0) {
      moveSlider(e.touches[0].clientX);
    }
  });

  window.addEventListener("mouseup", function () {
    drag = false;
  });
  
  window.addEventListener("touchend", function () {
    drag = false;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("before-after");
  if (slider) {
    initSlider(slider);
  }
});
