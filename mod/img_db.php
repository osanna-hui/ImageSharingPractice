<?php
include("connect.php");

//create images
function insert_img(){
    global $db;
    $query = "INSERT INTO images (img_title, img_desc, img_url, user_id) VALUES ('".$_POST['title']."', '".$_POST['desc']."', '".$_POST['img_url']."', '".$_POST['user_id']."')";
    $result = $db->query($query);
}

//read images
function viewAll_img(){
    global $db;
    
    $query = "SELECT images.img_id, images.img_title, images.img_desc, images.img_url, users.username FROM images LEFT JOIN users ON users.user_id = images.user_id ";

    $result = $db->query($query);
    echo json_encode($result->fetchAll());
    
}
function view_one_img(){
    global $db;

    $query = "SELECT * FROM images WHERE img_id = '".$_POST['img_id']."'";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());

}
function get_user_img(){
    global $db;
    
    $query = "SELECT * FROM images WHERE user_id = '".$_POST['user_id']."'";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
}

//update image
function update_img(){
    global $db;

    $query = "UPDATE images SET img_title = '".$_POST['new_title']."', img_desc = '".$_POST['new_desc']."' WHERE img_id = '".$_POST['img_id']."' ";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
}

//delete image
function delete_img(){
    global $db;
    $query = "DELETE FROM images WHERE img_id = '".$_POST['img_id']."'";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());

}

?>