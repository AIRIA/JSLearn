requirejs(['controls/FlexImage','util/DrawUtil'], function(FlexImage) {
	//将canvas的domId传递进去
	flex.initApp("mainCanvas",60);
	var image = new FlexImage({
		src:'scripts/app/images/10193527.jpg',
	});
	for(var i=0;i<4;i++){
		var image = new FlexImage({
			src:'scripts/app/images/10193527.jpg',
			width:100,
			height:150
		});
		image.x = 100*i;
		image.y = 0;
		stage.addChild(image);
	}
});