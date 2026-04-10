const container = document.getElementById("GrandContainer");
const registerBtn = document.querySelector(".btn_register");
const loginBtn = document.querySelector(".btn_login");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});


const Form = document.getElementById ('Doc_Form');

Form.addEventListener('submit', (event) => {
    event.preventDefault();

    let Username = document.getElementById('Username_Doc').value;
    let Password = document.getElementById('Password_Doc').value;

    if (Username === 'Admin' && Password === 'JVC123') {
            
            localStorage.setItem("username", Username);
            window.location.href = "Home.html";
    }

    else {
        alert("Wrong Crendentials! Hacker!")
      
    }
  
});

