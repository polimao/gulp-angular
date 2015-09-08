(function() {
    'use strict';

    angular
        .module('gulpAugular')
        .controller('testPhpController', testPhpController);

    /** @ngInject */
    function testPhpController($timeout, webDevTec, toastr, phpTestService) {
        var vm = this;

        vm.awesomeThings = [];
        vm.classAnimation = '';
        vm.creationDate = 1441213672622;
        vm.showToastr = showToastr;

        activate();

        function activate() {
            getWebDevTec();
            $timeout(function() {
                vm.classAnimation = 'rubberBand';
            }, 4000);
        }

        function showToastr() {
            // toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
            console.log(123);
            phpTestService.index(1,10).then(function(data){
                vm.test = data;
                alert(data);
                return vm.test;
            });
            vm.classAnimation = '';
        }

        function getWebDevTec() {
            vm.awesomeThings = webDevTec.getTec();

            angular.forEach(vm.awesomeThings, function(awesomeThing) {
                awesomeThing.rank = Math.random();
            });
        }
    }
})();
