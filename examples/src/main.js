var libPath = '../../node_modules/';

require.config({
  baseUrl: 'js',

  paths: {
    'bezier': libPath + 'bezier-js/bezier',
    'angular': libPath + 'angular/angular.min',
    'angular-animate': libPath + 'angular-animate/angular-animate.min',
    'angular-sanitize': libPath + 'angular-sanitize/angular-sanitize.min',
    'ui-router': libPath + 'angular-ui-router/release/angular-ui-router.min'
  },

  shim: {
    "bezier": {
      exports: 'bezier'
    },

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
    },

    'app': {
      deps: ['angular-animate', 'angular-sanitize', 'ui-router'],
      exports: 'app'
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
  angular.bootstrap(window.document, ['myApp']);
});
