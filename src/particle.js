/*jshint esversion: 6 */

class Particle {
  constructor(x, y, options) {
    this.position = createVector(random(screen_x), random(screen_y));
    this.velocity = p5.Vector.random2D();
  }

  show() {
    var pos = this.position;
  
    push();
    translate(pos.x, pos.y);
    ellipseMode(CENTER);
    strokeWeight(1);
    fill(0, 0, 0);
    ellipse(0, 0, 3);
    pop();
  }

  get_position_vector() {
    return createVector(this.position.x, this.position.y);
  }

  update() {
    this.move();
  }

  move() {
    this.position.add(this.velocity);
  }

  check_bound() {
    var pos = this.position;
    if (pos.x < 0) {
      pos.x = screen_x;
    }

    if (pos.y < 0) {
      pos.y = screen_y;
    }

    if (pos.x > screen_x) {
      pos.x = 0;
    }

    if (pos.y > screen_y) {
      pos.y = 0;
    }
  }
}
