var button = document.querySelector("#btn");
btn.addEventListener("click", calculate);

function calculate(){
    let bill = document.getElementById("billAmount").value
    let result =  bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
    console.log(result);
    
    billAmount.value = result;
    
    
    
}


// // method - 2
// function calculate(){
//     let bill = document.getElementById("billAmount").value
//     let result =  bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
//  console.log(result);
// }