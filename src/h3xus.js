var particles = [];
var screen_x, screen_y;


function setup() {
  setup_canvas();

  colorMode(HSB);

  spawn_particles(50);

  textFont('Monaco', 40);
}

function setup_canvas() {
  var main = $('body');
  var canvasSection = $('#canvasSection');

  if (canvasSection.length > 0) {
    screen_x = main.width();
    screen_y = main.height();
    var canvas = createCanvas(screen_x, screen_y);

    canvasSection.css('z-index' , '-1');

    canvas.parent('#canvasSection');

    canvasSection.css({
      position: "absolute",
      marginLeft: 0, marginTop: 0,
      top: 0, left: 0
    });
  } else {
    screen_x = 700;
    screen_y = 600;

    createCanvas(screen_x, screen_y);
  }
}

function spawn_particles(n) {
  for (var i = 0; i < n; i++) {
    spawn_particle();
  }
}

function spawn_particle() {
  var p = new Particle(
    random(100, width - 100),
    random(100, height - 100)
  );

  particles.push(p);
}

function kill_particles(n) {
  for (var i = 0; i < n; i++) {
    particles.pop();
  }
}

function get_center() {
  var l = particles.length;
  var x = 0;
  var y = 0;

  for (var prop in particles) {
    var d = particles[prop];
    x += d.position.x;
    y += d.position.y;
  }

  return createVector(
    x / l,
    y / l
  );
}

function draw() {
  background(255);

  // var center = get_center();

  for (var p in particles) {
    particles[p].check_bound();
    particles[p].update();
    particles[p].show();
  }

  draw_lines();
}
