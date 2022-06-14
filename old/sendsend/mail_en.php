<html>
<head></head>
<body>
<?
/*Script developed by Nadine Gaine.
You can freely use, modify and distribute for NON-COMMERCIAL purposes only
If you decide to use it, giving me the credit would be appreciated.*/

$MailTo = "sgray777@gmail.com"; //recipient of the form results
$MailSubject = "C cfqnf"; //text in the Subject field of the mail
$MailHeader = "From: aceed.ru"; //text in the From field of the mail

/* Following routines put values entered in the form fields into variables and then put the results in the global variable MailBody which will be the Body part of the message */

$Envoi = 1;   //give value 1 to the variable $Envoi

if ($champ1 == ""){ //name of field 1
     echo("<font face=verdana size=2>You forgot to complete field 1.</font><br>"); //message to be displayed if the field is left empty
     $Envoi = 0;  //if field 1 is empty, variable $Envoi takes value 0
}
else {
     $MailBody = "Question 1 : $champ1\n"; //if field 1 has been completed, value is inserted in variable MailBody
}
if ($champ2 == ""){
     echo("<font face=verdana size=2>You forgot to complete field 2.</font><br>");
     $Envoi = 0;
}
else {
     $MailBody .= "Question 2 : $champ2\n";
}
if ($champ3 == ""){
     echo("<font face=verdana size=2>You forgot to complete field 3</font><br>");
     $Envoi = 0;
}
else {
     $MailBody .= "Question 3 : $champ3\n";
}
if ($champ4 == ""){
     echo("<font face=verdana size=2>You forgot to complete field 4</font><br>");
     $Envoi = 0;
}
else {
     $MailBody .= "Question 4 : $champ4\n";
}
if ($champ5 == "0"){
     echo("<font face=verdana size=2>You forgot to choose a value.</font><br>");
     $Envoi = 0;
}
else {
     $MailBody .= "Question 5 : $champ5\n";
}
if ($champ6 == ""){
     echo("<font face=verdana size=2>You forgot to complete field 6.</font><br>");
     $Envoi = 0;
}
else {
     $MailBody .= "Question 6 : $champ6\n";
}
if ($champ7 == ""){
     echo("<font face=verdana size=2>You forgot to specify your preferences to question 7.</font><br>");
     $Envoi = 0;
}
else {
     $MailBody .= "Question 7 : $champ7\n";
}

//Routine for checkboxes

     $MailBody .="Question 8 : ";

$items = 3;  //initiate possible # of items

for ($i = 1; $i <= $items; $i++) {  //loop on # of items

     $MailBody .= "$champ8[$i], ";  //put results in variable MailBody
}

//Routine to send message

if ($Envoi == 1) {  //Check that variable $Envoi has value 1
mail($MailTo, $MailSubject, $MailBody, $MailHeader);  //message send
echo("<p><font face=verdana size=2>Your message has been sent.<br>Thank you for your comments.</font>"); //Confirmation message.
}
?>
</body>
</html>
