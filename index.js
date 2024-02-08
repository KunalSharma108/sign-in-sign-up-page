let bgColor = "";


function colorChange(color) {
    const colorButton = document.getElementsByClassName("color");

    
    for (let i = 0; i < colorButton.length; i++) {
        
        colorButton[i].removeAttribute("id");
        colorButton[i].addEventListener("click", function () {
            this.id = "active";
        })
    }
    document.getElementById("main-bg").style.backgroundColor = color;
}

function signIn(event) {
    event.preventDefault();
    const mainContent = document.querySelector(".main-content");

    mainContent.classList.remove("active-sign-up");
    mainContent.classList.add("active-sign-in");
    
}

function signUp(event) {
    event.preventDefault();
    const mainContent = document.querySelector(".main-content");

    mainContent.classList.add("active-sign-up");
    mainContent.classList.remove("active-sign-in");

}

