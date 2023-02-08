<?php

//recaptcha
if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])) {
        //your site secret key
        $secret = '6Lfb0HsUAAAAAILB_MlKaEYojIIQKfDmsCmoHeNV';
        //get verify response data
        $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
        $responseData = json_decode($verifyResponse);
        if($responseData->success):

             print_r("Working Fine"); exit;
        else:
             print_r("No valid Key"); exit;
        endif;
    } else {
        print_r("Not Working Captcha"); exit;
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
