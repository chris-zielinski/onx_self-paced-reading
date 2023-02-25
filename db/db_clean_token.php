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

$get = $dba->prepare("SELECT uid,tini FROM ".$tname_list." WHERE subjid IS NULL AND done=0"); 
$get->execute();
$res = $get->fetch(PDO::FETCH_ASSOC); 
if ($get->rowCount()==0) {
    echo "yes";
    $list = "";
} else {
    $list = $res['list'];
    $uid = $res['uid'];

    // add the subjid
    $set = $dba->prepare("UPDATE ".$tname_list." SET subjid=:sid WHERE uid=:uid");
    $set->execute(['sid' => $subj_id,
                'uid' => $uid]);
}

$dba = null;

echo "update_list_OK";

?>