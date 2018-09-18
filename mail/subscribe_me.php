<?php

// Check for empty fields
if(empty($_POST['email'])     ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }

$email_address = strip_tags(htmlspecialchars($_POST['email']));

// Create the email and send the message
$to = 'info@vista-compliance.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Please subscribe me for regulatory updates";
$email_body = "You have received a subscriber from your newsletter subscription form.\n\n"."Email: $email_address";
$headers = "From: noreply@vista-compliance.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
