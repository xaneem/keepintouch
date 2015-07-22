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

  'keyup #contact-search' : function(event) {
    Session.set("contact-search", event.target.value);
  },

  'submit.new-contact' : function(event) {

    event.preventDefault();

    var name = event.target.contactName.value;
    var phone = event.target.contactPhone.value;
    var email = event.target.contactEmail.value;

    People.insert({
      name: name,
      phone:phone,
      email:email
    });

    event.target.contactName.value = "";
    event.target.contactPhone.value = "";
    event.target.contactEmail.value = "";
  }

});