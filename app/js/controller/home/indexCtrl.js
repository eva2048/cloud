define(['app'], function(app) {
    app.register
        .controller('indexCtrl', function($scope, $stateParams, $interval) {
            //banner动画
            //当前index
            $scope.index = 0;
            /*var width = window.innerWidth;*/
            //banner图片索引
            $scope.bannerIndex = [1, 2, 3, 4];
            //定时器方法
            var timer = function() {
                if ($scope.index < $scope.bannerIndex.length - 1) {
                    $scope.index++;
                } else {
                    $scope.index = 0;
                }
                $scope.a = -1920 * $scope.index - 960 + "px";
            };
            //启用定时器
            var banner = $interval(timer, 2000); //间隔2秒定时执行
            //按钮点击切换  
            $scope.tabClick = function() {
                $scope.index = this.$index;
                $scope.a = -1920 * $scope.index - 960 + "px";
            };
            //清除定时器
            $scope.cleartimer = function() {
                $interval.cancel(banner);
            };
            //重新启用定时器
            $scope.starttimer = function() {
                banner = $interval(timer, 2000);
            }
        })
})
