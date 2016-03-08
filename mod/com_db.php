<?php
include("connect.php");

//create users
function insert_comment(){
    global $db;
    $query = "INSERT INTO comments (msg, img_id, user_id) VALUES ('".$_POST['comment']."', '".$_POST['img_id']."', '".$_POST['user_id']."')";
    $result = $db->query($query);
}

function view_user_comments(){
	global $db;

	$query = "SELECT comments.com_id, comments.img_id, comments.msg, images.img_title FROM comments INNER JOIN images ON comments.img_id = images.img_id
		AND comments.user_id = '".$_POST['user_id']."'";

	//$query = "SELECT comments.com_id, comments.img_id, comments.msg FROM comments WHERE user_id = '".$_POST['user_id']."'";
    $result = $db->query($query);


    echo json_encode($result->fetchAll());
}

function get_comment_single_img(){
   global $db;

    $query = "SELECT * FROM comments WHERE img_id = '".$_POST['img_id']."'";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
}

function edit_comment(){
	global $db;

    $query = "UPDATE comments SET msg = '".$_POST['new_comment']."' WHERE com_id = '".$_POST['comment_id']."' ";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
}

function delete_comment(){
	global $db;

	$query = "DELETE FROM comments WHERE com_id = '".$_POST['com_id']."'";
	$result = $db->query($query);
	echo json_encode($result->fetchAll());
}
?>