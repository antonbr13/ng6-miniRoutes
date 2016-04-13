(function () {

angular.module('miniRouting')

   .controller('productsCtrl', function($stateParams, productsService) {

      var vm = this;

      if($stateParams.id === 'shoes') {
         vm.productData = productsService.shoeData;
      }
      else if($stateParams.id === 'socks') {
         vm.productData = productsService.sockData;
      }


      vm.test = "the test for data binding with controllerAs worked on the product view";

   });







}());
