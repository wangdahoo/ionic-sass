define([], function () {
  console.info('PageList Service');

  var pages = [
    {
      'name': 'buttons',
      'serf': 'pageButtons'
    },
    {
      'name': 'Forms',
      'serf': 'pageForms'
    },
    {
      'name': 'List',
      'serf': 'pageLists'
    },
  ];

  return {
    all: function () {
      return pages;
    }
  }

});
