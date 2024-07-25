// Main Function
function main() 
{   // DOM Setting
    var b1,b2,b3,b4,b5,b6,b7,b8,b9
    var b1btn,b2btn,b3btn,b4btn,b5btn,b6btn,b7btn,b8btn,b9btn
    
    b1=document.getElementById("b1").value;
    b2=document.getElementById("b2").value;
    b3=document.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5=document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;
    
    b1btn=document.getElementById("b1");
    b2btn=document.getElementById("b2");
    b3btn=document.getElementById("b3");
    b4btn=document.getElementById("b4");
    b5btn=document.getElementById("b5");
    b6btn=document.getElementById("b6");
    b7btn=document.getElementById("b7");
    b8btn=document.getElementById("b8");
    b9btn=document.getElementById("b9");
    
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || 
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b1btn.style.color = "red"; 
        b2btn.style.color = "red"; 
        b3btn.style.color = "red";
        const startElement=b1btn;
        const endElement=b3btn;
        const startX = startElement.offsetLeft + startElement.offsetWidth / 2;
        const startY = startElement.offsetTop + startElement.offsetHeight / 2;
        const endX = endElement.offsetLeft + endElement.offsetWidth / 2;
        const endY = endElement.offsetTop + endElement.offsetHeight / 2;

        strike.style.width = `${Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)}px`;
        strike.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`;
        strike.style.left = `${startX}px`;
        strike.style.top = `${startY}px`;
    } 
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || 
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b1btn.style.color = "red"; 
        b4btn.style.color = "red"; 
        b7btn.style.color = "red";
        const startElement=b1btn;
        const endElement=b7btn;
        const startX = startElement.offsetLeft + startElement.offsetWidth / 2;
        const startY = startElement.offsetTop + startElement.offsetHeight / 2;
        const endX = endElement.offsetLeft + endElement.offsetWidth / 2;
        const endY = endElement.offsetTop + endElement.offsetHeight / 2;

        strike.style.width = `${Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)}px`;
        strike.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`;
        strike.style.left = `${startX}px`;
        strike.style.top = `${startY}px`;
    } 
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
  
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
  
        b7btn.style.color = "red"; 
        b8btn.style.color = "red"; 
        b9btn.style.color = "red";
        const startElement=b7btn;
        const endElement=b9btn;
        const startX = startElement.offsetLeft + startElement.offsetWidth / 2;
        const startY = startElement.offsetTop + startElement.offsetHeight / 2;
        const endX = endElement.offsetLeft + endElement.offsetWidth / 2;
        const endY = endElement.offsetTop + endElement.offsetHeight / 2;

        strike.style.width = `${Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)}px`;
        strike.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`;
        strike.style.left = `${startX}px`;
        strike.style.top = `${startY}px`;
    } 
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
  
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
  
        b3btn.style.color = "red"; 
        b6btn.style.color = "red"; 
        b9btn.style.color = "red";
        const startElement=b3btn;
        const endElement=b9btn;
        const startX = startElement.offsetLeft + startElement.offsetWidth / 2;
        const startY = startElement.offsetTop + startElement.offsetHeight / 2;
        const endX = endElement.offsetLeft + endElement.offsetWidth / 2;
        const endY = endElement.offsetTop + endElement.offsetHeight / 2;

        strike.style.width = `${Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)}px`;
        strike.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`;
        strike.style.left = `${startX}px`;
        strike.style.top = `${startY}px`;
    } 
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
  
        b1btn.style.color = "red"; 
        b5btn.style.color = "red"; 
        b9btn.style.color = "red";
        const startElement=b1btn;
        const endElement=b9btn;
        const startX = startElement.offsetLeft + startElement.offsetWidth / 2;
        const startY = startElement.offsetTop + startElement.offsetHeight / 2;
        const endX = endElement.offsetLeft + endElement.offsetWidth / 2;
        const endY = endElement.offsetTop + endElement.offsetHeight / 2;

        strike.style.width = `${Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)}px`;
        strike.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`;
        strike.style.left = `${startX}px`;
        strike.style.top = `${startY}px`;
    } 
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b3btn.style.color = "red"; 
        b5btn.style.color = "red"; 
        b7btn.style.color = "red";
        const startElement=b3btn;
        const endElement=b7btn;
        const startX = startElement.offsetLeft + startElement.offsetWidth / 2;
        const startY = startElement.offsetTop + startElement.offsetHeight / 2;
        const endX = endElement.offsetLeft + endElement.offsetWidth / 2;
        const endY = endElement.offsetTop + endElement.offsetHeight / 2;

        strike.style.width = `${Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)}px`;
        strike.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`;
        strike.style.left = `${startX}px`;
        strike.style.top = `${startY}px`; 
    } 
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b9btn.disabled = true; 
  
        b2btn.style.color = "red"; 
        b5btn.style.color = "red"; 
        b8btn.style.color = "red"; 
        const startElement=b2btn;
        const endElement=b8btn;
        const startX = startElement.offsetLeft + startElement.offsetWidth / 2;
        const startY = startElement.offsetTop + startElement.offsetHeight / 2;
        const endX = endElement.offsetLeft + endElement.offsetWidth / 2;
        const endY = endElement.offsetTop + endElement.offsetHeight / 2;

        strike.style.width = `${Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)}px`;
        strike.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`;
        strike.style.left = `${startX}px`;
        strike.style.top = `${startY}px`;
    } 
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b4btn.style.color = "red"; 
        b5btn.style.color = "red"; 
        b6btn.style.color = "red";
        const startElement=b4btn;
        const endElement=b6btn;
        const startX = startElement.offsetLeft + startElement.offsetWidth / 2;
        const startY = startElement.offsetTop + startElement.offsetHeight / 2;
        const endX = endElement.offsetLeft + endElement.offsetWidth / 2;
        const endY = endElement.offsetTop + endElement.offsetHeight / 2;

        strike.style.width = `${Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)}px`;
        strike.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`;
        strike.style.left = `${startX}px`;
        strike.style.top = `${startY}px`; 
    }
    else if ((b1 == 'O' || b1 == 'O') && (b2 == 'O' || 
        b2 == 'O') && (b3 == 'O' || b3 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b1btn.style.color = "red"; 
        b2btn.style.color = "red"; 
        b3btn.style.color = "red";
        const startElement=b1btn;
        const endElement=b3btn;
        const startX = startElement.offsetLeft + startElement.offsetWidth / 2;
        const startY = startElement.offsetTop + startElement.offsetHeight / 2;
        const endX = endElement.offsetLeft + endElement.offsetWidth / 2;
        const endY = endElement.offsetTop + endElement.offsetHeight / 2;

        strike.style.width = `${Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)}px`;
        strike.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`;
        strike.style.left = `${startX}px`;
        strike.style.top = `${startY}px`; 
    } 
    else if ((b1 == 'O' || b1 == 'O') && (b4 == 'O' || 
        b4 == 'O') && (b7 == 'O' || b7 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b1btn.style.color = "red"; 
        b4btn.style.color = "red"; 
        b7btn.style.color = "red";
        const startElement=b1btn;
        const endElement=b7btn;
        const startX = startElement.offsetLeft + startElement.offsetWidth / 2;
        const startY = startElement.offsetTop + startElement.offsetHeight / 2;
        const endX = endElement.offsetLeft + endElement.offsetWidth / 2;
        const endY = endElement.offsetTop + endElement.offsetHeight / 2;

        strike.style.width = `${Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)}px`;
        strike.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`;
        strike.style.left = `${startX}px`;
        strike.style.top = `${startY}px`; 
    } 
    else if ((b7 == 'O' || b7 == 'O') && (b8 == 'O' || 
        b8 == 'O') && (b9 == 'O' || b9 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
  
        b7btn.style.color = "red"; 
        b8btn.style.color = "red"; 
        b9btn.style.color = "red";
        const startElement=b7btn;
        const endElement=b9btn;
        const startX = startElement.offsetLeft + startElement.offsetWidth / 2;
        const startY = startElement.offsetTop + startElement.offsetHeight / 2;
        const endX = endElement.offsetLeft + endElement.offsetWidth / 2;
        const endY = endElement.offsetTop + endElement.offsetHeight / 2;

        strike.style.width = `${Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)}px`;
        strike.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`;
        strike.style.left = `${startX}px`;
        strike.style.top = `${startY}px`; 
    } 
    else if ((b3 == 'O' || b3 == 'O') && (b6 == 'O' || 
        b6 == 'O') && (b9 == 'O' || b9 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b3btn.style.color = "red"; 
        b6btn.style.color = "red"; 
        b9btn.style.color = "red";
        const startElement=b3btn;
        const endElement=b9btn;
        const startX = startElement.offsetLeft + startElement.offsetWidth / 2;
        const startY = startElement.offsetTop + startElement.offsetHeight / 2;
        const endX = endElement.offsetLeft + endElement.offsetWidth / 2;
        const endY = endElement.offsetTop + endElement.offsetHeight / 2;

        strike.style.width = `${Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)}px`;
        strike.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`;
        strike.style.left = `${startX}px`;
        strike.style.top = `${startY}px`; 
    } 
    else if ((b1 == 'O' || b1 == 'O') && (b5 == 'O' || 
        b5 == 'O') && (b9 == 'O' || b9 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
  
        b1btn.style.color = "red"; 
        b5btn.style.color = "red"; 
        b9btn.style.color = "red";
        const startElement=b1btn;
        const endElement=b9btn;
        const startX = startElement.offsetLeft + startElement.offsetWidth / 2;
        const startY = startElement.offsetTop + startElement.offsetHeight / 2;
        const endX = endElement.offsetLeft + endElement.offsetWidth / 2;
        const endY = endElement.offsetTop + endElement.offsetHeight / 2;

        strike.style.width = `${Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)}px`;
        strike.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`;
        strike.style.left = `${startX}px`;
        strike.style.top = `${startY}px`; 
    } 
    else if ((b3 == 'O' || b3 == 'O') && (b5 == 'O' || 
        b5 == 'O') && (b7 == 'O' || b7 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b3btn.style.color = "red"; 
        b5btn.style.color = "red"; 
        b7btn.style.color = "red";
        const startElement=b3btn;
        const endElement=b7btn;
        const startX = startElement.offsetLeft + startElement.offsetWidth / 2;
        const startY = startElement.offsetTop + startElement.offsetHeight / 2;
        const endX = endElement.offsetLeft + endElement.offsetWidth / 2;
        const endY = endElement.offsetTop + endElement.offsetHeight / 2;

        strike.style.width = `${Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)}px`;
        strike.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`;
        strike.style.left = `${startX}px`;
        strike.style.top = `${startY}px`;
    } 
    else if ((b2 == 'O' || b2 == 'O') && (b5 == 'O' || 
        b5 == 'O') && (b8 == 'O' || b8 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b1btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b9btn.disabled = true; 
  
        b2btn.style.color = "red"; 
        b5btn.style.color = "red"; 
        b8btn.style.color = "red";
        const startElement=b2btn;
        const endElement=b8btn;
        const startX = startElement.offsetLeft + startElement.offsetWidth / 2;
        const startY = startElement.offsetTop + startElement.offsetHeight / 2;
        const endX = endElement.offsetLeft + endElement.offsetWidth / 2;
        const endY = endElement.offsetTop + endElement.offsetHeight / 2;

        strike.style.width = `${Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)}px`;
        strike.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`;
        strike.style.left = `${startX}px`;
        strike.style.top = `${startY}px`; 
    } 
    else if ((b4 == 'O' || b4 == 'O') && (b5 == 'O' || 
        b5 == 'O') && (b6 == 'O' || b6 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b4btn.style.color = "red"; 
        b5btn.style.color = "red"; 
        b6btn.style.color = "red";
        const startElement=b4btn;
        const endElement=b6btn;
        const startX = startElement.offsetLeft + startElement.offsetWidth / 2;
        const startY = startElement.offsetTop + startElement.offsetHeight / 2;
        const endX = endElement.offsetLeft + endElement.offsetWidth / 2;
        const endY = endElement.offsetTop + endElement.offsetHeight / 2;

        strike.style.width = `${Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)}px`;
        strike.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`;
        strike.style.left = `${startX}px`;
        strike.style.top = `${startY}px`; 
    }
    else {
        if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
            || b2 == 'O') && (b3 == 'X' || b3 == 'O') && 
            (b4 == 'X' || b4 == 'O') && (b5 == 'X' || 
                b5 == 'O') && (b6 == 'X' || b6 == 'O') && 
            (b7 == 'X' || b7 == 'O') && (b8 == 'X' || 
                b8 == 'O') && (b9 == 'X' || b9 == 'O')) { 
            document.getElementById('print') 
                .innerHTML = "Match Tie"; 
        }
        else { 
            if (flag == 1) { 
                document.getElementById('print') 
                    .innerHTML = "Player X Turn"; 
            } 
            else { 
                document.getElementById('print') 
                    .innerHTML = "Player O Turn"; 
            } 
        }
    }
}

