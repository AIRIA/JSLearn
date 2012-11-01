var myApp = function(){
	var canvas;//canvas element dom
	var context;//canvas context
	var startAngle = 0 ;//mask startAngle arg
	var initContext = function(canvasId){
		canvas = document.getElementById(canvasId);
		if(canvas.getContext){
			context = canvas.getContext("2d");
		}else{
			alert("your browser didn't support canvas !");
		}
	}
	return {
		initContext:initContext,
		drawMask:function(){
			context.beginPath();
			context.arc(250,250,200,startAngle*Math.PI/180,Math.PI,false);
			context.clip();
		},
		drawImage:function(){
			var img = new Image();
			img.src = "images/10193527.jpg";
			var app = this;
			img.onload = function(){
				context.drawImage(img,0,0,img.width,img.height,0,0,500,500);
			};
			var canvas = new Button();
			document.body.appendChild(canvas);
		}
	};
	
}();

myApp.initContext("myCanvas");
