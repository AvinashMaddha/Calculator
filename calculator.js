let clearBtn = document.getElementById("clearBtn");
let userInput = document.getElementById("userInput");
let deleteBtn = document.getElementById("deleteBtn")
deleteBtn.addEventListener("click", () => {
    let enterredText = userInput.value;
    userInput.value = enterredText.slice(0,enterredText.length-1);
})
clearBtn.addEventListener("click", () => {
    userInput.value = "";
})
 
let btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
    
    btn.addEventListener("click",()=> {
    
        
        if(btn.textContent != "="){
            userInput.value += btn.textContent
        }
        else{
            if(userInput.value === ""){
                userInput.value = ""
            }else{
                let val = userInput.value;
                userInput.value = eval(val);
            }
            
         } 
    })
})