var flag=1;
// Logic Functions for each block
function block1() {
    if (flag == 1) { 
        document.getElementById("b1").value = "X"; 
        document.getElementById("b1").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b1").value= "O"; 
        document.getElementById("b1").disabled = true; 
        flag = 1; 
    } 
}
function block2() {
    if (flag == 1) { 
        document.getElementById("b2").value = "X"; 
        document.getElementById("b2").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b2").value = "O"; 
        document.getElementById("b2").disabled = true; 
        flag = 1; 
    } 
}
function block3() {
    if (flag == 1) { 
        document.getElementById("b3").value = "X"; 
        document.getElementById("b3").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b3").value = "O"; 
        document.getElementById("b3").disabled = true; 
        flag = 1; 
    } 
}
function block4() {
    if (flag == 1) { 
        document.getElementById("b4").value = "X"; 
        document.getElementById("b4").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b4").value = "O"; 
        document.getElementById("b4").disabled = true; 
        flag = 1; 
    } 
}
function block5() {
    if (flag == 1) { 
        document.getElementById("b5").value = "X"; 
        document.getElementById("b5").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b5").value = "O"; 
        document.getElementById("b5").disabled = true; 
        flag = 1; 
    } 
}
function block6() {
    if (flag == 1) { 
        document.getElementById("b6").value = "X"; 
        document.getElementById("b6").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b6").value = "O"; 
        document.getElementById("b6").disabled = true; 
        flag = 1; 
    } 
}
function block7() {
    if (flag == 1) { 
        document.getElementById("b7").value = "X"; 
        document.getElementById("b7").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b7").value = "O"; 
        document.getElementById("b7").disabled = true; 
        flag = 1; 
    } 
}
function block8() {
    if (flag == 1) { 
        document.getElementById("b8").value = "X"; 
        document.getElementById("b8").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b8").value = "O"; 
        document.getElementById("b8").disabled = true; 
        flag = 1; 
    } 
}
function block9() {
    if (flag == 1) { 
        document.getElementById("b9").value = "X"; 
        document.getElementById("b9").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b9").value = "O"; 
        document.getElementById("b9").disabled = true; 
        flag = 1; 
    } 
}

// Reset Button Function
function reset() { 
    location.reload(); 
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
} 