<?php
/*ini_set('display_errors', 'On');
error_reporting(E_ALL);

set done statut of list to 1 
*/

/*-------- PARAMETERS -----------------------*/

/*--------------------------------------------*/

//---- Name of the table
$tname_list = 'spr_token';

//---------------------
// Connection parameters
include_once('connect.php');

// get subjectID data
$subj_id = file_get_contents('php://input');

//---------------------
// Database connection
$dsn = 'mysql:host=' . $hname . ';dbname=' . $dname . ';charset=utf8';

$opt = array(
	// any occurring errors will be thrown as PDOException
	PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
	// an SQL command to execute when connecting
	PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'UTF8'"
);

try {
	$dba = new PDO($dsn, $usern, $pword, $opt);
} 
catch(PDOException $e)
{
	echo "Connection to database FAILED <br>" . $e->getMessage();  
}

// set the "done" state to 1
$set = $dba->prepare("UPDATE ".$tname_list." SET done=1 WHERE subjid=:subjid");
$set->execute(['subjid' => $subj_id]);

$dba = null;

echo "update_list_OK";

?>