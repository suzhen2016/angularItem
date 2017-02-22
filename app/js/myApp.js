//创建项目的入口模块 route
                   //模块的依赖注入！！！！模块名
var app =angular.module("myApp",['ui.router',"myController","myService"]);
//配置路由
 app.config(["$stateProvider","$urlRouterProvider",
 	function($stateProvider,$urlRouterProvider){
 	//当页面中的url指向该when方法的第一个参数时路由跳转，
	    $stateProvider
	    .state('page', {//state是标识的ui-sref的名称，url是具体的路径
	        url: '/page',
	        templateUrl:"view/myApp.html",
	 		controller:"appController"//由哪个控制器控制；
	    })
	    .state('about', {
	        url: '/',
	        template:`<div class="content">请点击分页查看</div>`
	    })
	    .state('footer', {
	        url: '/fo',
	        template:`<div class="content">已经到底部了</div>`
	    });
 }])
