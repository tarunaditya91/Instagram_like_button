let con=document.querySelector("#card")
let imagelove=document.querySelector("i")
let check=0

card.addEventListener('dblclick',function(){
    imagelove.style.transform= 'translate(-50%,-50%) scale(1) ';
    imagelove.style.color="red"
    setTimeout(function(){
        imagelove.style.transform= 'translate(-50%,-50%) scale(0) ';

                                                                                                                                                                                                                                                                                                                                                          
    },3000)
   
 
})