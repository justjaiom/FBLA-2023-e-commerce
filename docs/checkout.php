<?php  
$firstname = $Post[firstname];
$lastname = $Post[lastname];
$email = $Post[email];
$roomtype = $Post[roomtype];
$startofstay = $Post[startofstay]
$durationofstay = $Post[durationofstay];
$totalcost = $Post[totalcost];
$creditcard = $Post[creditcard];
$securitycode = $Post[securitycode];




if (!empty($firstname)||!empty($lastname)||!empty($creditcard)||!empty($securitycode)){
    $host = "localhost";
    $dbUsername = ""; //put here once the database has been completed
    $dbPassword = ""; //put here once the database has been completed
    $dbname = ""; //put here once the database has been completed

    //creating the connection
    $conn new mysqli($host, $dbUsername, $dbPassword, $dbname);

    if (mysqli_connect_error()){
        die('Connect('.mysqli_connect_error.')'. mysqli_connect_error());
    }else{
        $SELECT = "SELECT email From register Where email = ? Limit 1"; //select query
        $INSERT = "INSERT Into register (firstname, lastname, email, roomtype, startofstay, durationofstay, totalcost, creditcard, securitycode) values(?,?,?,?,?,?,?)";

        //prepare statement
        $stmt = $conn -> prepare ($SELECT);
        $stmt -> bind_param("s", $email);
        $stmt -> execute();
        $stmt -> bind_result($email);
        $stmt -> store_result();
        $rnum = $stmt -> num_rows;

        if ($rnum == 0){
            $stmt = $conn-> prepare($INSERT);
            $stmt -> bind_param("ssssiiiii", $firstname, $lastname, $email, $roomtype, $startofstay, $durationofstay, $totalcost, $creditcard, $securitycode);
            $stmt -> execute();
            echo "new record";//new record, however this can be changed so that there is a signal to the HTML
            
            $to = $email;
            $subject = "Confirmation your reservation for The Living Room";
            $message = "Thank you for confirming your stay at The Living Room. You've booked" . $roomtype. " For $". $totalcost . ". If there is anything that we can help you with call us at, 123-345-6789!";
            $message = wordwrap($message, 70, "\r\n");
            $headers = "From: sender@example.com"; //replace this with our offical email
            mail($to, $subject, $message, $headers);


        } else {
            echo "someone has already used this email"; 
        }
        $stmt -> close(); //close statement 
        $conn -> close(); //close database connection
    }
} else {
    //use checkout.js to use the validate function 
    echo "Fill out all required forms!" //this can be a placeholder for once we create the DB and link the db to the chechout.html
}
?>