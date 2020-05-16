<?php
	$id = $_GET['id'];
	$url = 'https://adfoc.us/' . $id;
	echo
	'
	<a id="download" href="'.$url.'">DOWNLOAD</a>
	<script type="text/javascript">
        document.getElementById("download").click();
     </script>';
?>