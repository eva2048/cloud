define(['app'], function(app) {
	app.register
		.controller('consoleCtrl',
			function($scope, $stateParams, $http) {				
				$scope.leftNavNow = $stateParams.leftnav;
				var createLoad=function(){
					var load="<div id='loadBox' class='loading' style='width:100%; height: 100%; position: fixed;top: 0px;bottom: 0px;left: 0px;background:url(images/op_bg.png) repeat; z-index: 1050;'>    <div style='text-align:center;top:50%;margin-top:-80px;position:absolute;width:100%;'><img style='width:120px;' src='images/loading2.gif'>  <h1 style='color: #fff; font-size: 16px; text-align: center;margin-top:30px;'>正在提交，请稍等...</h1></div></div>";
					$("body").append(load);
				}
				var clearLoad=function(){					
					$("#loadBox").remove();					
				}
				$scope.loading=function(){
					createLoad();
				}
			})
})