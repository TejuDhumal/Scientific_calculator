let screenvalue="";
var screen = document.querySelector('input');
let buttons= document.querySelectorAll('.button');

for(item of buttons){
    item.addEventListener('click', (e)=>{
        
        if(e.target.innerHTML == '='){
            screenvalue=eval(screenvalue);
            document.querySelector('input').value = screenvalue;
        }
        else if(e.target.innerHTML == 'c'){
            screenvalue="";
            document.querySelector('input').value=screenvalue;
        }
        else if(e.target.innerHTML == 'CE'){
                    backspc();
        }
        else if(e.target.innerHTML == 'x^2'){
            square();
        }
        else if(e.target.innerHTML == '√'){
            sqrt();
        }
       
        else{
        var btnText=e.target.innerHTML;
        screenvalue +=btnText;
        document.querySelector('input').value = screenvalue;
        }
        function backspc() {
            screen.value = screen.value.substr(0, screen.value.length - 1);
        }
        
        function square(){
        screenvalue=math.pow(screenvalue,2);
        screen.innerHTML=screenvalue;
        }
        function sqrt(){
            screenvalue=math.sqrt(screenvalue);
            screen.innerHTML=screenvalue;
        }
        function pi() {
            screen.value = 3.14159265359;
        }
        
        
})
}

