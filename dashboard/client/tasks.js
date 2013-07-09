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