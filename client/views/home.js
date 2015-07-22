Template.navbar.helpers({
  name: function() {
    return "John Doe";
  }
});

Template.home.helpers({
  name: function() {
    return "John Doe";
  },

  contacts: function() {
    return People.find({});
  }

});

Template.home.events({

  'click .delete-contact' : function(event) {
    Meteor.call("deleteContact",this._id);
  },


  'keyup #contact-search' : function(event) {
    Session.set("contact-search", event.target.value);
  },

  'submit .new-contact' : function(event) {

    event.preventDefault();

    var name = event.target.contactName.value;
    var phone = event.target.contactPhone.value;
    var email = event.target.contactEmail.value;

    Meteor.call("addContact",name,phone,email);

    event.target.contactName.value = "";
    event.target.contactPhone.value = "";
    event.target.contactEmail.value = "";
  }

});