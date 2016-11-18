  var connect = document.querySelector(".write-to-us");
  var popup = document.querySelector(".modal-window");
  var close = popup.querySelector(".modal-window-close");
  var form = popup.querySelector("form");
  var name = popup.querySelector("[name=user_name]");      
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
    if (!user_name.value || !mail.value) {  
      event.preventDefault();
      console.log("Нужно ввести имя и адресс почты");
    }   
  });     

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-window-show")) {
        popup.classList.remove("modal-window-show");
      }
    }
  });

  var map_Open = document.querySelector(".js-open-map");
  var map_Popup = document.querySelector(".modal-window-map");
  var map_Close = map_Popup.querySelector(".modal-window-close");

  map_Open.addEventListener("click", function(event) {
    event.preventDefault();
    map_Popup.classList.add("modal-window-show");
  });

  map_Close.addEventListener("click", function(event) {
    event.preventDefault();
    map_Popup.classList.remove("modal-window-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (map_Popup.classList.contains("modal-window-show")) {
        map_Popup.classList.remove("modal-window-show");
      }
    }
  });

