<?php
include("../mod/users_db.php");

if ($_POST['method'] == "register"){
    insert_user();
}
if ($_POST['method'] == "login"){
    login_user();
}
if ($_POST['method'] == "updatePW"){
    updatePW();
}

?>