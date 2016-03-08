<?php

try{
    $db = new PDO ("mysql:dbname=FinalAssignment;host=localhost", "root", "root");
} catch (PDOException $e) {
    echo "Fail";
}

?>