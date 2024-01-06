let SubmitButton = document.getElementById("submit-button")
let AdultCard = document.getElementById("adult-card")
let ChildCard = document.getElementById("child-card")
var age = document.getElementById("age").value

SubmitButton.addEventListener("click",function(){
    if(age>=18){
        AdultCard.classList.remove('d-none')
    }
    else {
        ChildCard.classList.remove('d-none')
    }
})