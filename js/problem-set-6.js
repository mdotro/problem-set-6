/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  let canvas = document.getElementById('canvas1').getContext('2d');
  canvas.font = '48px sans-serif'
  canvas.strokeText('Hello, world!', 10, 50)
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
let canvas = document.getElementById('canvas2');
let ctx = canvas.getContext('2d');

let height = prompt("Height:");
let width = prompt("Width");
let x = prompt("X:");
let y = prompt("Y:");

height = Number(height);
width = Number(width);
x = Number(x);
y = Number(y);

if (isNaN(height) == true || isNaN(width) == true || isNaN(x) == true || isNaN(y) == true) {
  alert("One of your inputs is not a number.");
} else if (height < 1) {
  alert("Your height is too small.");
} else if (width < 1) {
  alert("Your width is too small.");
} else if (x < 5) {
  alert("Your X value is too small.");
} else if (y < 5) {
  alert("Your Y value is too small.");
}


context.strokeRect(x, y, height, width);

}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
let canvas = document.getElementById('canvas3')
let ctx = canvas.getContext('2d');
let nba = prompt('Color:');
String(nba);
if (nba == "black" || nba == "blue" || nba == "green" || nba == "orange" || nba == "purple" || nba == "red" ||nba == "yellow") {
ctx.rect(10, 10, 100, 50);
ctx.fillStyle = nba;
ctx.fill();
} else {
  alert("This is an invalid color.");
}
  }

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
let x = 10;
  let y = 10;
  let line1;
  let line2;
  let line3;
  let canvas = document.getElementById("canvas4");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  while(true){
	line1 = Number(prompt("Enter side 1 length"));
	line2 = Number(prompt("Enter side 2 length"));
	line3 = Number(prompt("Enter hypotenuse length"));
	if(((line1**2) + (line2**2) == (line3**2)) && line1>0 && line2>0 && line3>0 && canvas.width-x-line1>=0 && canvas.height-y-line2>=0){
		break;
	} else {
		alert("That is not a valid triangle")
  	}
  }
 ctx.beginPath(); 
 ctx.moveTo(x,y); 
 ctx.lineTo(x,y+line1); 
 ctx.stroke(); 
 ctx.beginPath();
 ctx.moveTo(x,y+line1);
 ctx.lineTo(x+line2,y+line1);
 ctx.stroke();
 ctx.beginPath();
 ctx.moveTo(x,y);
 ctx.lineTo(x+line2,y+line1);
 ctx.stroke();
  }
}
/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  let radius;
  let canvas = document.getElementById('canvas5');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
	while(true){
		radius = Number(prompt("Please enter a good radius please"));
		if(radius>=1 && radius<=canvas.width && Number.isInteger(radius)){
			break;
		}
	}
  let x = canvas.width;
  let y = canvas.height;
  let eyes = radius*.1
  let mouth = radius*.7
  ctx.beginPath();
  ctx.arc(x/2, y/2, radius, 0, Math.PI*2); 
  ctx.stroke();

  ctx.beginPath(); 
  ctx.arc(x/2 - radius/3, y/2-radius/4, eyes,0, Math.PI*2);
  ctx.stroke();

  ctx.beginPath(); 
  ctx.arc(x/2+radius/3, y/2-radius/4, eyes,0, Math.PI*2);
  ctx.stroke();

  ctx.beginPath(); 
  ctx.arc(x/2, y/2, mouth,0, Math.PI);
  ctx.stroke();
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
let canvas = document.getElementById('canvas6');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

      let outerRadius = Number(prompt("Please enter a vaild outer radius"));
      let innerRadius = Number(prompt("Please enter a valid inner radius"));
      if (outerRadius>=innerRadius && canvas.width>=outerRadius+125 && canvas.height>=outerRadius+125 && innerRadius>=1 && outerRadius>=1){
        let points = 5;
        let outerx = [];
        let outery = [];
        let innerx = [];
        let innery = [];
        for(let x = 0;x<points;x++){
          outerx.push(Math.cos((Math.PI*2*x)/points-(Math.PI/2))*outerRadius+125);
          outery.push(Math.sin((Math.PI*2*x)/points-(Math.PI/2))*outerRadius+125);
          innerx.push(Math.cos(((Math.PI*2*x)/points)-(Math.PI/2)+(Math.PI/points))*innerRadius+125);
          innery.push(Math.sin(((Math.PI*2*x)/points)-(Math.PI/2)+(Math.PI/points))*innerRadius+125);
        }
        ctx.beginPath();
        ctx.moveTo(outerx[0], outery[0]);
        for(let y = 0;y<outerx.length;y++){
          ctx.lineTo(innerx[y], innery[y]);
          ctx.lineTo(outerx[y+1], outery[y+1]);
        }
        ctx.lineTo(outerx[0], outery[0]);
        ctx.stroke();
        ctx.closePath();
    }
    else{
        alert('This is an invalid value.');
      }
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let radius = 40 / Math.sin(0.125 * Math.PI);
  let canvas = document.getElementById('canvas7');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(Math.cos(0.125 * Math.PI) * radius + 110, Math.sin(0.125 * Math.PI) * radius + 110);
  let m = 0;
  let angle = 0.25 * Math.PI;
  while (m < 8) {
    ctx.lineTo(Math.cos(0.125 * Math.PI + angle) * radius + 110, Math.sin(0.125 * Math.PI + angle) * radius + 110);
    angle = angle + 0.25 * Math.PI;
    m = m + 1;
  }
