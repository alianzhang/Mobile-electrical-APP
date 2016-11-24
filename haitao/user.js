define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var baas =require("$UI/demo/baas/baas");


	var Model = function() {
		this.callParent();
		this.userID;
		this.loadUser = true;
       
	};	
    Model.prototype.modelLoad = function(event) {
		this.userID = "user1";
		this.comp('userData').setFilter("filter1", "fID = '" + this.userID +"'");
		
	};
   Model.prototype.loadUserData = function() {
        if (this.loadUser){
            var userData = this.comp("userData");
            userData.refreshData();
            if (userData.getCount() === 0) {
                userData.newData({
                    defaultValues : [{
                        "fID" : this.userID,
                        "fName" : "新用户"
                    
                    }]
                
                })
            
            }
            this.loadUser = false;
        }
 
};
 
  
	Model.prototype.ownContentActive = function(event) {
	        this.loadUserData();
		
	};
	

	
	return Model;
});