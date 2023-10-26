function signup() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    if (name == "") {
      alert("Please enter your name.");
      return;
    }
    if (email == "") {
      alert("Please enter your email address.");
      return;
    }
    if (password == "") {
      alert("Please enter a password.");
      return;
    }

    var user = {
      name: name,
      email: email,
      password: password
    };
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/signup");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(user));
  
    xhr.onload = function() {
      if (xhr.status == 200) {
        alert("You have successfully signed up!");
      } else {
        alert("There was an error creating your account.");
      }
    };
  }