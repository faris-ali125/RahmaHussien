const users = [
    { username: "rahmaFaris", password: "1234578F" },
    { username: "user2", password: "password2" },
    { username: "admin", password: "admin123" }
  ];

  
  function validateLogin() {
    console.log("Function validateLogin is called");
  
    // Get form values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    console.log("Entered Username:", username);
    console.log("Entered Password:", password);
  
    const isValidUser = users.some(user => user.username === username && user.password === password);
  
    const messageDiv = document.getElementById("message");
    if (isValidUser) {
      messageDiv.textContent = "Login successful!";
      messageDiv.style.color = "green";
      document.getElementById("loginForm").reset(); // Clear form inputs
      
      // Redirect to index.html
      window.location.href = "index.html";  // Change "index.html" to your target URL
    } else {
      messageDiv.textContent = "Invalid username or password.";
      messageDiv.style.color = "red";
    }
  }