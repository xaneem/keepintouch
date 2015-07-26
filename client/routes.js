Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name: 'home', controller: 'MainController'});

Router.route('/login', 'login');
Router.route('/signup', 'signup');

MainController = RouteController.extend({
  action: function() {
  	if(Meteor.userId() != null)
  	  	this.render('home');
  	else
  		this.render('login');
  }
});

