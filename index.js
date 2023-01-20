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
        else if(e.target.innerHTML== '√'){
            sqrt();
        }
        else if(e.target.innerHTML== '∛'){
            cuberoot();
        }
        else if(e.target.innerHTML== 'π'){
            pi();
        }
        else if(e.target.innerHTML== 'log'){
            log();
        }
        else if(e.target.innerHTML== '^2'){
            square();
        }
        else if(e.target.innerHTML== '^3'){
            cube();
        }
        else if(e.target.innerHTML== 'CE'){
            backspc();
        }
        else if(e.target.innerHTML== 'sin'){
            sin();
        }
        else if(e.target.innerHTML== 'cos'){
            cos();
        }
        else if(e.target.innerHTML== 'tan'){
            tan();
        }
        else if(e.target.innerHTML== '1/x'){
            divide();
        }
        else if(e.target.innerHTML == 'e'){
            evlaue();       
         }
         else if(e.target.innerHTML == '^y'){
            expo();
         }
         else if(e.target.innerHTML == '^10'){
            pow10();
         }
         else if(e.target.innerHTML == 'fact'){
            fact();
         }

    else{
    console.log(e.target.innerHTML);
    screenvalue = screenvalue + e.target.innerHTML;
    document.querySelector('input').value = screenvalue;

    }
    });
}
     
        function backspc(){
            document.querySelector("input").value= document.querySelector("input").value.substring(0, document.querySelector("input").value.length - 1);
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
        document.querySelector("input").value=screenvalue;
    }
    function log(){
        screenvalue=Math.log(screenvalue);
        document.querySelector("input").value=screenvalue;
    }
    function sin(){
        screenvalue=Math.sin(screenvalue);
        document.querySelector("input").value=screenvalue;
    }
    function cos(){
        screenvalue=Math.cos(screenvalue);
        document.querySelector("input").value=screenvalue;
    }
    function tan(){
        screenvalue=Math.tan(screenvalue);
        document.querySelector("input").value=screenvalue;
    }
    function divide(){
        screenvalue = 1/screenvalue;
        document.querySelector("input").value=screenvalue;
    }
    function evlaue(){
        screenvalue = 2.7182818285;
        document.querySelector("input").value=screenvalue;
    }
    function expo(){
        screenvalue = Math.pow(screenvalue,screenvalue);
        document.querySelector("input").value=screenvalue;
    }
    function pow10(){
        screenvalue = Math.pow(10,screenvalue);
        document.querySelector("input").value=screenvalue;
    }
    function fact(){
        var facto=1;
        for(var i=screenvalue;i>=1; i--){
             facto=facto*i;
        }
        screenvalue=facto;
        document.querySelector("input").value= screenvalue;
    }
    
        
        
        

