//创建项目的控制器模块，改模块依赖于服务器模块的数据的供给；
(function(angular){
	
  angular.module("myController",[])
  //            控制器的名字，				 引入服务器的数据,						
  	.controller("appController",["$scope","appService","$location","$log",
  		function($scope,appService,$location,$log){
  			
  			//调用函数的实现过程；
  			initApp();
  			
  			function initApp(){
	  			$scope.name = "dreamapple";
	  			$scope.show = true;

	  			//调用服务器的数据，该方法返回一个promise对象；
	  			appService.getPullRequests().then(function(resolve){
	  				$scope.data = resolve;
	  			},function(error){
	  				$scope.data = "false";
	  			},function(progress){
	  				$scope.progress = progress;
	  				$scope.show = false;
	  			})
				if(!$scope.data){
					$scope.data=[1,2,3,4]
				}
  			};
  			
  			//测试location的用处；
  			loglocation();
  			function loglocation(){
  				
  				console.log('获取当前的路径'+$location.path());
				$log.log("获取编码后完整的url："+$location.absUrl());
				$log.log("获取当前页面的url： "+$location.url())
				$log.log("当前的hash值："+$location.hash());
				$log.log("当前的主机名："+$location.host());
				$log.log("当前的端口号："+$location.port());
				$log.log("获得当前的url的协议："+$location.protocol());
				$log.log('获得当前url的查询字符串/设置当前的查询字符串：'+$location.search({name:"first"}));
				$log.log('获得当前url的查询字符串：'+$location.search());
			
				$scope.goBack = function(){
					$location.path("/home").replace();
					$scope.currentTab = $scope.tabs[0].url;
				}
  			}
  			
  			//自己的代码......
  			
  		}
  	])
  	
  	
})(angular)