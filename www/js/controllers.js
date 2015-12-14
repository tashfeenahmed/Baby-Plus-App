angular.module('starter.controllers', [])

.controller('timelineCtrl', function($scope,$state) {


    $scope.mymenu = function(){
        $state.go('mymenu');
    }
    $scope.duas = function(){
        $state.go('duas');
    }

var objToday = new Date(),
                weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
                dayOfWeek = weekday[objToday.getDay()],
                domEnder = new Array( 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th' ),
                dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder[objToday.getDate()] : objToday.getDate() + domEnder[parseFloat(("" + objToday.getDate()).substr(("" + objToday.getDate()).length - 1))],
                months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
                curMonth = months[objToday.getMonth()],
                curYear = objToday.getFullYear(),
                curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
                curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
                curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
                curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = dayOfWeek + ", the " + dayOfMonth + " of " + curMonth;


    $scope.today = today;


})



.controller('menuCtrl', function($scope, $state) {


    $scope.timeline = function() {
        $state.go('timeline');
    }
    $scope.duas = function() {
        $state.go('duas');
    }
    $scope.exercises = function() {
        $state.go('exercises');
    }
    $scope.food = function(){
        $state.go('food');
    }

})

.controller('duasCtrl', function($scope, $state) {


    $scope.timeline = function(){
        $state.go('timeline');
    }


    $scope.mymenu = function(){
        $state.go('mymenu');
    }



})


.controller('foodCtrl', function($scope, $state) {


    $scope.timeline = function(){
        $state.go('timeline');
    }


    $scope.mymenu = function(){
        $state.go('mymenu');
    }

})


.controller('exercisesCtrl', function($scope, $state) {


    $scope.timeline = function(){
        $state.go('timeline');
    }


    $scope.mymenu = function(){
        $state.go('mymenu');
    }



})

.controller('wCtrl', function($scope, $state) {

var weightshow = "N/A";

//Check if user is logged in
var userdata = JSON.parse(window.localStorage['myweight'] || '{}');
//Function to check if object is empty
function isEmpty(obj) {
    if (obj == null) return true;
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}
//Create a view route
 if(isEmpty(userdata) != true) {
   var weightshow = userdata;
 }
 else {
   var weightshow = "N/A";
 }

    $scope.timeline = function(){
        $state.go('timeline');
    }


    $scope.mymenu = function(){
        $state.go('mymenu');
    }



});


