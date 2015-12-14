angular.module('starter.controllers', [])

.controller('timelineCtrl', function($scope,$state) {


    $scope.mymenu = function(){
        $state.go('mymenu');
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
    $scope.weight = function(){
        $state.go('weight');
    }
    $scope.faqs = function(){
        $state.go('faqs');
    }
    $scope.tips = function(){
        $state.go('tips');
    }
    $scope.tracker = function(){
        $state.go('tracker');
    }
    $scope.doctor = function(){
        $state.go('doctor');
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
    $scope.weight = function(){
        $state.go('weight');
    }
    $scope.faqs = function(){
        $state.go('faqs');
    }
    $scope.tips = function(){
        $state.go('tips');
    }
    $scope.tracker = function(){
        $state.go('tracker');
    }
    $scope.doctor = function(){
        $state.go('doctor');
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
.controller('doctorCtrl', function($scope, $state) {


    $scope.timeline = function(){
        $state.go('timeline');
    }


    $scope.mymenu = function(){
        $state.go('mymenu');
    }



})
.controller('tipsCtrl', function($scope, $state) {


    $scope.timeline = function(){
        $state.go('timeline');
    }


    $scope.mymenu = function(){
        $state.go('mymenu');
    }



})
.controller('trackerCtrl', function($scope, $state) {


    $scope.timeline = function(){
        $state.go('timeline');
    }


    $scope.mymenu = function(){
        $state.go('mymenu');
    }



})
.controller('chooseCtrl', function($scope, $state) {


    $scope.timeline = function(){
        $state.go('timeline');
    }


    $scope.mymenu = function(){
        $state.go('mymenu');
    }

 $scope.opts = {
    val1: false,
    val2: false,
    val3: false,
    val4: false,
    val5: false,
    val6: false,
    val7: false,
    val8: false
  };
  
  $scope.computedTotal = function () {
    var opts = $scope.opts;
    var total = (opts.val1 ? 93 : 0) + (opts.val2 ? 92 : 0) + (opts.val3 ? 103 : 0) + (opts.val4 ? 70 : 0) + (opts.val5 ? 178 : 0) + (opts.val6 ? 124 : 0) + (opts.val7 ? 77 : 0) + (opts.val8 ? 30 : 0);
    
     return total;
  }


})


.controller('foodCtrl', function($scope, $state) {


    $scope.timeline = function(){
        $state.go('timeline');
    }


    $scope.mymenu = function(){
        $state.go('mymenu');
    }


    $scope.choose = function() {
        $state.go('choose');
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
.controller('faqsCtrl', function($scope, $state) {


    $scope.timeline = function(){
        $state.go('timeline');
    }


    $scope.mymenu = function(){
        $state.go('mymenu');
    }



})


.controller('loginCtrl', function($scope, $state) {


    $scope.timeline = function(){
        $state.go('timeline');
    }


})
.controller('fpCtrl', function($scope, $state) {

    $scope.login = function(){
        $state.go('login');
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


