<?php

//recaptcha
$email;$comment;$captcha;
        if(isset($_POST['email'])){
          $email=$_POST['email'];
        }if(isset($_POST['comment'])){
          $email=$_POST['comment'];
        }if(isset($_POST['g-recaptcha-response'])){
          $captcha=$_POST['g-recaptcha-response'];
        }
        if(!$captcha){
          echo '<h2>Please check the the captcha form.</h2>';
          exit;
        }
        $secretKey = "6Lfb0HsUAAAAAK2rCP8Q0tKotEDMCwl4QXk7rC32";
        $ip = $_SERVER['REMOTE_ADDR'];
        $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip);
        $responseKeys = json_decode($response,true);
        if(intval($responseKeys["success"]) !== 1) {
          echo '<h2>You are spammer ! Get the @$%K out</h2>';
        } else {
          echo '<h2>Thanks for posting comment.</h2>';
        }

// Create the email and send the message
/*
$to = 'info@vista-compliance.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Please subscribe me for regulatory updates";
$email_body = "You have received a subscriber from your newsletter subscription form.\n\n"."Email: $email_address";
$headers = "From: noreply@vista-compliance.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;*/
?>
