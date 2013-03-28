<?php
if ($_GET['randomId'] != "zb1t05xblpUTAfK5zBHRLddBGG1tuE3tkdDIzSfHZHaMQaFo46HKO7P4ikCUrzc0") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
