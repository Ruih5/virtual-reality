class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

  let wall1= document.createElement("a-box");
  wall1.setAttribute("color","#523d3d");
  wall1.setAttribute("position","0 0 0");
  wall1.setAttribute("height",3);
  wall1.setAttribute("width",2);
  wall1.setAttribute("depth",0.1);
  this.obj.append( wall1 );

  let  walll= document.createElement("a-box");
  walll.setAttribute("position","-1 0 -1");
  walll.setAttribute("height",3);
  walll.setAttribute("width",2);
  walll.setAttribute("depth",0.1); 
  walll.setAttribute("rotation","0 90 0");
  walll.setAttribute("color","#523d3d");
  this.obj.append( walll );

  let  wall2= document.createElement("a-box");
  wall2.setAttribute("position","1 0 -1");
  wall2.setAttribute("height",3);
  wall2.setAttribute("width",2);
  wall2.setAttribute("depth",0.1); 
  wall2.setAttribute("rotation","0 90 0");
  wall2.setAttribute("color","#523d3d");
  this.obj.append( wall2 );

 let  wall3= document.createElement("a-box");
  wall3.setAttribute("position","0 0 -1.9");
  wall3.setAttribute("height",3);
  wall3.setAttribute("width",2);
  wall3.setAttribute("depth",0.1); 
  wall3.setAttribute("rotation","0 0 0");
  wall3.setAttribute("color","#523d3d");
  this.obj.append( wall3 );


 let  roof= document.createElement("a-box");
  roof.setAttribute("position","0 1.9 -1.8");
  roof.setAttribute("height",2);
  roof.setAttribute("width",2);
  roof.setAttribute("depth",0.1); 
  roof.setAttribute("rotation","45 0 0");
  roof.setAttribute("color","#776565");
  this.obj.append( roof );

  let  roof1= document.createElement("a-box");
  roof1.setAttribute("position","0 1.9 -0.2");
  roof1.setAttribute("height",2);
  roof1.setAttribute("width",2);
  roof1.setAttribute("depth",0.1); 
  roof1.setAttribute("rotation","135 0 0");
  roof1.setAttribute("color","#776565");
  this.obj.append( roof1 );

this.obj.setAttribute("position",{x:x, y:y, z:z});
scene.append( this.obj )

  
}
}