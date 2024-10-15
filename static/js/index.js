window.HELP_IMPROVE_VIDEOJS = false;

// ====== INTERPOLATION for stacked images ======
var INTERP_BASE = "./static/interpolation/sample1";
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
const MODEL_BASE = "https://4d-worldmodel.github.io/models/sample1";
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


// ====== INTERPOLATION for stacked images ======
var INTERP_BASE2 = "./static/interpolation/sample2";
var NUM_INTERP_FRAMES2 = 34;

var interp_images2 = [];
function preloadInterpolationImages2() {
  for (var i = 0; i < NUM_INTERP_FRAMES2; i++) {
    var path = INTERP_BASE2 + '/' + String(i).padStart(6, '0') + '.png';
    interp_images2[i] = new Image();
    interp_images2[i].src = path;
  }
}

function setInterpolationImage2(i) {
  var image = interp_images2[i];
  image.ondragstart = function () { return false; };
  image.oncontextmenu = function () { return false; };
  $('#interpolation-image-wrapper2').empty().append(image);
}

// ====== MODEL VIEWER ======
const NUM_MODELS2 = 34;
const MODEL_BASE2 = "https://4d-worldmodel.github.io/models/sample2";
const modelFiles2 = [];

function preloadModelFiles2() {
  for (let i = 0; i < NUM_MODELS2; i++) {
    const fileName = String(i).padStart(6, '0') + '.glb';
    const filePath = `${MODEL_BASE2}/${fileName}`;
    modelFiles2.push(filePath);
  }
}

function setModel2(index) {
  const modelViewer = document.getElementById('model-viewer2');
  modelViewer.src = modelFiles2[index];
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

  preloadInterpolationImages2();
  $('#model-slider2').on('input', function (event) {
    setInterpolationImage2(this.value);
  });
  setInterpolationImage2(33);
  $('#model-slider2').prop('max', NUM_INTERP_FRAMES2 - 1);
  preloadModelFiles2();
  $('#model-slider2').on('input', function () {
    const index = parseInt(this.value);
    setModel2(index);
  });
  setModel2(33);
  $('#model-slider2').prop('max', NUM_MODELS2 - 1);

  bulmaSlider.attach();

})
