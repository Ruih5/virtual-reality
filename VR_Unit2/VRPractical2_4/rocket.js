class Rocket{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = Math.random();
    this.obj = document.createElement("a-entity");

    let body = document.createElement("a-cylinder");
    body.setAttribute("position",{x:0,y:0,z:0});
    body.setAttribute("radius",0.35);
    body.setAttribute("height",1.8);
    body.setAttribute("color","green");
    this.obj.append(body);

    let nose = document.createElement("a-cone");
    nose.setAttribute("position",{x:0,y:1.2,z:0});
    nose.setAttribute("radius-bottom",0.35);
    nose.setAttribute("radius-top",0);
    nose.setAttribute("height",0.7);
    nose.setAttribute("color","red");
    this.obj.append(nose);

   for(let i = 0; i < 3; i++){
   let down = document.createElement("a-cone");
   down.setAttribute("position",{x:0,y:-0.7,z:0.3});
   down.setAttribute("rotation",{x:0,y:0,z:90});
   down.setAttribute("radius-bottom",0.3);
   down.setAttribute("radius-top",0.05);
   down.setAttribute("height",0.6);
   down.setAttribute("color","red");

  this.obj.append(down);
}

  let window = document.createElement("a-sphere");
    window.setAttribute("position",{x:0,y:0.35,z:0.34});
    window.setAttribute("radius",0.13);
    window.setAttribute("color","yellow");
    this.obj.append(window);

    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);
  }

  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  }
}
