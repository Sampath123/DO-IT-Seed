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
	
	var ModalDemoCtrl = function ($scope, $modal, $log) {

		  $scope.items = ['item1', 'item2', 'item3'];

		  $scope.open = function (size) {

		    var modalInstance = $modal.open({
		      templateUrl: 'createPro',
		      controller: ModalInstanceCtrl,
		      size: size,
		      resolve: {
		        projects: function () {
		          return $scope.projects;
		        }
		      }
		    });

		    modalInstance.result.then(function (selectedItem) {
		      $scope.selected = selectedItem;
		    }, function () {
		      $log.info('Modal dismissed at: ' + new Date());
		    });
		  };
		};

		// Please note that $modalInstance represents a modal window (instance) dependency.
		// It is not the same as the $modal service used above.

		var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

		  $scope.newProjects = {};
		 

		  $scope.ok = function () {
			  $modalInstance.close({'name': $scope.newProjects.name,"id":1,'desc': $scope.newProjects.desc,'coordinators':["shivu","sayeesh","sheshadri"]});
					 
			  };
			  
		     $scope.cancel = function () {
		    $modalInstance.dismiss('cancel');
		  };
		};

 
  }])
  .controller('MyCtrl2', ['$scope','$routeParams', function($scope,$routeParams) {
     $scope.projects=[
       {  
        
     	    "proID":1,
    	    "proName":"Bookstore",
    	    "proCoordinators":["shivu","sayeesh","sheshadri"],      	     
    	    "task": [
    	                   
    	      
                {
	   
                	 "isComplete":true,
                     "isPending": false,
                     "isClosed": false,
                  "taskName": "Create UI",
                  "desc": "Create UI-use html,CSS,JSS",
                  "assignTo":"Shivu",
                  "createdAt":"1/1/2013",
                 "dueDate": "31/12/2013",
                 "closedOn": "30/12/2013",
                 "priority": "0"
                },       
              {
    	    	   
                	 "isComplete":false,
                     "isPending": false,
                     "isClosed": true,
    	        "taskName": "first task",
    	        "desc": "Create UI-use html,CSS,JSS",
    	        "assignTo":"Shivu",
    	        "createdAt":"1/1/2013",
       	        "dueDate": "31/12/2013",
       	        "closedOn": "30/12/2013",
       	        "priority": "1"
    	     },
    	     {
  	    	   
    	    	 "isComplete":false,
                 "isPending": true,
                 "isClosed": false,
    	    	  
     	        "taskName": "second task",
     	        "desc": "Create UI-use html,CSS,JSS",
     	        "assignTo":"Sayees",
     	        "createdAt":"1/1/2013",
        	        "dueDate": "31/12/2013",
        	        "closedOn": "30/12/2013",
        	        "priority": "2"
     	     },
     	    {
    	    	   
     	    	 "isComplete":true,
                 "isPending": false,
                 "isClosed": false,
      	        "taskName": "3rd task task",
      	        "desc": "Create UI-use html,CSS,JSS",
      	        "assignTo":"Sayees",
      	        "createdAt":"1/1/2013",
         	        "dueDate": "31/12/2013",
         	        "closedOn": "30/12/2013",
         	        "priority": "3"
      	     }
    	          ]
       },
       
       
       {
    	   "proID":2, 
    	   "proName":"SMS Alert student cab",
    	   "proCoordinators":["sampath","ravi","masroor"],
   	    
   	    "task": [
         {  
        	 "isComplete":true,
             "isPending": false,
             "isClosed": false,
   	        "taskName": "Stopper Task",
   	        "desc": "Abcdefgh",
   	        "assignTo":"sampath",
   	     	"createdAt": "1/1/2013",
   	        "dueDate": "31/12/2013",
   	        "closedOn": "30/12/2013",
   	        "priority": "0"
   	      },
   	       {  
   	    	 "isComplete":true,
             "isPending": false,
             "isClosed": false,
    	        "taskName": "2nd task-High",
    	        "desc": "Abcdefgh",
    	        "assignTo":"sampath",
    	     	"createdAt": "1/1/2013",
    	        "dueDate": "31/12/2013",
    	        "closedOn": "30/12/2013",
    	        "priority": "1"
    	      },
    	      {   "isComplete":true,
    	             "isPending": false,
    	             "isClosed": false,
    	    	        "taskName": "3rd task-medium",
    	    	        "desc": "Abcdefgh",
    	    	        "assignTo":"sampath",
    	    	     	"createdAt": "1/1/2013",
    	    	        "dueDate": "31/12/2013",
    	    	        "closedOn": "30/12/2013",
    	    	        "priority": "2"
    	     },
    	     {  
    	    	 "isComplete":true,
                 "isPending": false,
                 "isClosed": false,
	    	        "taskName": "4th task-mlow",
	    	        "desc": "Abcdefgh",
	    	        "assignTo":"sampath",
	    	     	"createdAt": "1/1/2013",
	    	        "dueDate": "31/12/2013",
	    	        "closedOn": "30/12/2013",
	    	        "priority": "3"
	    	      }
            ]
      },  
                    
       {    
    	  "proID":3,
  	      "proName":"Time table generation",
  	      "proCoordinators":["pavan","priyanka","vishrutha"],
    	   "task":[
    	     {   "isComplete":true,
                 "isPending": false,
                 "isClosed": false,
          	     "taskName": "Back End",
    	        "desc": "This is task of back end ",
    	        "assignTo":"Sayeesh",    	     	   		
    	        "createdAt": "1/1/2013",
       	        "dueDate": "31/12/2013",
       	        "closedOn": "30/12/2013",
       	        "priority": "2"
    	     }
    	  ]  
       	}
       
                  
                  
                  
                  ];
     
     for(var i=0;i< $scope.projects.length;i++)
 	{
 	if($scope.projects[i].proID==$routeParams.id)
 		{
 		$scope.projectDetails=$scope.projects[i];
 		}
 	}

     
     

     
  }]);

