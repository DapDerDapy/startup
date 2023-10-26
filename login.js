function login() {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;
    }

    if (isValidCredentials(username, password)) {
      localStorage.setItem("userName", username);
      window.location.href = "timeline.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
}

function isValidCredentials(username, password) {
    const validCredentials = {
        username: "exampleUser",
        password: "examplePassword",
    };

    return (
        username === validCredentials.username &&
        password === validCredentials.password
    );
}