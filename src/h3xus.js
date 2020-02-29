var particles = [];
var screen_x, screen_y;
var canvas;
var last_time;

var points;
var bounds;
let font;

function preload() {
  font = loadFont('Raleway-Regular.ttf');
}

function setup() {
  //frameRate(60);

  setup_canvas();

  //colorMode(RGB, 255);

  textAlign(CENTER, CENTER);

  spawn_particles(50);
  text_spawn_particles('h3nnn4n');

  last_time = window.performance.now();
}

function setup_canvas() {
  var main = $('body');
  var canvasSection = $('#canvasSection');

  if (canvasSection.length > 0) {
    screen_x = main.width();
    screen_y = main.height();
    canvas = createCanvas(screen_x, screen_y);

    canvasSection.css('z-index' , '-1');

    canvas.parent('#canvasSection');

    canvasSection.css({
      position: "absolute",
      marginLeft: 0, marginTop: 0,
      top: 0, left: 0
    });
  } else {
    screen_x = 900;
    screen_y = 900;

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
    random(100, height - 100),
    {
      can_move: true,
      color: {
        r: 120,
        g: 120,
        b: 120
      }
    }
  );

  particles.push(p);
}

function text_spawn_particles(text) {
  fontsize = 75;
  points = font.textToPoints(text, 0, 0, fontsize);
  bounds = font.textBounds(text, 0, 0, fontsize);
  var scale = 2;

  for (let i = 0; i < points.length; i++) {
    var position = points[i];

    var particle = new Particle(
      scale * position.x + width / 2 - 100,
      scale * position.y + height / 2,
      {
        cutoff_distance_min: 27.5,
        cutoff_distance_max: 37.5,
        can_move: false,
        color: {
          r: 80,
          g: 80,
          b: 80
        }
      }
    );

    particles.push(particle);
  }
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

  var now = window.performance.now();
  var delta_time = (now - last_time) / 1000;
  last_time = now;

  for (var p in particles) {
    particles[p].check_bound();
    particles[p].update(delta_time);
    particles[p].show();
  }

  draw_lines();
}
