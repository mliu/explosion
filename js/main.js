(function() {
  'use strict';

  // Setup project configuration variables
  if (!window.config) {
    window.config = {};
  }

  var canvas;
  var boids = [];

  var CANVAS_WIDTH;
  var CANVAS_HEIGHT;
  var MAX_VELOCITY = 5;

  function init() {
    canvas = $("#canvas");
    CANVAS_WIDTH = canvas.width();
    CANVAS_HEIGHT = canvas.height();

    window.onresize();

    // Add boids
    for (var i = 0; i < 5; i++) {
      addBoid();
    }

    window.requestAnimationFrame(step);
  }

  $(document).ready(function() {
    init();
  });

  function addBoid() {
    boids.push(
      new Boid(
        Math.round(Math.random() * CANVAS_WIDTH),
        Math.round(Math.random() * CANVAS_HEIGHT),
        Math.round(Math.random() * MAX_VELOCITY),
        Math.round(Math.random() * 360)));
  }

  function getHtmlCanvas() {
    return canvas.get()[0];
  }

  function step() {
    for (var i = 0; i < boids.length; i++) {
      boids[i].step();
    }

    var canvas_context = getHtmlCanvas().getContext("2d");
    canvas_context.beginPath();
    for (var i = 0; i < boids.length; i++) {
      boids[i].draw(canvas_context);
    }
    canvas_context.stroke();

    window.requestAnimationFrame(step);
  }

  window.onresize = function() {
    // Do nothing
  };
})();