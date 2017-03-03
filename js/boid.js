(function() {
  'use strict';

  function Boid(initX, initY, velocity, initDirection) {
    this.x = initX;
    this.y = initY;
    this.velocity = velocity;
    this.direction = initDirection;

    console.log("Creating boid (" + initX + ", " + initY + ") velocity " + velocity + " facing " + initDirection);
  }
  window.Boid = Boid;

  Boid.prototype.draw = function(ctx) {
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + 5, this.y + 5);
  }

  Boid.prototype.step = function() {
    this.x += Math.cos(Math.radians(this.direction)) * this.velocity;
    this.y += Math.sin(Math.radians(this.direction)) * this.velocity;
    this.velocity *= .98;
  }
})();