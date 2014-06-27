'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
    $scope.projects=[
     {
       "name":"Bookstore",
	   "id":1,
	   "desc":"Webdesign project",
	   "coordinators":["shivu","sayeesh","sheshadri"]
     },
     {  
    	 "name":"SMS Alert student cab",
    	 "id":2,
    	 "desc":"This is an android application",
    	 "coordinators":["sam","ravi","masroor"]
    	 
     },
     {
       "name":"Time table generation",
  	   "id":3,
  	   "desc":"C# project",
  	   "coordinators":["pavan","priyanka","vishrutha"]
       }
  	 
 ];
 
 $scope.navigateUrl=function(id)
	{
			

			window.location.assign("/#view2/" + id);
			
			

	};
 
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {
    $scope.message = "hello";
    $scope.projectDetails=[
         {
    	    "status": "done",
    	    "proID":1,
    	    "proName":"Bookstore",
    	    
    	    "task": {
    	        "taskName": "Create UI",
    	        "desc": "Create UI-use html,CSS,JSS",
    	        "assignTo":"Sampath",
    	        "createdAt":"1/1/2013",
       	        "dueDate": "31/12/2013",
       	        "closedOn": "30/12/2013",
       	        "priority": "low"
    	            }
       },
       
       {
   	    "status": "done",
   	     "proID":2, 
   	     "proName":"SMS Alert student cab",
   	    
   	    "task": {
   	        "taskName": "Front End",
   	        "desc": "Abcdefgh",
   	        "assignTo":"Shivu",
   	     	"createdAt": "1/1/2013",
   	        "dueDate": "31/12/2013",
   	        "closedOn": "30/12/2013",
   	        "priority": "low"
   	            }
      },  
                    
       {
    	    "status": "done",
    	    "proID":3,
    	    "proName":"Time table generation",
    	    
    	    "task": {
    	        "taskName": "Back End",
    	        "desc": "This is task of back end ",
    	        "assignTo":"Sayeesh",    	     	   		
    	        "createdAt": "1/1/2013",
       	        "dueDate": "31/12/2013",
       	        "closedOn": "30/12/2013",
       	        "priority": "low"
    	            }
       }
       
                  
                  
                  
                  ];
  }]);










