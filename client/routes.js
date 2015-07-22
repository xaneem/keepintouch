Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name: 'home', controller: 'MainController'});

MainController = RouteController.extend({
	subscriptions: function() {
	  return Meteor.subscribe('people');
	},

  action: function() {
  	  this.render('home');
  }
});