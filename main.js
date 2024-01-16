/**
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. 
*/


// let formHtml = document.forms['myForm'];
// let menuHtml = formHtml.menu
// let options = formHtml.menu.options
let btnHtml = document.getElementById("btn")
let gridHtml= document.getElementById("grid")

btnHtml.addEventListener('click', function(){
    // creo 100 box
    for(i = 1; i <= 100; i++){
        // creo box generale
        let box = document.createElement("div")

        // gli inserisco il numero all'interno
        box.innerHTML = `<span>${i}</span>`
        
        // gli do la calsse
        box.classList.add("box-easy")

        
        // do la funzione al click
        box.addEventListener('click', function(){

            //seleziono la box cliccata
            let spanHtml = this.querySelector("span").innerText

            //gli aggiungo il colore azzurro
            this.classList.toggle("blue")

            // mostro nel log il numero selezionato 
            console.log(`Hai cliccato il numero: ${spanHtml}`);
        })

        // inserisco all'interno della griglia 
        grid.appendChild(box)
    }
}, {once: true});


















// formHtml.onsubmit = function clickEasy(e){
//     e.preventDefault();
//     let optionValue = this.menu.value;
    

//     if (optionValue == "easy") {

//         for( let i = 0; i < 100; i++ ){
//             let grid = document.getElementById("gridEasy")
//             let box = document.createElement("div")
//             box.innerHTML = "Ciao"
//             box.classList.add("box-easy")
//             grid.appendChild(box)
//             console.log(box); 
//         }
        
        
            
//     } 

// }





//SINTASSI PER CREARE BOX INTERNO IF
/*
if (optionValue == "easy") {
    let gridEasyHtml = document.getElementById("gridEasy")
    let boxEasyHtml = document.createElement("div")
    boxEasyHtml.innerHTML = "Ciao"
    boxEasyHtml.classList.add("box")
    gridEasyHtml.appendChild(boxEasyHtml) 
        
}
*/

