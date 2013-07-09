Dashboard.Contacts = {
    create : function(contactObject){
        ContactsModel.insert(contactObject);
    },
    read : function(_id){
        return ContactsModel.findOne({"_id" : _id});
    },
    update : function(_id,updateObject){
        ContactsModel.update({"_id" : _id},updateObject);
    },
    delete : function(_id){
        ContactsModel.remove({"_id" : _id});
    }
}