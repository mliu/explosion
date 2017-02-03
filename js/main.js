(function() {
  'use strict';

  // Setup project configuration variables
  if (!window.config) {
    window.config = {};

    config.PIXELS_PER_GRID_SQUARE = 25;
  }

  var canvas;
  var grid = [];
  var s = [];

  function init() {
    canvas = $("#canvas");

    window.onresize();
    
    // Set up initial grid
    var xGrid = Math.floor(document.body.clientWidth/config.PIXELS_PER_GRID_SQUARE) * config.PIXELS_PER_GRID_SQUARE;
    var yGrid = Math.floor(window.innerHeight/config.PIXELS_PER_GRID_SQUARE) * config.PIXELS_PER_GRID_SQUARE;
    for (var i = 0; i < xGrid; i++) {
      grid.push(new Array(yGrid));
    }

    for (var i = 0; i < 5; i++) {
      addStarling();
    }

    window.requestAnimationFrame(step);
  }

  $(document).ready(function() {
    init();
  });

  function addStarling() {
    
  }

  function getHtmlCanvas() {
    return canvas.get()[0];
  }

  function step() {
    window.requestAnimationFrame(step);
  }

  window.onresize = function() {
    // Floor round to nearest denomination of grid square
    // canvas.width(Math.floor(document.body.clientWidth/config.PIXELS_PER_GRID_SQUARE) * config.PIXELS_PER_GRID_SQUARE);
    // canvas.height(Math.floor(window.innerHeight/config.PIXELS_PER_GRID_SQUARE) * config.PIXELS_PER_GRID_SQUARE);
  };
})();