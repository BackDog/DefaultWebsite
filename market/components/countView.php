<?php
	$myfile = fopen("count.txt", "r") or die("Unable to open file!");
	$data = explode("@", fread($myfile, filesize("count.txt")));

    $view = intval($data[0]) + 1;
    $lastView = $data[1];

    fclose($myfile);

    $myfile = fopen("count.txt", "w") or die("Unable to open file!");

    fwrite($myfile, $view.'@'.date("h:i:s a d/m/Y"));
    fclose($myfile);
?>
<div style="background-color: gray; border-radius: 3px; height: 20px; padding-left: 8px; color: white;">
	<span><?php echo $view ?> views</span>
</div>