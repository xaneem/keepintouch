Template.home.helpers({
  contacts: function() {
    return People.find({});
  },
   uname: function() {
    return Meteor.user().username ;

  }
});

Template.home.events({

  'click #logout' : function (event){
    console.log (event);
    Meteor.logout(function(error){
        if(error){
          alert(error);
             }else{
          
          Router.go('/login');
        }
      });
  },

  'click .delete-contact' : function(event) {
    Meteor.call("deleteContact",this._id);
  },


  'keyup #contact-search' : function(event) {
    Session.set("contact-search", event.target.value);
  },

  'keyup #contact-name' : function(event,template) {
    
   // console.log(event.target.value.length);
    if(event.target.value !="")
     template.find("#contact-name").classList.remove("input-error");
    else
     template.find("#contact-name").classList.add("input-error");

  },
  
  'input #contact-name' :function(event,template){
   
    if(event.target.value.length==50)
     template.find("#contact-name").classList.add("input-error");
    else
     template.find("#contact-name").classList.remove("input-error");

  },

  'blur #contact-name' : function(event,template){

    template.find("#contact-name").classList.remove("input-error");
  },


  'submit .new-contact' : function(event,template) {

    event.preventDefault();

    var name = event.target.contactName.value;
    var phone = event.target.contactPhone.value;
    var email = event.target.contactEmail.value;

    if (name==="") 
    {
     // console.log(template.find("#contact-name"));

      template.find("#contact-name").classList.add("input-error");
      
    }
    else {

    Meteor.call("addContact",name,phone,email);

    event.target.contactName.value = "";
    event.target.contactPhone.value = "";
    event.target.contactEmail.value = "";
  }
  }

});

