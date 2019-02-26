/*jshint esversion: 6 */


function draw_lines() {
  var cutoff_distance = 125;

  var i, j;

  stroke(255, 127, 0);

  for (i = 0; i < particles.length; i++) {
    for (j = i + 1; j < particles.length; j++) {
      var p1 = particles[i].position;
      var p2 = particles[j].position;

      if (p1.dist(p2) < cutoff_distance) {
        line(p1.x, p1.y, p2.x, p2.y);
      }
    }
  }
}
