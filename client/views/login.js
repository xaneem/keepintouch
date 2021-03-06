Template.login.events({
	'click #signUp':function(event){
		Router.go('/signup');
	},
	'submit #login-form': function(event, template){
		event.preventDefault();

		var username = template.find('#login-username').value,
			password = template.find('#login-password').value;

			Meteor.loginWithPassword(username, password, function(error){
				if(error){
					alert(error);
					template.find('#login-username').addClass('input-error');
					template.find('#login-password').addClass('input-error');
				}else{
					
					Router.go('/');
				}
			});

		return false;
	}

});