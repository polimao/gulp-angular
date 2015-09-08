(function() {
  'use strict';

  angular
      .module('gulpAugular')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': '强大的HTML web增强版!',
        'logo': 'angular.png'
      },
      // {
      //   'title': 'BrowserSync',
      //   'url': 'http://browsersync.io/',
      //   'description': 'Time-saving synchronised browser testing.',
      //   'logo': 'browsersync.png'
      // },
      {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': '自动化构建工具.',
        'logo': 'gulp.png'
      },
      // {
      //   'title': 'Jasmine',
      //   'url': 'http://jasmine.github.io/',
      //   'description': 'Behavior-Driven JavaScript.',
      //   'logo': 'jasmine.png'
      // },
      // {
      //   'title': 'Karma',
      //   'url': 'http://karma-runner.github.io/',
      //   'description': 'Spectacular Test Runner for JavaScript.',
      //   'logo': 'karma.png'
      // },
      // {
      //   'title': 'Protractor',
      //   'url': 'https://github.com/angular/protractor',
      //   'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
      //   'logo': 'protractor.png'
      // },
      {
        'title': 'Bootstrap',
        'url': 'http://getbootstrap.com/',
        'description': 'Bootstrap 非常受欢迎的 HTML, CSS, 和 JS 开发响应式框架, 首适配移动WEB.',
        'logo': 'bootstrap.png'
      },
      {
        'title': 'Angular UI Bootstrap',
        'url': 'http://angular-ui.github.io/bootstrap/',
        'description': '来自AngularUI团队为AngularJs纯打造的Bootstrap组件.',
        'logo': 'ui-bootstrap.png'
      },
      // {
      //   'title': 'Sass (Node)',
      //   'url': 'https://github.com/sass/node-sass',
      //   'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
      //   'logo': 'node-sass.png'
      // }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
