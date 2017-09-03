var app = angular.module('kaifanla', ['ionic']);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('kflStart',{
        url:'/kflStart',
        templateUrl:'tpl/start.html'
    }).state('kflMain',{
        url:'/kflMain',
        templateUrl:'tpl/main.html'
    }).state('kflDetail',{
        url:'/kflDetail',
        templateUrl:'tpl/detail.html'
    }).state('kflOrder',{
        url:'/kflOrder',
        templateUrl:'tpl/order.html'
    }).state('kflMyOrder',{
        url:'/kflMyOrder',
        templateUrl:'tpl/myorder.html'
    });
    $urlRouterProvider.otherwise('/kflStart')
})
app.controller('parentCtrl',['$scope','$state',function($scope,$state){
    $scope.jump=function(desPath,arg){
        $state.go(desPath,arg);
    }

}]);


