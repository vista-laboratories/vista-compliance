<?php
         if (isset($_POST['submit'])) {
          $username = $_POST['username'];

           //ReCapcha Area Code
           $secretKey = "6LcY23sUAAAAAAxdmHe49ejlYh74fdDWKPAK0dVa";
           $responseKey = $_POST['g-recaptcha-response'];
          $userIP = $_SERVER['REMOTE_ADDR'];
          $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$userIP";
          $response = file_get_contents($url);
          $response = json_decode($response);
         //ReCapcha Area COde End


         if ($response->success)
             echo "Verification success. Your name is: $username";
         else
             echo "Please Select Captcha failed!";
           }
          ?>
