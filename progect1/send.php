<?php

$name = $_POST['name'];
$email = $_POST['email'];

$to = "texet0071@gmail.com";
<?mail('texet0071@gmail.com', 'Тема письма', 'Текст письма', 'From: texet0071@gmail.com');?>
$subject ='Отправлена заявка с сайта НАЗВАНИЕ_САЙТА';
$message = "Заявка была отправлена пользоваталем $name с имейлом $email";
$headers = "From: $name <$email>" . "\r\n";

if (mail($to,$subject,$message,$headers)) {
	echo 'Ваше сообщение успешно отправлено (ответ сервера)!';
} else {
	echo 'Возникла ошибка при отработке функции mail на сервере (ответ сервера)!';
}

