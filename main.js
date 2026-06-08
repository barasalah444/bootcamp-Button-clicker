
function toggleLogin(element) {
    if (element.innerText == "Login" &&element.style.backgroundColor !== "red") {
        element.innerText = "Logout"; 
         element.style.backgroundColor = "red";
    } else {
        element.innerText = "Login";  
         element.style.backgroundColor = "#007bff"; 
    }
}

function handleLike() {
    alert("Ninja was liked");
}


function handleAddDef(element) {
    element.remove();
    
}


    