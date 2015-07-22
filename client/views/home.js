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

    var people = [];

    var person = {
        name: "John Doe",
        phone : "+91-9811-245-353",
        email : "johndoe@example.com"
      };

    for (var i = 0; i < 50; i++) {
      people.push(person);
    };
    return people;
  }

});

Template.contact.events({
  'click.user-icon': function(event, template) {
    alert("Hello. I'm "+template.data.name);
  }
});