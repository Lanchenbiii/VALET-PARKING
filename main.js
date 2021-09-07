canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 10;

background_image = "parkingLot.jpg";

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	car2_imgTag = new Image(); //defining a variable with a new image
	car2_imgTag.onload = uploadcar2; // setting a function, onloading this variable
	car2_imgTag.src = car2_image;   // load image

}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar2() {
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			car2_up();
		
		}
		if(keyPressed == '40')
		{
			car2_down();
			
		}
		if(keyPressed == '37')
		{
			car2_left();
			
		}
		if(keyPressed == '39')
		{
			car2_right();
			
		}
	}
	
function up(){
    if(rover_y >=0){
        rover_y = rover_y - 10;
       uploadBackground();
       uploadRover();
    }
}

function down(){
    if(rover_y <=500){
        rover_y = rover_y + 10;
       uploadBackground();
       uploadRover();
    }
}

function left(){
    if(rover_x >=0){
        rover_x = rover_x - 10;
       uploadBackground();
       uploadRover();
    }
}

function right(){
    if(rover_x <=700){
        rover_x = rover_x + 10;
       uploadBackground();
       uploadRover();
    }
}


























