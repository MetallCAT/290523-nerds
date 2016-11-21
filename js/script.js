  var connect = document.querySelector(".write-to-us");
  var popup = document.querySelector(".modal-window");
  var close = popup.querySelector(".modal-window-close");
  var form = popup.querySelector("form");
  var user_name = popup.querySelector("[name=name]");      
  var mail = popup.querySelector("[name=mail]");  

  connect.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-window-show");
    user_name.focus();
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-window-show");
  });

  form.addEventListener("submit", function(event) {
    if (!name.value || !mail.value) {  
      event.preventDefault();
      alert("Нужно ввести имя и адрес почты");
    }   
  });     

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-window-show")) {
        popup.classList.remove("modal-window-show");
      }
    }
  });