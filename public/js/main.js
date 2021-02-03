import{dragElement} from "./class/drag.js"; 
import {Tache} from  "./class/tache.js"; 


const input = document.querySelector("input[type=text]"); 
const btnad = document.querySelector("button");
const divTa = document.querySelector("div#tachelist"); // div avec tt les taches
const tache = document.querySelectorAll("div.taches"); 


let taches = []; // tableau avec toutes les taches ;; 



btnad.addEventListener("click", () =>{ 

    if(input.value != ""){
        let thisid = taches.length; 

        let newTache = document.createElement("div");
        newTache.classList.add("tache"); 
        newTache.setAttribute("id","tno"+thisid); 
        newTache.innerHTML=
        `<input type='checkbox' checked='false' /> 
         <span>${input.value}</span>
         <button>Mod</button>
         <button>sup</button>`;
        divTa.append( newTache);

        console.log(newTache.getAttribute('id'));
        
        let posX = newTache.offsetLeft;
        let posY = newTache.offsetTop;

        //newTache.style.cssText=`position:absolute; top: ${posY}; left: ${posX}; `;
        console.log(`posx ${posX} / posy ${posY} `); 

        taches.push(newTache); 

        //dragElement( document.getElementById("#"+newTache.getAttribute('id')) );
        console.log(taches);
    }

});



console.log(taches);