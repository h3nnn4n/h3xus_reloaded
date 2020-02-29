/*jshint esversion: 6 */

class Particle {
  constructor(x, y, options = {}) {
    this.options = options;

    this.position = createVector(x, y);

    if (options.cutoff_distance_min) {
      this.cutoff_distance = random(
        options.cutoff_distance_min,
        options.cutoff_distance_max
      );
    } else {
      this.cutoff_distance = 150;
    }

    this.velocity = p5.Vector.random2D().mult(random(5, 25));
  }

  show() {
    var pos = this.position;

    var c = this.options.color;

    push();
    translate(pos.x, pos.y);
    ellipseMode(CENTER);
    strokeWeight(1);
    fill(c.r, c.g, c.b);
    stroke(c.r, c.g, c.b);
    ellipse(0, 0, 3);
    pop();
  }

  get_position_vector() {
    return createVector(this.position.x, this.position.y);
  }

  update(delta_time) {
    if (this.options.can_move) {
      this.move(delta_time);
    }
  }

  move(delta_time) {
    var velocity = p5.Vector.mult(this.velocity, delta_time);
    this.position.add(velocity);
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
