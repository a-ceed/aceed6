<?php
$fMail = $_POST['fMail'];
$fText = $_POST['fText'];
$fName = $_POST['fName'];
$fClientMail = $_POST['fClientMail'];
$fOk = $_POST['fOk'];
$fBad = $_POST['fBad'];
$fText.="\n\n".$fName."\n\n".$fClientMail."\n\n";
$fText.=date("l dS of F Y h:i:s A");
$fSubject = 'Форма обратной связи';
if (mail($fMail,$fSubject,$fText)) {Header("Location: $fOk");}
else {Header("Location: $fBad");}
exit;
?>
