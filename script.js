let display = document.getElementById("display");
let buttons = document.getElementsByClassName("button");

let operand1= 0;
let operand2 = null;
let operator = null; 

function isOperator(value) {
    return value == "+"  || value =="-" || value=="X" || value=="/";

}
for(let i=0 ; i<buttons.length ; i++){
    buttons[i].addEventListener("click" , () =>{

        let text = buttons[i].textContent;
        if(isOperator(text)) {
            display.textContent = "";
            operand2 = 0;
            operator = text;
            return ;
        }

        if(text == "="){
             if(operator === null){
                display.textContent =  operand1;
             }
             else{
                if(operator == "+"){
                    display.textContent = operand1 + operand2;
                }

                if(operator == "-"){
                    display.textContent = operand1 - operand2;
                }

                if(operator == "X"){
                    display.textContent = operand1 * operand2;
                }
                if(operator == "/"){
                    display.textContent = operand1 / operand2;
                }
             }

             operand2 = null;
             operator = null;
            operand1 = parseFloat(display.textContent);
             return; 
        }

        if(text == "AC") {
             operand1= 0;
             operand2 = null;
            operator = null; 
            display.textContent = "";
            return ;
        }

        if(text == "%"){
            operand1 /= 100;
            operand2 = null;
            operator = null;
            display.textContent = operand1;
            return ;
        }

        if(text == "+/-"){
            if(operand2 == null){
                operand1 = -1 * operand1;
                display.textContent = operand1;
            }else {
                operand2 = -1 * operand2;
                display.textContent = operand2;

            }
            return ;
        }

        if(operand2 !== null){
            display.textContent = display.textContent + text ;
        operand2 = parseFloat(display.textContent);
        
        return;
        }
        display.textContent = display.textContent + text ;
        operand1 = parseFloat(display.textContent);
        

    });
}