window.HELP_IMPROVE_VIDEOJS = false;

// ====== INTERPOLATION for stacked images ======
var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 15;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.png';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function () { return false; };
  image.oncontextmenu = function () { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}

// ====== MODEL VIEWER ======
const NUM_MODELS = 15;
const MODEL_BASE = "https://4d-worldmodel.github.io/models/";
const modelFiles = [];

function preloadModelFiles() {
  for (let i = 0; i < NUM_MODELS; i++) {
    const fileName = String(i).padStart(6, '0') + '.glb';
    const filePath = `${MODEL_BASE}/${fileName}`;
    modelFiles.push(filePath);
  }
}

function setModel(index) {
  const modelViewer = document.getElementById('model-viewer');
  modelViewer.src = modelFiles[index];
}


// ====== BULMA CAROUSEL ======
$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });

  var options = {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  // Initialize all div with carousel class
  var carousels = bulmaCarousel.attach('.carousel', options);

  // Loop on each carousel initialized
  for (var i = 0; i < carousels.length; i++) {
    // Add listener to  event
    carousels[i].on('before:show', state => {
      console.log(state);
    });
  }

  // Access to bulmaCarousel instance of an element
  var element = document.querySelector('#my-element');
  if (element && element.bulmaCarousel) {
    // bulmaCarousel instance is available as element.bulmaCarousel
    element.bulmaCarousel.on('before-show', function (state) {
      console.log(state);
    });
  }

  preloadInterpolationImages();

  $('#model-slider').on('input', function (event) {
    setInterpolationImage(this.value);
  });
  setInterpolationImage(14);
  $('#model-slider').prop('max', NUM_INTERP_FRAMES - 1);

  preloadModelFiles();
  $('#model-slider').on('input', function () {
    const index = parseInt(this.value);
    setModel(index);
  });
  setModel(14);
  $('#model-slider').prop('max', NUM_MODELS - 1);

  bulmaSlider.attach();

})
