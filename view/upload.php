<?php
    //echo "You've Found Me!";
    var_dump($_POST);
    var_dump($_FILES);
    /*
    if(!is_dir("../img/".$_POST['userid'])){
    	mkdir("../img/".$_POST['userid'],0755);
    }*/

    $filename = $_FILES['images']['name'][0];
    //$filename = substr(md5(rand()), 0, 7);
    
    move_uploaded_file($_FILES['images']['tmp_name'][0], "img/".$filename);

?>