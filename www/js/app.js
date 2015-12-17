
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])


.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}])


.run(function($ionicPlatform,$localstorage) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive

  // Each tab has its own nav history stack:

  .state('timeline', {
    url: '/timeline',
    templateUrl: 'templates/home.html',
    controller: 'timelineCtrl'
  })
  .state('duas', {
    url: '/duas',
    templateUrl: 'templates/duas.html',
    controller: 'duasCtrl'
  })
  .state('food', {
    url: '/food',
    templateUrl: 'templates/food.html',
    controller: 'foodCtrl'
  })
  .state('exercises', {
    url: '/exercises',
    templateUrl: 'templates/exercises.html',
    controller: 'exercisesCtrl'
  })
  .state('mymenu', {
    url: '/mymenu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })
  .state('faqs', {
    url: '/faqs',
    templateUrl: 'templates/faqs.html',
    controller: 'faqsCtrl'
  })
  .state('tips', {
    url: '/tips',
    templateUrl: 'templates/tips.html',
    controller: 'tipsCtrl'
  })
  .state('tracker', {
    url: '/tracker',
    templateUrl: 'templates/tracker.html',
    controller: 'trackerCtrl'
  })
  .state('doctor', {
    url: '/doctor',
    templateUrl: 'templates/doctor.html',
    controller: 'doctorCtrl'
  })
  .state('choose', {
    url: '/choose',
    templateUrl: 'templates/choose.html',
    controller: 'chooseCtrl'
  })
  .state('forgot-password', {
    url: '/forgot-password',
    templateUrl: 'templates/forgot-password.html',
    controller: 'fpCtrl'
  })
  .state('weight', {
    url: '/weight',
    templateUrl: 'templates/weight.html',
    controller: 'wCtrl'
  })
  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});




