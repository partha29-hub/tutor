document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const adminId = document.getElementById("adminId").value.trim();
    const password = document.getElementById("adminPassword").value.trim();
    const errorMessage = document.getElementById("errorMessage");
  
    // Dummy validation: replace with actual check (e.g., server-side or JWT)
    if (adminId === "admin123" && password === "securepass") {
      alert("Login successful!");
      window.location.href = "index1.html"; // Or route to dashboard
    } else {
      errorMessage.style.display = "block";
    }
  });
  