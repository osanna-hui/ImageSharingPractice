<?php
include("../mod/com_db.php");

if ($_POST['method'] == "insert_comment"){
    insert_comment();
}
if ($_POST['method'] == "get_comment_single_img"){
	get_comment_single_img();
}
if ($_POST['method'] == "view_comments"){
	view_comments();
}
if ($_POST['method'] == "view_user_comments"){
	view_user_comments();
}
if($_POST['method'] == "edit_comment"){
	edit_comment();
}
if($_POST['method'] == "delete_comment"){
	delete_comment();
}
?>