class UFO{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = Math.random()*0.5;

    this.obj = document.createElement("a-entity");

    let body = document.createElement("a-cylinder");
    body.setAttribute("position",{x:0,y:0,z:0});
    body.setAttribute("radius",1.5);
    body.setAttribute("height",0.3);
    body.setAttribute("color","brown");
    this.obj.append(body);

    let top = document.createElement("a-sphere");
    top.setAttribute("position",{x:0,y:0.35,z:0});
    top.setAttribute("scale",{x:0.7,y:0.5,z:0.7});
    top.setAttribute("color","lightblue");
    this.obj.append(top);


    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);
  }

  invade(){
    if(this.y > 1){
      this.y -= this.dy;

      if(this.y < 1){
        this.y = 1;
      }

      this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    }
  }
}