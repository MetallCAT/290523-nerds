<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="css/normalize.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <title>Nerds</title>
  </head>
  <body>
    <script>
      var connect = document.querySelector(".write-to-us");
      var popup = document.querySelector(".modal-window");
      var close = popup.querySelector(".modal-window-close");
      var form = popup.querySelector("form");
      var name = popup.querySelector("[name=name]");      
      var mail = popup.querySelector("[name=mail]");
      var letter = popup.querySelector("[name=letter]");

      connect.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-window-show");
        name.focus();
      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-window-show");
      });

      form.addEventListener("submit", function(event) {
        if (!name.value || !male.value) {  
          event.preventDefault();
          /*console.log("Нужно ввести имя и адресс почты");*/  
      });     
       
      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-window-show")) {
            popup.classList.remove("modal-window-show");
          }
        }
      });
    </script>
  </body>
</html>