//一个绘制图形的单例类
var DrawUtil = function(){
	function drawRect(propObj){//绘制矩形的方法
		var context = flex.global.context;
		context.fillStyle = propObj.fillStyle;
		context.strokeStyle = propObj.strokeStyle;
		context.fillRect(propObj.x,propObj.y,propObj.width,propObj.height);
		context.strokeRect(propObj.x,propObj.y,propObj.width,propObj.height);
	}
	
	return {
		drawRect:drawRect
	};
	
}();
