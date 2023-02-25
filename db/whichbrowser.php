<?php

    require '../../vendor/autoload.php';

    $result = new WhichBrowser\Parser(getallheaders());

    // browser info
    $bro = $result->browser;
    // browser name
    $bro_name = $bro->name;
    // browser version
    $bro_ver = $bro->version->value;
    // OS info
    $os = $result->os;
    // OS name
    $os_name = $os->name;
    // OS version
    $os_ver = $os->version->value;

    // type
    // $type = $result->device->type;

    // is_desktop
    $is_desk = $result->isType('desktop');

    $arrinfo = array("os", $os_name, $os_ver, "bro", $bro_name, $bro_ver);
    
    $out_str = implode("_", $arrinfo);

    // return browser/OS info + indication if a desktop device is used
    echo json_encode(array("info"=>$out_str, "is_desk"=>$is_desk));

  ?>