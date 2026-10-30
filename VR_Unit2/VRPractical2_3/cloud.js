class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  

  let top= document.createElement("a-sphere");
  top.setAttribute("color","#ADD8E6");
  top.setAttribute("position","0 6 0");
  this.obj.append( top );
  
  let left= document.createElement("a-sphere");
  left.setAttribute("position","0 6.8 1");
  left.setAttribute("color","#ADD8E6");
    this.obj.append( left );
  
  let right = document.createElement("a-sphere");
  right.setAttribute("position","0 6 2");
  right.setAttribute("color","#ADD8E6");
   this.obj.append( right );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )

  
}
  }
