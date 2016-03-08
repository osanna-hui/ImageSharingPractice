var ctrl = angular.module("AppController",[]);

///////////////////USER'S IMAGES//////////////////

ctrl.controller("UserImgControl", ["$scope", function($scope){

	console.log(sessionStorage.myid);
    $.ajax({
        url:"cont/img_c.php",
        dataType:"JSON",
        type:"POST",
        data:{
            method:"get_user_img",
            user_id:sessionStorage.myid
        },
        success:function(resp){
            console.log(resp);
            $scope.$apply(function(){
                $scope.imgs = resp;    
            });
                

            $scope.update = function(imgId){
                console.log(imgId);
                var titleId = "new_title_"+imgId;
                console.log(titleId);
                var descId = "new_desc_"+imgId;
                console.log(descId);
                
                $.ajax({
                   url:"cont/img_c.php",
                    type:"POST",
                    dataType:"JSON",
                    data:{
                        method:"update_img",
                        img_id:imgId,
                        new_title:document.getElementById(titleId).value,
                        new_desc:document.getElementById(descId).value
                    },
                    success:function(resp){
                        location.reload();
                        console.log("updated image");
                        
                    }
                });
            }

            $scope.delete = function(imgId){
                $.ajax({
                   url:"cont/img_c.php",
                    type:"POST",
                    dataType:"JSON",
                    data:{
                        method:"delete_img",
                        img_id:imgId
                    },
                    success:function(resp){
                        location.reload();
                        console.log("deleted image");

                    }
                });
            }
        }                
    });
}]);

///////////////////USER'S COMMENTS//////////////////

ctrl.controller("UserCommentsControl", ["$scope", function($scope){

	$.ajax({
        url:"cont/com_c.php",
        dataType:"JSON",
        type:"POST",
        data:{
            method:"view_user_comments",
            user_id:sessionStorage.myid
        },
        success:function(resp){
            console.log(resp);
            $scope.$apply(function(){
                $scope.comments = resp;    
            });

            $(".edit").click(function(){
                console.log(this.id);
                var div_id = "comment_"+this.id;
                var input = document.createElement("input");
                input.placeholder = "Replace Comment Here";
                document.getElementById(div_id).appendChild(input);

                var sub_edit = document.createElement("button");
                sub_edit.id = this.id;
                sub_edit.innerHTML = "Submit Edit";
                document.getElementById(div_id).appendChild(sub_edit);

                sub_edit.onclick = function(){
                    $.ajax({
                        url:"cont/com_c.php",
                        dataType:"JSON",
                        type:"POST",
                        data:{
                            method:"edit_comment",
                            new_comment:input.value,
                            comment_id: this.id,
                        },
                        success:function(resp){
                            location.reload();
                            console.log("edit");
                        }
                    });
                }

            });
            $scope.delete = function(comId){
                console.log(comId);
                $.ajax({
                    url:"cont/com_c.php",
                    type:"POST",
                    dataType:"JSON",
                    data:{
                        method:"delete_comment",
                        com_id:comId
                    },
                    success:function(){
                        location.reload();
                        console.log("deleted");
                    }
                });
            }
            
        }                
    });
}]);

///////////////////ALL IMAGE TITLES//////////////////

ctrl.controller("TitlesControl", ["$scope", function($scope){

	$.ajax({
        url:"cont/img_c.php",
        dataType:"JSON",
        type:"POST",
        data:{
            method:"view_all_img"
        },
        success:function(resp){
            console.log(resp);
            $scope.$apply(function(){
                //showing what's in the response
                $scope.imgs = resp;    
            });

            $(".img_title").click(function(){
            	var id = this.id;
            	console.log(id);
            	$.ajax({
				   url:"cont/img_c.php",
				    type:"POST",
				    dataType:"JSON",
				    data:{
				        method:"view_one_img",
				        img_id:id,
				    },
				    success:function(resp1){
				        console.log(resp1);
				        var div = document.createElement("div");
				        div.id = "info";
				        document.body.appendChild(div);

				        var close = document.createElement("div");
				        close.innerHTML = "close";
				        close.id = "close";
				        div.appendChild(close);

				        var img = document.createElement("img");
				        img.src = "img/"+resp1[0].img_url;
				        div.appendChild(img);

				        var h2 = document.createElement("h2");
				        h2.innerHTML = "Title: "+resp1[0].img_title;
				        div.appendChild(h2);

				        var span = document.createElement("span");
				        span.innerHTML = "Desc: "+resp1[0].img_desc;
				        div.appendChild(span);

				        var c_head = document.createElement("h3");
				        c_head.innerHTML = "Comments:";
				        div.appendChild(c_head);

				        
				        $.ajax({
				        	url:"cont/com_c.php",
				        	dataType:"JSON",
				        	type:"POST",
				        	data:{
				        		method:"get_comment_single_img",
				        		img_id:id
				        	},
				        	success:function(resp2){
				        		console.log(resp2);

				        		if (resp2.length == 0){
				        			var comment = document.createElement("h4");
				        			comment.innerHTML = "There's no comment for this image";
				        			div.appendChild(comment);
				        		}
				        		
			        			for (i=0;i<resp2.length;i++){

				        			var comment = document.createElement("h4");
				        			comment.innerHTML = resp2[i].msg;
				        			div.appendChild(comment);
				        		}
				        		
				        		 close.onclick = function(){
						        	div.removeChild(h2);
						        	div.removeChild(img);
						        	div.removeChild(span);
						        	div.removeChild(comment);
						        	//div.removeChild(no_comment);
						        	div.removeChild(c_head);
						        	document.body.removeChild(div);
						        }	
				        	}
				        });
				       


				    }
				});

            });

            
        }                
    });
    

/*
    $scope.view = function(imgId){
        console.log(imgId);
        
        $.ajax({
           url:"cont/com_c.php",
            type:"POST",
            dataType:"JSON",
            data:{
                method:"view_one_img",
                img_id:imgId,
            },
            success:function(resp){
                console.log(resp);
                $scope.$apply(function(){
                    //showing what's in the response
                    $scope.ones = resp;    
                });

                $.ajax({
			       url:"cont/com_c.php",
			        type:"POST",
			        dataType:"JSON",
			        data:{
			            method:"view_comments",
			            img_id:imgId,
			        },
			        success:function(resp){
			            console.log(resp);
			            $scope.$apply(function(){
			                //showing what's in the response
			                $scope.comments = resp;    
			            });

			        }
			    });

            }
        });
    }*/
}]);

///////////////////ALL IMAGES//////////////////

ctrl.controller("AllImgControl", ["$scope", function($scope){

    $.ajax({
	    url:"cont/img_c.php",
	    dataType:"JSON",
	    type:"POST",
	    data:{
	        method:"view_all_img"
	    },
	    success:function(resp){
	        console.log(resp);
	        $scope.$apply(function(){
	            //showing what's in the response
	            $scope.imgs = resp;    
	        });
	        $scope.comment = function(imgId){
	            console.log(imgId);
	            console.log(document.getElementById(imgId).value);
	            $.ajax({
	               url:"cont/com_c.php",
	                type:"POST",
	                dataType:"JSON",
	                data:{
	                    method:"insert_comment",
	                    img_id:imgId,
	                    comment:document.getElementById(imgId).value,
	                    user_id:sessionStorage.myid
	                },
	                success:function(resp){
	                    location.reload();
	                    console.log("updated image");
	                    
	                }
	            });
	        }
	    }                
	});
}]);
