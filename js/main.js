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
  var MAX_VELOCITY = 15;
  var maxstep = 200;
  var curstep = 0;

  function init() {
    canvas = $("#canvas");
    CANVAS_WIDTH = canvas.width();
    CANVAS_HEIGHT = canvas.height();

    window.onresize();

    // Add boids
    for (var i = 0; i < 50; i++) {
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
        400,250,
        // Math.round(Math.random() * CANVAS_WIDTH),
        // Math.round(Math.random() * CANVAS_HEIGHT),
        Math.round(Math.random() * MAX_VELOCITY),
        Math.round(Math.random() * 360)));
  }

  function getHtmlCanvas() {
    return canvas.get()[0];
  }

  function step() {
    curstep++;
    if (curstep > maxstep) {
      boids = [];
      for (var i = 0; i < 50; i++) {
        addBoid();
      }
      curstep = 0;
      var context = getHtmlCanvas().getContext("2d");
      context.beginPath();
      context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }

    for (var i = 0; i < boids.length; i++) {
      boids[i].step();
    }

    var canvas_context = getHtmlCanvas().getContext("2d");
    for (var i = 0; i < boids.length; i++) {
      boids[i].draw(canvas_context);
    }
    canvas_context.stroke();

    window.requestAnimationFrame(step);
  }

  window.onresize = function() {
    // Do nothing
  };

  Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
  };
})();