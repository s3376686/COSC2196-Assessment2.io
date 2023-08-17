function parallax() {
        Array.from(document.querySelectorAll('*[data-type="background"]')).forEach(e => {
            let yPos = window.pageYOffset * e.dataset.speed + 50;
            var coords = `50% ${yPos}%`;
            e.style.backgroundPosition = coords;
        });
}

document.addEventListener('scroll', function () {
  parallax();
  if(window.pageYOffset > 200) { $("#header").removeClass('large');  }
  else { $("#header").addClass('large');  }
});

function resizeHeights() {
    var winH = $(window).height();
    $("#intro").css("height", winH + 'px');
}
$(document).ready(function(){
  resizeHeights();
  $(window).resize(function () {
    resizeHeights();
  });
});
