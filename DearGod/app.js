const numberButtons=document.querySelectorAll(".number");
const deleteButton= document.querySelector(".delete");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equals")
const upperdisplay =document.querySelector(".upper");
const lowerDisplay = document.querySelector(".lower");
const operatorButton = document.querySelectorAll(".operation")
const displayScreen = document.querySelector(".display")



function calculator(){

    //let operator='';
    //let currentValue ='';
    //let previousValue ='';
    let calculation = []

   /* function update(){
        if(isNaN(currentValue)) return
        currentValue + operator
    }*/
function handleButtons(){
    numberButtons.forEach(btn =>{
        btn.addEventListener('click',()=>{
            console.log("clicked")
             //displayScreen.textContent = btn.textContent.toString()
             const value = btn.textContent
             calculation.push(value)
            console.log(calculation)
             
        })
    })

    operatorButton.forEach(btn=>{
        btn.addEventListener('click',()=>{
            console.log("clicked!")
            upperdisplay.textContent = btn.textContent
        })
    })

}
  handleButtons() 
  

  }



calculator()
