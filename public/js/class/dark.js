let darkmd = false; 
let nav = document.querySelector("nav");


export let darkmode = () => {
    if(darkmd){
        document.body.style.backgroundColor="azure"; 
        nav.style.backgroundColor="#ccc";
        darkmd=false;
    }else{
        document.body.style.backgroundColor="#393f3f"; 
        nav.style.backgroundColor="#686868"; 
        darkmd=true;
    }  
}
