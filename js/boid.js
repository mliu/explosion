(function() {
  'use strict';

  function Boid(initX, initY, velocity, initDirection) {
    this.x = initX;
    this.y = initY;
    this.velocity = velocity;
    this.direction = initDirection;
  }
  window.Boid = Boid;

  Boid.prototype.draw = function(ctx) {
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + 5, this.y + 5);
  }

  Boid.prototype.step = function() {

  }
})();