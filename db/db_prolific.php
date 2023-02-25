<?php
/*
Checks if the participant of Prolific has done the experiment
Return the Prolific link if so

*/

//---------------------
// Parameters

// minimal experiment duration in seconds
$thr_dur = 300;

// json jsPsych data
$jsdata = json_decode(file_get_contents('php://input'), true); 

if ($jsdata["tg"] > $thr_dur*1000){
    $link = "https://app.prolific.co/submissions/complete?cc=3588692A";
}else{
    $link = "";
}

echo $link;

?>