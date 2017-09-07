//加入项目
define(['app'], function(app) {
    app.register
        .controller('modalInstanceCtrl', ['$scope', '$modalInstance', '$log', '$interval', '$timeout', '$modal', '$http',
            function($scope, $modalInstance, items, $interval, $timeout, $modal, $http) {
                $scope.items = items;
                $scope.selected = {
                    item: $scope.items[0]
                };
                $scope.ok = function() {
                    $modalInstance.close($scope.selected);
                };
                $scope.cancel = function() {
                    $modalInstance.dismiss('cancel');
                };
                $scope.data = [{
                    'id': 1,
                    'level': -1,
                    'title': '用例1',
                    'nodes': [{
                        'id': 11,
                        'level': 0,
                        'title': '用例1.1',
                        'nodes': [{
                            'id': 111,
                            'level': 1,
                            'title': '用例1.1.1',
                            'nodes': []
                        }]
                    }, {
                        'id': 12,
                        'level': 0,
                        'title': '用例1.2',
                        'nodes': []
                    }]
                }];

                /*处理人数据*/
                $scope.handles = [{
                        'name': '张三',
                        'selected': true,
                    },
                    {
                        'name': '李四',
                        'selected': false,
                    },
                    {
                        'name': '彭于晏',
                        'selected': false,
                    },
                    {
                        'name': '张起灵',
                        'selected': false,
                    },
                    {
                        'name': '李梅',
                        'selected': false,
                    },
                    {
                        'name': '彭德怀',
                        'selected': false,
                    }
                ];
                //删除已选处理人
                $scope.deleteSelect = function(val) {
                    for (var i = 0; i < $scope.handles.length; i++) {
                        if ($scope.handles[i].name == val) {
                            $scope.handles[i].selected = false;
                        }
                    }
                };
                //单选选择处理人
                $scope.chooseSelect = function(val) {
                    for (var i = 0; i < $scope.handles.length; i++) {
                        if ($scope.handles[i].name == val) {
                            $scope.handles[i].selected = true;
                        } else {
                            $scope.handles[i].selected = false;
                        }
                    }
                }


                $scope.files = [];
                var file;
                $scope.fileChanged = function(ele) {
                    for (var i = 0; i < ele.files.length; i++) {
                        //判断文件大小
                        if (ele.files[i].size > (30 * 1024 * 1024)) {
                            $modal.open({
                                templateUrl: 'tpls/modal/default.html',
                                resolve: {
                                    items: function() {

                                    }
                                }
                            })
                        } else { //文件存入数组
                            file = ele.files[i];
                            $scope.files.push(file);
                            //定时刷新数组（删除文件列表不能实时更新）
                            $timeout(function() {
                                return $scope.files;
                            }, 10);
                        }
                    }
                };
                //删除文件
                $scope.del = function(i) {
                    $scope.files.splice(i, 1);
                    console.log($scope.files);
                };
                //文件大小转换
                $scope.getFileSize = function(fileByte) {
                    var fileSizeByte = fileByte;
                    var fileSizeMsg = "";
                    if (fileSizeByte < 1048576) fileSizeMsg = Math.round(fileSizeByte / 1024) + "KB";
                    else if (fileSizeByte == 1048576) fileSizeMsg = "1MB";
                    else if (fileSizeByte > 1048576 && fileSizeByte < 1073741824) fileSizeMsg = Math.round(fileSizeByte / (1024 * 1024)) + "MB";
                    else if (fileSizeByte > 1048576 && fileSizeByte == 1073741824) fileSizeMsg = "1GB";
                    else if (fileSizeByte > 1073741824 && fileSizeByte < 1099511627776) fileSizeMsg = Math.round(fileSizeByte / (1024 * 1024 * 1024)) + "GB";
                    else fileSizeMsg = "文件超过1TB";
                    return fileSizeMsg;
                };
            }
        ])
})