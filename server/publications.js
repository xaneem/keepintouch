Meteor.publish("people", function (searchString) {
  
  if (searchString == null)
    searchString = '';
  
  return People.find({
    	'name' : { '$regex' : '.*' + searchString || '' + '.*', '$options' : 'i' },
    },{
    	sort: {name: 1}
    });
});
