define(['core/DisplayObject'],function(){
	
	function FlexImage(config){
		DisplayObject.call(this,config);
		this.src = config.src;
		this.autoLoad = config.autoLoad || true;
		this.image = null;
	}
	
	FlexImage.prototype = new DisplayObject();
	FlexImage.prototype.constructor = FlexImage;
	
	/**
	 * 加载图片 如果图片加载过一遍后 就不再加载
	 */
	FlexImage.prototype.load = function(){
		if(!this.image){
			this.image = new Image();
			var self = this;
			this.image.src = this.src;
			this.image.onload = function(){
				self.context.globalAlpha = self.alpha;
				self.context.drawImage(this,self.x,self.y,self.width,self.height);
				self.context.globalAlpha = 1;
			}
		}else{
			stage.context.drawImage(this.image,this.x,this.y,this.width,this.height);
		}
		
	}
	//重写父类的render方法 实现自定义的渲染逻辑
	FlexImage.prototype.render = function(){
		this.load();
	}
	
	return FlexImage;
});
