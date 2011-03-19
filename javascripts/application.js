//requires
dojo.require('dojox.grid.EnhancedGrid');
dojo.require('dojox.grid.enhanced.plugins.DnD');
dojo.require('dojox.grid.enhanced.plugins.Menu');
dojo.require('dojox.grid.enhanced.plugins.NestedSorting');
dojo.require('dojox.grid.enhanced.plugins.IndirectSelection');
dojo.require('dojox.data.CsvStore');
dojo.require('dijit.form.Button');
dojo.require('dojo.parser');

//when resources are loaded
dojo.ready(function() {
  //layout
  layout = [{
    defaultCell: { width: 8, editable: false, type: dojox.grid.cells._Widget },
    rows:
    [
      { field: 'Genre', width: '10' },
      { field: 'Artist', width: '15' },
      { field: 'Year', width: '6' },
      { field: 'Album', width: '28' },
      { field: 'Name', width: '22' }
    ]}
  ];
  //get data store
  csvStore1 = new dojox.data.CsvStore({ id:'csvStore1', url:'grid-demo-data.csv' });
  //parse!
  dojo.parser.parse();
});

