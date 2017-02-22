//项目的服务器模块；
(function(angular){
	
angular.module("myService",[])

	//引入各个服务模块的指令；
	//第一种常用的factory()方法来创建和配置服务器最快捷的方法；
	//第一个参数是name,第二个参数是函数块
	
	.factory("appService",["$q","$http",function($q,$http){
		
		//开始写自己的代码了；
		/*$http.get("https://www.angularjsapi.cn/data/books.txt")
		   		.success(function(data){
		   			console.log(data[0].id)
		   		}).error(function(){
		   			console.log("请求失败了")
		   		})*/
		
		var getPullRequests = function(){
			//A 1.创建promise的对象；
			var deferred = $q.defer(),
				promise =deferred.promise,
				progress = '';
			$http({
				method:"GET",
				url:"https://api.github.com/repos/angular/angular.js/pulls"
			})
			//成功失败时的方法需要传递一个函数；
			.success(function(data){
				var result = [],
					len = data.length;
				for (var i=0; i<len;i++) {
					result.push(data[i].user);
					progress = (i+1)/len*100;
					// 3.在想返回的状态的时候调用notify方法来执行；
					deferred.notify(progress);
				}
				// 2.成功时将数据传给成功执行的函数；调用resolve()方法；
				deferred.resolve(result);
			})
			.error(function(error){
				// 4.失败时调用reject()方法传给promise的失败回调；
				deferred.reject(error);
			})
			// 5.在方法内返回promise对象，方便在外部调用then()方法；
			return promise;
		}
		var getData = function(){
			//代码逻辑；
		}
		
		//..........代码
		
		//服务器模块要返回的数据，方便其他的模块调用，链式编程的核心所在；返回的是函数体；
		return {
			'getPullRequests':getPullRequests,
			"getData":getData
			//.....
		}
		
	}])
	
	
})(angular)


	//第二种方法：利用service的构造函数的格式来定义service;
	//service()函数会在创建实例时通过new关键字来实例化服务对象，内部自己搞定的。 
	//使用直接----服务名.方法名；     myService.getText();
	
	/*var app = angular.module("server",[]);
	app.service("myService",["$http",function Serverss($http){
		var text = "北京初联科技欢迎您,苏镇";
		$http.jsonp("http://www.runoob.com/try/angularjs/data/Customers_JSON.php?callback=JSON_CALLBACK")
			.success(
				function (response) {
				    var names = response.records;
				    console.log(names);
			    })
		this.getText =function(){
				return text;
			}
		this.getValue = function(){
			return "两种方式都成功的调用了!"
		}
		this.getHttpText = function(){
			return $http.jsonp("http://www.runoob.com/try/angularjs/data/Customers_JSON.php?callback=JSON_CALLBACK")
			.success(function (data) {
					console.log(data);
			});
		}
	}]);*/