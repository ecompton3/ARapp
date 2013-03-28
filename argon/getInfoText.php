<?php
   $filename = @$_GET['filepath'];
   //$filename = "res/tei.xml";
	$fileText = file_get_contents($filename);
	echo json_encode($fileText);
?>