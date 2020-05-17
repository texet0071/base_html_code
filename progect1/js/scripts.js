
var form = document.querySelector('#myForm');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var formData = {
    name: document.querySelector('input[name="name"]').value,
    email: document.querySelector('input[name="email"]').value
  };

  var request = new XMLHttpRequest();

  request.addEventListener('load', function() {
  
    console.log(request.response);
    alert('Ваша заявка успешно отправлена!');
    form.innerHTML = '<h2>Спасибо за заявку!</h2>';
  });

  request.open('POST', '/send.php', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send('name=' + encodeURIComponent(formData.name) + '&email=' + encodeURIComponent(formData.email));
});
