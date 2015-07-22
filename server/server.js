// Fill some data if the database is empty.

if(People.find().count() === 0) {
  Meteor.startup(function() {
    People.insert({
      name: 'John Doe',
      phone: '+91919191919191',
      email: 'john@example.com'
    });
  });
}



Meteor.methods({
	addContact: function (name,phone,email) {


    People.insert({
      name: name,
      phone:phone,
      email:email
    });

	},

	deleteContact: function(contactId){
	People.remove(contactId);
	}

});