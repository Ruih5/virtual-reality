
window.addEventListener("DOMContentLoaded",function() {

  let scene;
  let car;


  window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  car = document.querySelector("#car");
  car.a = 0;
  car.da = 1;
  
  loop();
})

function loop(){
  car.a += car.da;
  car.setAttribute("rotation",{x:0, y:box.a, z:0});
  window.requestAnimationFrame(loop);
}
  scene.append(car);

})
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);