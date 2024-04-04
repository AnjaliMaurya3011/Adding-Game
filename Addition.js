let firstNumber =document.getElementById("firstNumber");
let secondNumber =document.getElementById("secondNumber");
let userInput =document.getElementById("userInput");
let gameResult =document.getElementById("gameResult");

     let randomNumber1 =Math.ceil(Math.random()*100);
     let randomNumber2 =Math.ceil(Math.random()*100);

    firstNumber.textContent =randomNumber1;
    secondNumber.textContent =randomNumber2

   
    function check(){
        // let sums =parseInt(firstNumber.textContent) + parseInt(secondNumber.textContent);
         let user =parseInt(userInput.value);
        if(user === randomNumber1 +randomNumber2){
            gameResult.textContent ="Congrulations!!! Well Done😊"
        }
        else {
            gameResult.textContent ="Please Try Again!!! "
        }
    }

    function restart(){
        // let randomNumber1 =Math.ceil(Math.random()*100);
        // let randomNumber2 =Math.ceil(Math.random()*100);
    
            firstNumber.textContent =randomNumber1;
            secondNumber.textContent =randomNumber2
    
            
            userInput.value =""
            gameResult.textContent =""
        }
        

    
   
