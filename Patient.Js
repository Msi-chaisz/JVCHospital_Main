const container = document.getElementById("GrandContainer");
const registerBtn = document.querySelector(".btn_register");
const loginBtn = document.querySelector(".btn_login");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});




const form1 = document.getElementById('Patient_Form');

form1.addEventListener('submit', function(event) {
    event.preventDefault(); 

    let username = document.getElementById('Pat_User').value.trim();
    let password = document.getElementById('Pat_Pass').value.trim();


    if (username === "Law" && password === "1234") {
   
        localStorage.setItem("username", username);
        window.location.href = "Home2.html";
    }
     else {
      
        alert("Wrong Credentials! Hacker!");
    }
});