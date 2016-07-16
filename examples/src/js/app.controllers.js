define(['app.services'], function () {
  console.info('App Controllers Load!');

  return angular
    .module('appControllers', ['appServices']);
});
