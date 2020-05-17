$("#sendmail").on("click", function() {
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var message = $("#message").val().trim();

    if(email == "") {
        $("#errormess").text("Введите email");
        return false;
    }    else if(name == "") {
        $("#errormess").text("Введите имя");
        return false;
    }    else if(phone == "") {
        $("#errormess").text("Введите телефон");
        return false;
    }    else if(message.length < 5) {
        $("#errormess").text("Введите сообщение не мение 5 символов");
        return false;
    }

    $("#errormess").text("");

    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {'name': name, 'email': email, 'phone': phone, 'message': message },
        dataType: 'html',
        beforeSend: function() {
            $("sendmail").prop("disabled", true);
        },
        success: function(data) {
            if(!date)
                alert("Ошибка");
            else
                $("#mailform").trigger('reset');  

            $("sendmail").prop("disabled", false);

        }
    });

});