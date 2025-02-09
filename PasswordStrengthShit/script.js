var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

pass.addEventListener("input",()=>{
    if(pass.value.length > 0){
        msg.style.display = "block";
    }else{
        msg.style.display = "block";
    }
})