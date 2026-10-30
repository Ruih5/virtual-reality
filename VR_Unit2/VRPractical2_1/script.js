let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,0,z);
  }
   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createCloud(x,0,z);
  }
   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
     for(let i = 0; i < 4; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createHouse(x,0,z);
  }
})



/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/
function createCloud(x, y, z){
  let Cloud = document.createElement("a-entity");
  
  let top= document.createElement("a-sphere");
  top.setAttribute("color","#ADD8E6");
  top.setAttribute("position","0 6 0");
  Cloud.append( top );
  
  let  left= document.createElement("a-sphere");
  left.setAttribute("position","0 6.8 1");
  left.setAttribute("color","#ADD8E6");
  Cloud.append( left );

  let right = document.createElement("a-sphere");
  right.setAttribute("position","0 6 2");
  right.setAttribute("color","#ADD8E6");
  Cloud.append( right );


  Cloud.setAttribute("position",{x:x, y:y, z:z});
  scene.append( Cloud )
}


/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene    
*/
function createHouse(x, y, z){
  let House = document.createElement("a-entity");

  let wall1= document.createElement("a-box");
  wall1.setAttribute("color","#523d3d");
  wall1.setAttribute("position","0 1 0");
  wall1.setAttribute("height","3");
  wall1.setAttribute("depth","5");
  wall1.setAttribute("width","0.5");

  House.append( wall1 );
  
  let  walll= document.createElement("a-box");
  walll.setAttribute("position","-2 1 0");
  walll.setAttribute("rotation","0 90 0");
  walll.setAttribute("height","3");
  walll.setAttribute("depth","3");
  walll.setAttribute("width","0.5");



  walll.setAttribute("color","#523d3d");
  House.append( walll );

  House.setAttribute("position",{x:x, y:y, z:z});
  scene.append( House )
}


function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}



