define(['angular', 'router'], function() {
    var app = angular.module("myModule", ['ui.router', 'ui.bootstrap','ngAnimate','ui.tree','ui.grid','ui.grid.selection','ui.grid.edit',
            'ui.grid.exporter','ui.grid.pagination','ui.grid.resizeColumns','ui.grid.autoResize'])
    app.config(function($controllerProvider, $compileProvider, $filterProvider, $provide) {
            app.register = {
                //得到$controllerProvider的引用
                controller: $controllerProvider.register,
                //同样的，这里也可以保存directive／filter／service的引用
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                service: $provide.service
            };
        })
        .config(['$stateProvider', '$urlRouterProvider','$controllerProvider', function($stateProvider, $urlRouterProvider,$controllerProvider) {
            $urlRouterProvider.otherwise('index');
            $stateProvider
                /*首页*/
                .state("index", {
                    url: "/index",
                    views:{
                        '':{
                            templateUrl:'../tpls/home/main.html'
                        },
                        'main@index':{
                            templateUrl:'../tpls/home/index.html'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/home/indexCtrl.js',
                                'js/controller/modal/modalCtrl.js',
                                'js/controller/modal/modalInstanceCtrl.js'                               
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                /*产品页*/
                .state("index.product",{
                    url:"/product",
                    views:{
                        'main@index':{
                            templateUrl:'../tpls/home/product.html'
                        }
                    }, 
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })
                /*测评页*/
                .state("index.evaluation",{
                    url:"/evaluation",
                    views:{
                        'main@index':{
                            templateUrl:'../tpls/home/evaluation.html'
                        }
                    }, 
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })  
                /*测评申请*/
                .state("index.application",{
                    url:"/application",
                    views:{
                        'main@index':{
                            templateUrl:'../tpls/home/application.html'
                        }
                    }, 
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })
                /*购物车*/
                .state("index.shopcart",{
                    url:"/shopcart",
                    views:{
                        'main@index':{
                            templateUrl:'../tpls/home/shopcart.html'
                        }
                    }, 
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })
                /*控制台起始*/
                .state("console",{
                    url:"/console",
                    views:{
                        '':{
                            templateUrl:'../tpls/admin/index.html'
                        },
                        'main@console':{
                            templateUrl:'../tpls/admin/consoleCenter.html'
                        }
                    },                  
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/consoleCtrl.js',
                                'js/controller/admin/consoleCenterCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })
                /*流程中心起*/
                .state("flowcenter",{
                    url:"/flowcenter/:leftnav",
                    views:{
                        '':{
                            templateUrl:'../tpls/admin/index.html'
                        },
                        'main@flowcenter':{
                            templateUrl:'../tpls/admin/main.html'
                        },
                        'leftnav@flowcenter':{
                            templateUrl:'../tpls/admin/nav_flow.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/consoleCtrl.js',
                                'js/controller/modal/modalCtrl.js',
                                'js/controller/modal/modalInstanceCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                /*cnas流程*/
                .state("flowcenter.cnas",{
                    url:"/cnas",
                    views:{
                        'right@flowcenter':{
                            templateUrl:'../tpls/admin/main/main_cnas.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/cnasListCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                .state("flowcenter.createflow",{
                    url:"/createflow",
                    views:{
                        'right@flowcenter':{
                            templateUrl:'../tpls/admin/main/main_createflow.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/createflowCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                .state("flowcenter.showflow",{
                    url:"/showflow",
                    views:{
                        'right@flowcenter':{
                            templateUrl:'../tpls/admin/main/main_showflow.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/createflowCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                /*待处理流程*/
                .state("flowcenter.pending",{
                    url:"/pending",
                    views:{
                        'right@flowcenter':{
                            templateUrl:'../tpls/admin/main/main_pending.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/pendingCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                /*已处理流程*/
                .state("flowcenter.processed",{
                    url:"/processed",
                    views:{
                        'right@flowcenter':{
                            templateUrl:'../tpls/admin/main/main_processed.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/processedCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                /*已发起流程*/
                .state("flowcenter.launched",{
                    url:"/launched",
                    views:{
                        'right@flowcenter':{
                            templateUrl:'../tpls/admin/main/main_launched.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/launchedCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })
                /*项目组管理*/
                .state("flowcenter.projectgroup",{
                    url:"/projectgroup",
                    views:{
                        'right@flowcenter':{
                            templateUrl:'../tpls/admin/main/main_projectgroup.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })   
                /*流程中心终*/ 
                /*个人中心起*/
                .state("personalcenter",{
                    url:"/personalcenter/:leftnav",
                    views:{
                        '':{
                            templateUrl:'../tpls/admin/index.html'
                        },
                        'main@personalcenter':{
                            templateUrl:'../tpls/admin/main.html'
                        },
                        'leftnav@personalcenter':{
                            templateUrl:'../tpls/admin/nav_personal.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/consoleCtrl.js',
                                'js/controller/modal/modalCtrl.js',
                                'js/controller/modal/modalInstanceCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                /*个人资料*/
                .state("personalcenter.info",{
                    url:"/info",
                    views:{
                        'right@personalcenter':{
                            templateUrl:'../tpls/admin/main/main_personalInfo.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                .state("personalcenter.editInfo",{
                    url:"/editInfo",
                    views:{
                        'right@personalcenter':{
                            templateUrl:'../tpls/admin/main/main_editInfo.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })
                /*我的订单*/
                .state("personalcenter.myorder",{
                    url:"/myorder",
                    views:{
                        'right@personalcenter':{
                            templateUrl:'../tpls/admin/main/main_myorder.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/myorderCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })                
                /*订单详情*/
                .state("personalcenter.myorderdetail",{
                    url:"/myorderdetail",
                    views:{
                        'right@personalcenter':{
                            templateUrl:'../tpls/admin/main/main_myorder_detail.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/myorderCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })  
                 /*我的申报*/
                .state("personalcenter.declaration",{
                    url:"/declaration",
                    views:{
                        'right@personalcenter':{
                            templateUrl:'../tpls/admin/main/main_declaration.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/declarationCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
//              申报详情
                .state("personalcenter.declarationDetail",{
                    url:"/declarationDetail",
                    views:{
                        'right@personalcenter':{
                            templateUrl:'../tpls/admin/main/main_declaration_detail.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/declarationCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                /*发票管理*/
                .state("personalcenter.invoice",{
                    url:"/invoice",
                    views:{
                        'right@personalcenter':{
                            templateUrl:'../tpls/admin/main/main_invoice.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([

                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })
                /*申请发票1*/
                .state("personalcenter.applyinvoice",{
                    url:"/applyinvoice",
                    views:{
                        'right@personalcenter':{
                            templateUrl:'../tpls/admin/main/main_applyinvoice1.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([

                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })  
                /*申请发票2*/
                .state("personalcenter.applyinvoice.step2",{
                    url:"/step2",
                    views:{
                        'right@personalcenter':{
                            templateUrl:'../tpls/admin/main/main_applyinvoice2.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([

                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                /*申请发票3*/
                .state("personalcenter.applyinvoice.step3",{
                    url:"/step3",
                    views:{
                        'right@personalcenter':{
                            templateUrl:'../tpls/admin/main/main_applyinvoice3.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([

                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                /*申请发票3*/
                .state("personalcenter.applyinvoice.step4",{
                    url:"/step4",
                    views:{
                        'right@personalcenter':{
                            templateUrl:'../tpls/admin/main/main_applyinvoice4.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([

                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })                 
        }])
    return app;
})
