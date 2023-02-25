<?php
/*
 Saving the data to mySQL database - using PDO 
 jsPsych data are submitted as a unique string (json-encoded object)

*/


//---- Database connection
// Return database object ($dba)
// and the name of the table ($tname variable)

include("db_connect.php");
// => $dba
// => $tname 

//---------------------
// Get the data submitted in the main experiment script 
// by POST method (using jQuery.ajax)

// json jsPsych data
$jsdata = file_get_contents('php://input');


//---------------------
// Insert it into the data table

try {
    $req = $dba->prepare('INSERT INTO '.$tname.'(jsonData) 
						VALUES(:jsonData)'); 

    $req->execute(array(
        'jsonData' => $jsdata
    ));
    echo '  Insertion OK ! ';
}
catch(PDOException $e)
{
    echo " Echec de l'insertion <br>".$e->getMessage();
}


//---------------------
// Disable the connection

$dba = null;

?>