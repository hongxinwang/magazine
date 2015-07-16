'use strict';
;(function(root,factory){
    var angular=window.angular;
    factory.call(root,angular);
}(this,function(angular){
    //定义一个主模块
    angular.module('app',['ngRoute','ngTouch','appControllers','appServices','appDirectives']).
        config(['$routeProvider','$provide','$locationProvider',config]).
        run(['$templateCache',templateCache]);
    //缓存模板
    function templateCache($templateCache){
        $templateCache.put('partials/select.html');
        $templateCache.put('partials/music.html');
        $templateCache.put('partials/text.html');
        $templateCache.put('partials/make.html');
    }
    //路由配置
    function config($routeProvider,$provide,$locationProvider){
        $routeProvider.
            when('/',{
                templateUrl:'partials/select.html',
                controller:'selectController'
            }).
            when('/make',{
                templateUrl:'partials/make.html',
                controller:'makeController'
            }).
            when('/make/:random',{
                templateUrl:'partials/make.html',
                controller:'makeController'
            }).
            when('/music',{
                templateUrl:'partials/music.html',
                controller:'musicController'
            }).
            when('/text',{
                templateUrl:'partials/text.html',
                controller:'textController'
            }).
            when('/lottery',{
                templateUrl:'partials/lottery.html',
                controller:'lotteryController'
            }).
            when('/hyperLink',{
                templateUrl:'partials/hyperLink.html',
                controller:'hyperLinkController'
            }).
            when('/preview',{
                templateUrl:'partials/preview.html',
                controller:'previewController'
            }).
            when('/wechat',{
                templateUrl:'partials/wechat.html',
                controller:'wechatController'
            }).
            when('/wechat/-shareImg_btn-/:any',{
                templateUrl:'partials/wechat.html',
                controller:'wechatController'
            }).
            when('/-back_btn-',{
                templateUrl:'partials/select.html',
                controller:'selectController'
            }).
            when('/shape',{
                templateUrl:'partials/shape.html',
                controller:'shapeController'
            }).
            when('/shapes',{
                templateUrl:'partials/shapes.html',
                controller:'shapesController'
            }).
            otherwise({redirectTo:'/'}); 
    }
}));