/**
 * 显示对象的基类
 */
function DisplayObject(config){
	config = config || {};
	this.x = config.x || 0;
	this.y = config.y || 0;
	this.width = config.width || 0;
	this.height = config.height || 0;
	this.alpha = config.alpha || 1;
	this.visible = true;
	this.context = flex.global.context;
	this._children = [];
}
/**
 * 返回一个矩形，该矩形定义相对于 targetCoordinateSpace 对象坐标系的显示对象区域
 */
DisplayObject.prototype.getBounds = function(){
	return "(x="+this.x+",y="+this.y+",width="+this.width+",height="+this.height+")";
}
/**
 * 向显示列表中添加一个显示对象
 */
DisplayObject.prototype.addChild = function(displayObject){
	this._children.push(displayObject);
}
/**
 * 从显示列表中 移除显示对象
 */
DisplayObject.prototype.removeChild = function(displayObject){
	var deleteIndex = this._children.indexOf(displayObject);
	this._children.splice(deleteIndex,1);
}
/**
 * 该对象中是否存在指定的子对象
 */
DisplayObject.prototype.contain = function(displayObject){
	if(this._children.indexOf(displayObject)==-1){
		return false;
	}
	return true;
}
/**
 * 获取子列表个数
 */
DisplayObject.prototype.numChildren = function(){
	return this._children.length;
}
/**
 * 获取显示列表的东西
 */
DisplayObject.prototype.getChildren = function(){
	return this._children;
}
/**
 * 返回指定位置的对象 如果对象不存在则抛出索引越界异常
 */
DisplayObject.prototype.getChildAt = function(index){
	var obj = this._children[index];
	if(obj){
		return obj; 
	}else{
		throw new Error("索引越界 ");
	}
}

DisplayObject.prototype.render = function(){
	trace(this.constructor.name+"没有重写render方法","warn")
}

/**
 * 重新设置上下文
 */
DisplayObject.prototype.resetContext = function(){
	flex.globla.context.globalAlpha = 1;
}

//-----------------Stage------------------------------------
/**
 * 
 */
function Stage(config){
	DisplayObject.call(this,config);
	this.context = null;
}

Stage.prototype = new DisplayObject();
Stage.prototype.constructor = Stage;

