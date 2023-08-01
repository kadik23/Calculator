function appendToDisplay(buttonClick){
    display = document.getElementById("display")
    // cas you click '.' it test if you click '.' more than once
    if(buttonClick=="."){
        let index = (display.value).indexOf(buttonClick);
        if(index!==-1){
            return
        }
        else{         
            display.value+=buttonClick
        }
    }else{
        display.value+=buttonClick
    }
}


function clearDisplay(){
    document.getElementById("display").value=''
    document.getElementById("result").value='0'
}

function calculate(){
    display = document.getElementById("display")
    let value=display.value
    
    if(value!=""){
        let finalResult=document.getElementById("result")
        // division by zero is undefined in math
        if(value.includes("/0") || value.includes("%0")){
            finalResult.style.fontSize="0.9rem";
            finalResult.value="Error: Division by zero is not allowed"
            display.value=""
            return;
        }
        let result=value.replace("^", "**")  //offset ^ by ** in js syntax
        result = result.replace(/√([0-9.]+)/g, "Math.sqrt($1)"); // Replace √x with Math.sqrt(x)      
        if (result.length >=9) {
            // Reduce font size if the result is too long
            finalResult.style.fontSize = "1.5rem";
        } 
        result=eval(result) //calculate..
        finalResult.value=result
        display.value=""
    }else{
        showAlert("Please do any operation !");
    }

}

function returnByOne(){
    display=document.getElementById("display")
    display.value = display.value.slice(0, -1);
}


function showAlert(message) {
    ShowWarningAlert=document.getElementById("ShowWarningAlert")
    ShowWarningAlert.classList.toggle("hidden")
    // Set a timer to hide the alert after 2 seconds
    setTimeout(() => {
        ShowWarningAlert.classList.toggle("animate-[fade-out-up_1s_ease-in-out]")    
        setTimeout(()=>{
            ShowWarningAlert.classList.toggle("hidden") 
            ShowWarningAlert.classList.toggle("animate-[fade-out-up_1s_ease-in-out]")    
        },1000)         
    }, 4000);
}
