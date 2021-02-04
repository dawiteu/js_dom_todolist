import{dragElement} from "./class/drag.js"; 
import {Tache} from  "./class/tache.js"; 
import {darkmode} from "./class/dark.js"; 

const input = document.querySelector("input[type=text]"); 
const btnad = document.querySelectorAll("button");
const divTa = document.querySelector("div#tachelist"); // div avec tt les taches



let taches = []; // tableau avec toutes les taches ;; 

let addTache = () => { 
    if(input.value != ""){
        let thisid = taches.length; 
        let newTache = document.createElement("div");
        newTache.classList.add("tache"); 
        newTache.setAttribute("id","tno"+thisid); 
        newTache.innerHTML=
        `<input type='checkbox' /> 
         <span>${input.value}</span>
         <button>Modifier</button>
         <button>Supprimer</button>`;
        divTa.append( newTache);
            // l id console.log(newTache.getAttribute('id'));
        let posX = newTache.offsetLeft;
        let posY = newTache.offsetTop;

        //newTache.style.cssText=`position:absolute; top: ${posY}px; left: ${posX}px; `;
        // la position ;;;;;;;;  console.log(`posx ${posX} / posy ${posY} `); 

        taches.push(newTache); 

        //dragElement( document.getElementById("#"+newTache.getAttribute('id')) );
        input.value=""; 
        checktaches();
        console.log(taches);
    }
}

// pour les mod's et supp's 
let inmodif=false; // est ce que un input est 'ouvert' pour une modification? 
let dragmode=false; // est ce que le div est draggable ? 

function checktaches(){ 
    const tache = document.querySelectorAll("div.tache"); 
    tache.forEach((t) => {

        t.addEventListener("dblclick", (ev) =>{
        //     //console.log(t.getAttribute('id'));
        console.log(ev);
        console.log(ev.target);
        console.log(ev.currentTarget); 

             if(ev.target === ev.currentTarget){
                 console.log('ici');
                     t.style.border="1px solid black";
                     t.style.margin="0px";
                     t.style.position="absolute";
                     console.log(t);
                     dragElement(document.getElementById(t.getAttribute('id')));
             }

        });

        const btnin = t.querySelectorAll("button");
        //console.log(btnin[0],btnin[1]); 
            btnin.forEach((e,i) => {
                e.addEventListener("click", () => {
                    switch(i){
                        case 0:
                            if(!inmodif){
                                inmodif=true;
                                    //e.parentNode.style.draggable = "none"; 

                                let oldName = e.parentNode.children[1]; 
                                let oldValName = oldName.innerHTML; 
                                let newInput = document.createElement('input'); 
                                newInput.setAttribute('type','text');
                                newInput.setAttribute('value', oldValName); 
                                newInput.setAttribute('class','chtachename'); 
                                e.parentNode.insertBefore(newInput, e.parentNode.children[1]); 
                                e.parentNode.children[2].remove();

                                // modifs acceptation: 

                                const inptModif = document.querySelector("input.chtachename"); 

                                console.log(inptModif); 

                                inptModif.addEventListener("keyup", (ev) =>{ 
                                    if(ev.keyCode === 13 ){
                                        console.log('en train de finir modif');
                                        let newVal = inptModif.value; 
                                        let newSpan = document.createElement("span"); 
                                        newSpan.innerHTML=newVal; 

                                        inptModif.parentNode.insertBefore(newSpan, inptModif.parentNode.children[1]); 
                                        inptModif.parentNode.children[2].remove();
                                        inmodif=false;
                                    }
                                })
                            }
                        break;
                        case 1:
                            taches.splice(taches.indexOf(e.parentElement), 1); 
                                //console.log(e.parentElement);
                            console.log(taches);
                            e.parentElement.remove();
                        break;
                    }
            })
        }); 
    });
}

// buttons DO / ToDo // All 
btnad.forEach((e, i) =>{ 
    e.addEventListener('click', () =>{
        switch(i){
            case 0:
                addTache();
            break;

            case 1:
                btnad.forEach((elem) => { elem.classList.remove('active') }); 
                e.classList.add('active');
                divTa.innerHTML="";
                taches.forEach((e) =>{
                    let inputCheck = e.children[0].checked; 
                    if(inputCheck){
                        divTa.append(e);
                    }
                });
            break;

            case 2:  
            btnad.forEach((elem) => { elem.classList.remove('active') }); 
            e.classList.add('active');
                divTa.innerHTML="";
                taches.forEach((e) =>{
                    let inputCheck = e.children[0].checked; 
                    if(!inputCheck){
                        divTa.append(e);
                    }
                });
            break;
            case 3:
                btnad.forEach((elem) => { elem.classList.remove('active') }); 
                e.classList.add('active');
                divTa.innerHTML="";
                taches.forEach((e) =>{
                    divTa.appendChild(e);
                });
            break; 

            case 4:
                darkmode(); 
                //document.body.style.backgroundColor="black";
            break;
        }
    })
})



// si enter DANS l'input du haut                    // enter ?    ; 
input.addEventListener("keyup", (event) => event.keyCode === 13 ? addTache() : null ); 


console.log(taches);