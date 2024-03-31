<?php
$name =$_POST['name'];
$email =$_POST['email'];
$sub =$_POST['subject'];
$message =$_POST['message'];

$email_from = 'griet@gmail.com';
$sub = 'New Form Submission';
$email_body = "User Name:$name.\n".
                "User Email:$email.\n".
                "Subject: $sub.\n".
                "User Message: $message.\n".

$to = 'devojuhrudhay190@gmail.com'
$headers = "From: $email_from \r\n";
$headers .="Reply To: $email \r\n";
mail($to,$sub,$email_body,$headers);

header("Location: contact.html")




?>




