var employeeApp = angular.module("EmployeeApp",[]);
  employeeApp.controller("empCtrl",function($scope){
    $scope.query = {}
    $scope.queryBy = '$'
    $scope.employees = [
      {
        "name" : "abc",
        "username" : "abc",
        "emailid" : "abc@gmail.com"
      },
      {
        "name" : "xyz",
        "username" : "xyz",
        "emailid" : "xyz@gmail.com"
      }
    ];
    $scope.orderProp="name";                
  });
