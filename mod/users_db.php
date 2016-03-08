<?php
include("connect.php");

//create users
function insert_user(){
    global $db;
    $query = "INSERT INTO users (username, password) VALUES ('".$_POST['username']."', '".$_POST['password']."')";
    $result = $db->query($query);
}

//read users
function login_user(){
    global $db;
    
    $query = "SELECT * FROM users WHERE password = '".$_POST['password']."' AND username = '".$_POST['username']."'";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
    
}


//update users
function updatePW(){
    global $db;
    
    $query = "UPDATE users SET password ='".$_POST['password']."' WHERE user_id = '".$_POST['user_id']."' ";
    //$query = "UPDATE users SET password = '".$_POST['password']."' WHERE user_id = '".$_POST['user_id']."'";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
}

//delete users
function delete_user(){
    
}

//TESTING
//insert_user();


?>