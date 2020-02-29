/*jshint esversion: 6 */

function draw_lines() {
  var i, j;

  for (i = 0; i < particles.length; i++) {
    for (j = i + 1; j < particles.length; j++) {
      var particle_1 = particles[i];
      var particle_2 = particles[j];

      var p1 = particle_1.position;
      var p2 = particle_2.position;

      var cutoff_distance = Math.min(
        particle_1.cutoff_distance,
        particle_2.cutoff_distance
      );

      color = particle_1.options.color;

      fill(color.r, color.g, color.b);
      stroke(color.r, color.g, color.b);

      if (p1.dist(p2) < cutoff_distance) {
        line(p1.x, p1.y, p2.x, p2.y);
      }
    }
  }
}
