(function () {

   angular.module('miniRouting', ['ui.router'])

      .config(function($stateProvider, $urlRouterProvider){

         $stateProvider
            .state('home', {
               url          : '/',
               controller   : 'homeCtrl',
               controllerAs : 'home',
               templateUrl  : 'js/home/homeTmpl.html'
            })

            .state('settings', {
               url          : '/settings',
               controller   : 'settingsCtrl',
               controllerAs : 'settings',
               templateUrl  : 'js/settings/settingsTmpl.html'
            })

            .state('products', {
               url          : '/products/:id',
               controller   : 'productsCtrl',
               controllerAs : 'products',
               templateUrl  : 'js/products/productsTmpl.html'
            });

         $urlRouterProvider
            .otherwise('/');
      });







}());
