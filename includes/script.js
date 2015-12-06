		 var name = "ORANMOSHE"; 
		 var indexLight = 0;
		 
		 // initialization
		 function start(){
			var boxesManager = new BoxesManager();
			var btnNext = document.getElementById("btn_next");
			btnNext.addEventListener('click', LightThree);//register event
			var btnClear = document.getElementById("btn_clear");
			btnClear.addEventListener('click', Clear);//register event
	  	 }
	  	 
		 // Box object is an article with text and style
		 function Box(iCurrentBox) {
			
			 this.l_iID = iCurrentBox;//global var. anyone can access it
			 var boxObj = document.createElement('article');// private.
			 boxObj.className = "box_class";
			
			 //private func
			 var appendBox = function() {
				 boxObj.addEventListener('mouseover', onHover);//register event
		 		 boxObj.addEventListener('mouseout', onHoverOut);//register event
				 var container = document.getElementsByTagName("main")[0]
				 container.appendChild(boxObj);// add box
			 }
			
			 //creating event. private
			 var onHover = function() {
				 this.className = "box_class light";
				 boxObj.innerHTML = name[iCurrentBox];
			 };
			 
			 //creating event. private
			 var onHoverOut = function() {
				 this.className = "box_class";
				 this.innerHTML = " ";
			 };
			
			 //global function to access private var imgObj.src
			 this.getLetter = function() {
			 	return (boxObj.innerHtml);
			 };
			
			 //global function to set private var imgObj.src
			 this.setLetter = function(letter) {
			 	imgObj.innerHtml = letter;
			 }
			
			 appendBox();
		}
		
		
		// BoxManager builds list of boxes by string name
		
		function BoxesManager() {
		 	var iBoxsNum = name.length; 
			//Creates the imgs
			for (var i=0; i<iBoxsNum; i++) {
				//Create new img instance
				var box = new Box(i);	
			}
			var div = document.createElement('div');
			div.className = "clear";
			var main = document.getElementsByTagName("main")[0];
			main.appendChild(div);

		};
		
		
		// function makes three next objects shown
		function LightThree(){
			
			for(var r = 0; r < 3; r++){
				if(indexLight+1 >   name.length){
				indexLight = 0;
				}
				indexLight++;
				Light(indexLight);
			}			
		}
		
		// function makes single the objects shown by id
		function Light(index){
			var c = document.getElementsByTagName("main")[0];
			c = c.children;
			c[index].className = "box_class light";	
			c[index].innerHTML = name[index-1];
		}
		
		// clears objects 
		function Clear(){
			var c = document.getElementsByTagName("main")[0];
			c = c.children;
				for(var r = 1; r<name.length+1; r++){
				c[r].className = "box_class";	
				c[r].innerHTML = " ";
				}
				indexLight = 0;
		}
		