ctx.closePath();
ctx.fillStyle = "red" ;
ctx.fill();
ctx.font = "68px Arial";
ctx.fillStyle = "white";
ctx.fillText("STOP", 15, 130);
linesWidth = 1;
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
 let canvas = document.getElementById('canvas8');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let side = Number(prompt("Please enter a side length"));
  let x = 10;
  let y = canvas.height-10;
  let m = 0;
  let line = 1;
  while(m<5){
    for(let d=0+line;d<=5;d++){
      ctx.strokeRect(x,y-side,side,side);
      x+=side;
    }
    x=10+(side/2)*line;
    y-=side;
    line++;
    m++;
  }

}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
let canvas = document.getElementById('canvas9');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  while(true){
  let door = prompt("Enter a color for the Door");
  let house = prompt("Enter a color for the House");
  if((door =="brown" || door =="blue" || door =="green" || door =="orange" || door =="purple" || door =="red" || door =="yellow")
  && (house =="brown" || house =="blue" || house =="green" || house =="orange" || house =="purple" || house =="red" || house =="yellow")) {
    break;
  }
  else{
      alert("One or more of your colors is invalid")
  }
}
let x = 150;
let houseLength = 576;
let houseHeight = 400;
let y = canvas.height-houseHeight-10;
ctx.beginPath();
ctx.fillStyle = house;
ctx.fillRect(x,y,houseLength,houseHeight);
ctx.fillStyle = door;
ctx.fillRect(x+(houseLength/2)-30,y+300,60,100);
ctx.strokeRect(x+(houseLength/2)-30,y+300,60,100);
ctx.stroke();
ctx.fillStyle="gray";
ctx.moveTo(x,y);
ctx.lineTo(x+286,150);
ctx.lineTo(x+houseLength,y);
ctx.lineTo(x,y);
ctx.fill();
ctx.fillStyle="#ADD8E6";
ctx.fillRect(300,y+100, 50, 50);
ctx.fillRect(526,y+100, 50, 50);
ctx.fillRect(300,y+200, 50, 50);
ctx.fillRect(526,y+200, 50, 50);
ctx.closePath();
ctx.beginPath();
ctx.fillStyle='black';
ctx.arc(450, 700, 6, 0, Math.PI*2);
ctx.fill();
ctx.closePath()
}
