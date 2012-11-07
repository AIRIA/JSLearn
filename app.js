requirejs.config({
	baseUrl:'scripts/app',
	paths:{
		core:'../flex/core',
		controls:'../flex/controls',
		util:'../flex/util'
	}
});

requirejs(['startup','core/flex']);

