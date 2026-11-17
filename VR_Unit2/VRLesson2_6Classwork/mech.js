class Mech{
  constructor(x,y,z){    
    this.x=x;
    this.y=y;
    this.dy=rnd(1,10)/200;
    this.z=zthis.obj=mechTemplate.cloneNode(true)
    this.obj.setAttribute("position",{x:x,y:x,z:z});
    ServiceWorkerContainer.append(this.obj);

}
launch(){
  this.y+=this.dy;
  this.r+=1;
  this.obj.setAttribute("position",)
}
}