<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {

    $input = json_decode(file_get_contents("php://input"), true);

    $to = "mariiapsychology@gmail.com";
    $from = "upload@mashovets-psychologist <NO_REPLAY@mashovets-psychologist.com>";
    $subject = "Заповнена форма для зворотьного зв'язку на сайті";
    $message = "Имя: ".$input['name'].",\r\n телефон: ".$input['email'],\r\n телефон: ".$input['phone'],\r\n телефон: ".$input['text'];
    
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers .= "From:".$from."\r\n";

    $result = mail($to, $subject, $message, $headers);

    if($result) {
    echo json_encode(['status' => 0]);
    } else {
    echo json_encode( array( 'status' => 1 ) );
    }

}


?>