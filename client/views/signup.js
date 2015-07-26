Template.signup.events({
	'submit #signup-form': function(event, template){
		event.preventDefault();

		var userEmail = template.find('#signup-email').value,
			userName = template.find('#signup-username').value
			password = template.find('#signup-password').value;

			Accounts.createUser({username: userName,
        email:    userEmail,
        password: password}, function(error){
				if(error){
					alert(error);
					template.find('#signup-username').addClass('input-error');
					template.find('#signup-password').addClass('input-error');
				}else{
					Router.go('/');
				}
			});

		return false;
	}

});