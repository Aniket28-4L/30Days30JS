let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');




setInterval(() => {

    let CurrentTime = new Date();




    hrs.innerHTML = (CurrentTime.getHours()<10?"0":"") + CurrentTime.getHours() ;
    min.innerHTML = (CurrentTime.getMinutes()<10?"0":"") + CurrentTime.getMinutes();
    sec.innerHTML = (CurrentTime.getSeconds()<10?"0":"") + CurrentTime.getSeconds();
},1000)

