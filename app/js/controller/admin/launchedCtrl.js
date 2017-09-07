define(['app'], function(app) {
    app.register
        .controller('launchedCtrl',
            function($scope, $stateParams, $http, i18nService) {
                //分页
                $scope.maxSize = 3;
                $scope.totalItems = 200;
                $scope.currentPage = 1;
                $scope.numPages = 3;
                //      $http({
                //          method:'get',
                //          url:'./data/launch.php',
                //      }).then(function successCallback(data){
                //          var jsonstr = JSON.stringify(data);  
                //          var jsondata = $.parseJSON(jsonstr);  
                //          $scope.data=jsondata.lists;
                //          console.log($scope.data);
                //      },function errorCallback(data){
                //          console.log('失败'); 
                //      })      
                $scope.data = {
                    lists: [{
                        num: "1",
                        flowName: "流程名称1",
                        taskName: "任务名称1",
                        creater: "项目经理",
                        createTime: "2017-06-05 14:00",
                        startTime: "2017-06-05 14:00",
                        flowState: "待处理",
                        presentNode: "提交申请"
                    }, {
                        num: "2",
                        flowName: "流程名称1",
                        taskName: "任务名称1",
                        creater: "项目经理",
                        createTime: "2017-06-05 14:00",
                        startTime: "2017-06-05 14:00",
                        flowState: "待处理",
                        presentNode: "提交申请"
                    }, {
                        num: "3",
                        flowName: "流程名称1",
                        taskName: "任务名称1",
                        creater: "项目经理",
                        createTime: "2017-06-05 14:00",
                        startTime: "2017-06-05 14:00",
                        flowState: "待处理",
                        presentNode: "提交申请"
                    }, {
                        num: "4",
                        flowName: "流程名称1",
                        taskName: "任务名称1",
                        creater: "项目经理",
                        createTime: "2017-06-05 14:00",
                        startTime: "2017-06-05 14:00",
                        flowState: "待处理",
                        presentNode: "提交申请"
                    }]
                }
                //表格初始化
                i18nService.setCurrentLang("zh-cn");
                $scope.gridOptions = {
                    enableColumnResizing: true,
                    rowHeight: 40,
                    enableCellEdit:true,
                    paginationPageSizes: [10, 15, 20], //每页显示个数可选项
                    enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
                    enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
                    columnDefs: [{
                            field: 'num',
                            displayName: 'ID',
                            width: '10%',
                            editableCellTemplate: 'ui-grid/dropdownEditor',
                            editDropdownRowEntityOptionsArrayPath: 'foo.bar[0].options', 
                            editDropdownIdLabel: 'value',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "flowName",
                            displayName: '流程名称',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                            cellTemplate: '<div><input type="text" ng-model="row.entity.flowName"></div>',
                        },
                        {
                            field: "taskName",
                            displayName: '任务名称',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "creater",
                            displayName: '创建人',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "createTime",
                            displayName: '创建时间',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "startTime",
                            displayName: '开始时间',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "flowState",
                            displayName: '流程状态',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "presentNode",
                            displayName: '当前节点',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "action",
                            displayName: '操作处理',
                            cellTemplate: '<div class="glyBtn"><span class="glyphicon glyphicon-eye-open icon-blue1" ui-sref="flowcenter.showflow({leftnav:4})"></span><span class="glyphicon glyphicon-check icon-blue1"></span><span class="glyphicon glyphicon-indent-left icon-blue1"></span></div>',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        }
                    ],
                    data: $scope.data.lists
                };
                $scope.log=function(){
                    console.log($scope.data.lists[0]);
                }
            })
})