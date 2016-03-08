<?php
include("../mod/img_db.php");

if ($_POST['method'] == "insert_img"){
    insert_img();
}
if ($_POST['method'] == "view_all_img"){
    viewAll_img();
}
if ($_POST['method'] == "view_one_img"){
	view_one_img();
}
if ($_POST['method'] == "get_user_img"){
    get_user_img();
}
if($_POST['method'] == "update_img"){
	update_img();
}
if($_POST['method'] == "delete_img"){
	delete_img();
}
?>