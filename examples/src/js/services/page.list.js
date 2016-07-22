define([], function () {
  console.info('PageList Service');

  var pages = [
    {
      'name': 'Buttons',
      'serf': 'pageButtons'
    },
    {
      'name': 'Forms',
      'serf': 'pageForms'
    },
    {
      'name': 'Lists',
      'serf': 'pageLists'
    },
    {
      'name': 'Inputs',
      'serf': 'pageInputs'
    },
  ];

  return {
    all: function () {
      return pages;
    }
  }

});
