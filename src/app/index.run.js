(function() {
  'use strict';

  angular
    .module('gulpAugular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('开始啦');
  }

})();
