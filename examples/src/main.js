var libPath = '../../node_modules/';

require.config({
  baseUrl: 'js',

  paths: {
    'angular': libPath + 'angular/angular.min',
    'angular-animate': libPath + 'angular-animate/angular-animate.min',
    'angular-sanitize': libPath + 'angular-sanitize/angular-sanitize.min',
    'ui-router': libPath + 'angular-ui-router/release/angular-ui-router.min'
  },

  shim: {
    'angular': {
      exports: 'angular'
    },

    'angular-animate': {
      deps: ['angular'],
      exports: 'angular-animate'
    },

    'angular-sanitize': {
      deps: ['angular'],
      exports: 'angular-sanitize'
    },

    'ui-router': {
      deps: ['angular'],
      exports: 'ui-router'
    }
  }
});

require([
  'angular',
  'angular-animate',
  'angular-sanitize',
  'ui-router',
  'app'
], function (angular) {
  angular.bootstrap(document.body, ['myApp']);
});
