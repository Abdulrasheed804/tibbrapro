<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "andrew.james@tibbra.ng";
    $subject = "New Message From Tibbra Website";

    $body = "
    Name: $name

    Email: $email

    Message:
    $message
    ";

    $headers = "From: noreply@tibbra.ng\r\n";
    $headers .= "Reply-To: $email\r\n";

    if(mail($to, $subject, $body, $headers)) {
        echo "<h2>Thank you! Your message has been sent.</h2>";
    } else {
        echo "<h2>Sorry, message could not be sent.</h2>";
    }
}

?>