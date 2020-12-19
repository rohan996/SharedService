var employeeApp = angular.module("EmployeeApp",[]);
  employeeApp.controller("empCtrl",function($scope){
    $scope.query = {}
    $scope.queryBy = '$'
    $scope.employees = [
      {
        "name" : "abc",
        "username" : "abc",
        "email id" : "abc@gmail.com"
      },
      {
        "name" : "xyz",
        "username" : "xyz",
        "email id" : "xyz@gmail.com"
      }
    ];
    $scope.orderProp="name";                
  });
