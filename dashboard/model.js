ContactsModel = new Meteor.Collection("contacts");
EventsModel = new Meteor.Collection("events");
TasksModel = new Meteor.Collection("tasks");


Dashboard.Contacts = {
    create : function(contactObject){
        var _id = ContactsModel.insert(contactObject);
        return _id;
    },
    read : function(_id){
        return ContactsModel.findOne({"_id" : _id});
    },
    findByEmail : function(email){
        return ContactsModel.findOne({"email" :email});
    },
    update : function(selector,modifier,options){
    	if(options != null){
    		ContactsModel.update(selector,modifier,options);	
    	} else {
    		ContactsModel.update(selector,modifier);
    	}
    },
    delete : function(_id){
        ContactsModel.remove({"_id" : _id});
    }
}


Dashboard.Tasks = {
    create : function(contactObject){
        TasksModel.insert(contactObject);
    },
    read : function(_id){
        return TasksModel.findOne({"_id" : _id});
    },
    update : function(_id,updateObject){
        TasksModel.update({"_id" : _id},updateObject);
    },
    delete : function(_id){
        TasksModel.remove({"_id" : _id});
    }
}


