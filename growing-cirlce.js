var circle;

function setup(){
  createCanvas(windowHeight,windowWidth)
   
  circle = {
         x: width/2,
         y: height/2,
         size: 50,
        draw: function(){
             ellipse(this.x, this.y, this.size, this.size);
  },
  grow: function(){
    if (this.size < 200){
     this.size += 1;
    }
  },
 };
}

function draw(){
      background(22);
  
  // circle properties
  
  fill (255,255,0);
  noStroke();
  
  circle.draw();
  circle.grow();
}

// Copyright © Bakari Mustafa.
