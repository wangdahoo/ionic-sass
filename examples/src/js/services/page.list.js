define([], function () {
  console.info('PageList Service');

  var pages = [
    {
      'name': 'buttons',
      'serf': 'pageButtons'
    }
  ];

  return {
    all: function () {
      return pages;
    }
  }

});
