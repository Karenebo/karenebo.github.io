// For page 2
let elements = document.getElementsByName('cssProperty');

function mod() {

    
    console.log("button clicked!");

   

    for ( let i = 0; i < elements.length; i++ )

        {

            let cssProperty = elements[i].getAttribute('id');

            let cssValue = elements[i].value;

            let div = document.getElementById('modify');

            div.style[cssProperty] = cssValue;


          console.log(elements[i].value);  
    
    }; 
};

let btn = document.getElementById('set');

if(btn){
   btn.addEventListener('click', mod);
}
else{
   console.log("Button not found")
};


/* just for reference, otherwise please ignore: 

let select = document.getElementById('background');
let btn = document.getElementById('set');
let div = document.getElementById('modify');

btn.addEventListener('click', function()
{
    div.style.backgroundColor = select.value;
}); */