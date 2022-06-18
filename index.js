document.querySelector("form").addEventListener("submit", todo);
function todo(event) {
    event.preventDefault();
        
  
    var check = document.querySelector("#task").value;
    console.log(check);
    
}


