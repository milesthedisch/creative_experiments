window.onload = function () {

  var rAF = window.requestAnimationFrame;
  var canvas = a;
  var ctx = a.getContext("2d");

  var w = canvas.width = window.innerWidth;
  var h = canvas.height = window.innerHeight;
  var numParticles = 100,
      particles = [],
      rocket = vector.create(0, -0.1);
      gravity = vector.create(0, 0.1);

  var cx = w / 2,
      cy = h / 2;

    // for (var i = 0; i < numParticles; i++) {
    //   particles.push(particle.create(cx, cy + 300, Math.random() * 4 + 1, Math.random() * Math.PI * 2));
    // }

    for (var i = 0; i < numParticles; i++) {
      particles.push(particle.create(cx, cy + 500, 0, Math.PI / 2));
    }

  update();

  function update(dt) {

    // if (Math.ceil(dt % 2000) < 20) {
    //   gravity = vector.create(0, 0.1);
    //   for (var i = 0; i < numParticles; i++) {
    //     particles.pop();
    //   }
    //   for (var i = 0; i < numParticles; i++) {
    //     particles.push(particle.create(cx, cy + 300, Math.random() * 4 + 1, Math.random() * Math.PI * 2));
    //   }
    // }
    ctx.clearRect(0, 0, w, h);

    particles.forEach(function (p) {
      p.accelerate(rocket);
      p.update();
      ctx.beginPath();
      ctx.arc(p.position.getX(), p.position.getY(), 5, 0, Math.PI * 2, false);
      ctx.fill();
    });

    console.log(particles[0].position);
    // ctx.clearRect(0, 0, w, h);
    // particles.forEach(function (p) {
    //   p.accelerate(gravity);
    //   p.update();
    //   ctx.beginPath();
    //   ctx.arc(p.position.getX(), p.position.getY(), 5, 0, Math.PI * 2, false);
    //   ctx.fill();
    // });
    rAF(update);
  } 

}