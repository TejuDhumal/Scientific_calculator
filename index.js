let screenvalue="";
let buttons= document.querySelectorAll('.button');
for(item of buttons){
    item.addEventListener('click', (e)=>{
       
     if(e.target.innerHTML == '='){
            screenvalue=eval(screenvalue);
            document.querySelector('input').value = screenvalue;
        }
        else if(e.target.innerHTML == 'c'){
            screenvalue="";
            document.querySelector('input').value = screenvalue;
        }
    else{
    console.log(e.target)
    screenvalue = screenvalue + e.target.innerHTML;
    document.querySelector('input').value = screenvalue;

    }
    });
}
     
        function backspc(){
            document.querySelector("input").value= document.querySelector("input").value.substr(0, document.querySelector("input").value.length - 1);
           }

       function square(){
        screenvalue=screenvalue*screenvalue;
            document.querySelector("input").value=screenvalue;
            
       }
       function sqrt(){
            screenvalue=Math.sqrt(screenvalue);
            document.querySelector("input").value=screenvalue;
       }

       function pi() {
        screenvalue=3.14159265359;
        document.querySelector("input").value = screenvalue;
    }
    function cube(){
        screenvalue=screenvalue*screenvalue*screenvalue;
            document.querySelector("input").value=screenvalue;
    }
    function cuberoot(){
        screenvalue=Math.cuberoot(screenvalue);
        document.querySelector("input").value=screenvalue
    }

        
        
        

