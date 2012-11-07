//单例类 用来获取和设置关于canvas属性的类
var flex = function(){
	var global = {};//存储全局属性
	var children = Array;
	//初始化关于canvas画布的属性 
	function init(canvasDomId,frameRates){
		var $canvas = $("#"+canvasDomId);
		global.canvasDom = document.getElementById(canvasDomId);//canvas dom节点
		global.width = $canvas.attr("width");
		global.height = $canvas.attr("height");
		if(global.canvasDom.getContext){
			global.context = global.canvasDom.getContext("2d");//canvas上下文
		}else{
			alert("Sorry,your browser doesn't support html5 ! \n You can try chrome , Firefox3.6+,IE9+,Opera10+!");
		}
		//在window级别上添加stage属性
		window.stage = new Stage(global);
		window.stage.context = global.context;
		//上下文初始化完毕之后 开始根据设定的FPS定时刷新界面
		refreshCanvas();
		setInterval(refreshCanvas,Math.round(1000/frameRates));
	}
	function refreshCanvas(){
		global.context.clearRect(0,0,stage.width,stage.height);
		render(stage);
	}
	
	/**
	 * 调用渲染方法
	 */
	function render(displayObject){
		if(displayObject.numChildren()){
			var children = displayObject.getChildren();
			for(var i in children){
				render(children[i]);
			}
		}else{
			displayObject.render();
		}
		
	}
	
	//将初始化程序的方法和全局属性 向外部开放
	return {
		initApp:init,
		global:global
	};
}();

/**
 * 用来在控制台打印消息
 */
function trace(){
	var logType = ['log','error','info','warn'];
	var type = "log";
	var content = "";
	for(var i=0;i<arguments.length;i++){
		if(i == arguments.length-1){
			if(logType.indexOf(arguments[i])!=-1){
				type = arguments[i];
				content = content.slice(0,content.length-1);
			}else{
				content += "arguments["+i+"]";	
			}
		}else{
			content += "arguments["+i+"],";	
		}
	}
	content += ")";
	res = "console."+type+"("+content;
	eval(res);
}
