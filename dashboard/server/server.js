Meteor.startup(function () {
   // code to run on server at startup
});


Meteor.Router.add({
  '/contacts/saver': function(){
	try {
	  	var body = this.request["body"];
	  	var responseJSON = "";
	  	
	  	var contactObj = {};
	  	contactObj['full_name'] =  (typeof body["fullname"]  != 'undefined' && body["fullname"] != "") ? body["fullname"] : null;
		contactObj['email'] =  (typeof body["email"]  != 'undefined' && body['email'] != "") ? body['email'] : null;
		contactObj['send_newsletter'] = (typeof body["newsletter"]  != 'undefined') ? true : false;
		contactObj['add_to_prayerlist'] = (typeof body["prayerlist"]  != 'undefined') ? true : false;
		contactObj['donation'] = (typeof body["donation"]  != 'undefined') ? true : false;
	  	
	  	if(contactObj['email']){
	  		var existingContact = Dashboard.Contacts.findByEmail(contactObj['email']);
	  		if(typeof existingContact != 'undefined' && existingContact != null){
	  		  	var _id = existingContact._id;
	  		  	contactObj["date_updated"] = moment();
	  			contactObj["updateResult"] = Dashboard.Contacts.update({"_id":_id},{"$set":contactObj});
	  			contactObj["updated_existing"] = true;
	  		} else {
	  			contactObj["date_created"] = moment();
	  			var _id = Dashboard.Contacts.create(contactObj);
	  			contactObj["created_new"] = true;
	  		}
	  		contactObj["success"] = true;
	  		responseJSON = EJSON.stringify(contactObj);
	  	} else {
	  		contactObj["success"] = false;
	  		contactObj["error"] = "email address not defined";
	  		responseJSON = EJSON.stringify(contactObj);
	  	}

  	} catch(err) {
  		responseJSON = {"success":false,"error":err.message}
  	}
  	return responseJSON;
  }
});


