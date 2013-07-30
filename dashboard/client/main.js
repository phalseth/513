Meteor.Router.add({
  '/': 'home_page',
  '/events': 'events_page',
  '/events/add': 'add_event',
  '/events/save': function(){
  	console.log("this.params",this.params);
  	return 'events_page';
  },
  '/contacts': 'contacts_page',
  '/contacts/add': 'add_contact',
  '/contacts/save': function(){
    Dashboard['pete'] = Dashboard['pete'] + 1;
  	console.log("pete",Dashboard['pete']);
  	return 'contacts_page';
  },
  '/tasks': 'tasks_page',
  '/tasks/add': 'add_task',
  '/tasks/save': function(){
  	console.log("this.params",this.params);
  	return 'tasks_page';
  },
  '*': '404_page'
});

Meteor.Router.filters({
  'checkLoggedIn': function(page) {
    if (Meteor.loggingIn()) {
      return 'loading';
    } else if (Meteor.user()) {
      return page;
    } else {
      return 'home_page';
    }
  }
});

//Meteor.Router.filter('checkLoggedIn', {except: 'home_page',});