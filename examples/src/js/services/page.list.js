define([], function () {
  console.info('PageList Service');

  var pages = [
    {
      'name': 'buttons',
      'serf': 'pageHeader'
    }
  ];

  return {
    all: function () {
      return pages;
    }
  }

});
