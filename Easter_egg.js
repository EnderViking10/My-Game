	function easterEgg(){
		
		if(lost == 0){
			var but = document.createElement("button");
			var node = document.createTextNode("Enter");
			but.appendChild(node);
			var body = document.getElementById("body");
			body.appendChild(but);
			but.onclick = "enter(event)";
			but.id="enter";
			
			var enter = document.createElement("input");
			body.appendChild("enter");
			enter.id = "text";
			enter.type = "text";
		}
		lost = 1;
		
	  // Draws background
		c.beginPath();
		c.fillStyle = "white"
		c.fillRect(0,0,cw,ch);
		c.closePath();
		
	  // Writes question 1
		if(correct == 0){
			c.font = "24pt Bold Arial";
			
			c.beginPath();
			c.fillStyle = "black";
			c.fillText("What does 'HTTP' stand for with no capitals?",200,10);
			c.closePath();
			
			c.beginPath();
			c.fillStyle = "white";
			c.fillText("What color is this text?",200,200);
			c.closePath();
			
			if(answer == "hypertext transfer protocol" || answer == "white"){
				correct++;	
			}
		}
	  // Writes question 2
		if(correct == 1){
			c.beginPath();
			c.fillStyle = "white";
			c.fillRect(0,0,cw,ch);
			c.closePath();
			
			c.font = "24pt Bold Arial";
			
			c.beginPath();
			c.fillStyle = 'black';
			c.fillText("What is often seen as the smallest unit of memory?",200,10);
			c.closePath();
			
			c.beginPath();
			c.fillStyle = "white";
			c.fillText("Is this a question?",200.200);
			c.closePath();
			
			if(answer == "byte" || answer == "yes"){
				correct++;	
			}
		}
	  // Writes question 3
		while(correct == 2){
			c.beginPath();
			c.fillStyle = "white";
			c.fillRect(0,0,cw,ch);
			c.closePath();
			
			c.font = "24pt Bold Arial";
			
			c.beginPath();
			c.fillStyle = "black";
			c.fillText("Who is often called the father of the computer?",200,10);
			c.closePath();
			
			c.beginPath();
			c.fillStyle = "white";
			c.fillText("How many question have you answered not including this one?",200,200);
			c.closePath();
			
			if(answer == "Charles Babbage" || amswer == "2"){
				correct++;	
			}
		}
		
	  // Gives prize
		if(correct == 2){
			c.beginPath();
			c.fillStyle = "yellow";
			c.fillText("Alright you amazing",midx,midy);	
			c.closePath();
			
			lost = 0;
			xpos = [250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1];
			ypos = [0,-200,-400,-600];
			x2pos = [250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1];
			y2pos = [0,-200,-400,-600];
			xL = 125;
			yL = midy;
			xR = 125;
			yR = yL;
		}
		if(correct == 1){
			c.beginPath();
			c.fillStyle = "blue";
			c.fillText("Ur pretty good, but not amazing",midx,midy);
			c.closePath();
			
			lost = 0;
			xpos = [250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1];
			ypos = [0,-200,-400,-600];
			x2pos = [250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1];
			y2pos = [0,-200,-400,-600];
			xL = 125;
			yL = midy;
			xR = 125;
			yR = yL;
		}
		if(correct == 0	){
			c.beginPath();
			c.fillStyle = "red";
			c.fillText("Come on, you are good at the game, but you don't know anything about texhnology",mdix,midy);
			c.closePath();
			
			lost = 0;
			xpos = [250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1];
			ypos = [0,-200,-400,-600];
			x2pos = [250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1,250*Math.random() + 1];
			y2pos = [0,-200,-400,-600];
			xL = 125;
			yL = midy;
			xR = 125;
			yR = yL;
		}
	}