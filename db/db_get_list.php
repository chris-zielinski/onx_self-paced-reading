<?php
/*ini_set('display_errors', 'On');
error_reporting(E_ALL);

get a list
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

// free list if the duration from attribution > max_dur
$pend = $dba->prepare("SELECT uid FROM ".$tname_list." WHERE subjid IS NOT NULL AND done=0 AND TIMESTAMPDIFF(SQL_TSI_SECOND, tini, CURRENT_TIMESTAMP)>3610"); 
$pend->execute();

if ($pend->rowCount()>0) {
	while($row = $pend->fetch()) {
		$uid = $row['uid'];
		$rm = $dba->prepare("UPDATE ".$tname_list." SET subjid=NULL WHERE uid=:uid");
		$rm->execute(['uid' =>  $uid]);
	}
}

// check if subject exist
$check = $dba->prepare("SELECT uid,list,done FROM ".$tname_list." WHERE subjid=:subjid"); 
$check->execute(['subjid'=>$subj_id]);

if ($check->rowCount()==1) {
	$res = $check->fetch(PDO::FETCH_ASSOC);
	if ($res['done']==0) {
		$list = $res['list'];
	} else {
		$list = "";
	}
} else {

	$get = $dba->prepare("SELECT uid,list FROM ".$tname_list." WHERE subjid IS NULL AND done=0 LIMIT 1"); 
	$get->execute();
	$res = $get->fetch(PDO::FETCH_ASSOC); 
	if ($get->rowCount()==0) {
		$list = "";
	} else {
		$list = $res['list'];
		$uid = $res['uid'];

		// add the subjid
		$set = $dba->prepare("UPDATE ".$tname_list." SET subjid=:sid WHERE uid=:uid");
		$set->execute(['sid' => $subj_id,
					'uid' => $uid]);
	}
}

$dba = null;

echo $list;

?>