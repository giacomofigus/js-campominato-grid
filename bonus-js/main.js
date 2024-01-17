//prendo il bottone
// let btnHtml = document.getElementById("button")

// //aggiungo listener
// btnHtml.addEventListener('click', createGrid);

// //funzione on click
// function createGrid (){
//     // prendo il valore della difficoltà
//     const chooseDiff = document.getElementById("menu")

//     let difficulty

//     // aggiungo le difficoltà
//     if(chooseDiff.value === "easy"){
//         difficulty = 100
//     } else if(chooseDiff.value === "medium"){
//         difficulty = 81
//     } else if(chooseDiff.value === "hard"){
//         difficulty = 49
//     }

//     console.log(difficulty);
//     const gridHtml = document.getElementById('grid');

//     for(let i = 0; i < difficulty; i++){
//         createBox(gridHtml, i, difficulty)
//     }

//     // creo i quadrati in base alla difficoltà
    
// }

// function createBox(divCont, index, diff){
//     let box = document.createElement("div")
//     box.classList.add("box-easy")
// }

//CORREZIONE
let btnHtml = document.getElementById("button")
let grigliaHtml = document.getElementById("grid")
const selectHtml = document.getElementById("menu")





btnHtml.addEventListener('click', function(){
    grigliaHtml.style.setProperty("display", "flex")

    grigliaHtml.innerHTML = ''

    // creo 100 box
    for(i = 1; i <= selectHtml.value; i++){
        // creo box generale
        let box = document.createElement("div")

        box.style.setProperty(
            "flex-basis", `calc(100% / ${Math.sqrt(selectHtml.value)}`
        )

        // gli inserisco il numero all'interno
        box.innerHTML = `<span>${i}</span>`

        //renderlo display none così che il numero si veda solo al click
        
        // gli do la calsse
        box.classList.add("box-easy")

        
        // do la funzione al click
        box.addEventListener('click', function(){

            //seleziono la box cliccata
            let spanHtml = this.querySelector("span").innerText

            //aggiungo il numero al click
            //gli aggiungo il colore azzurro
            this.classList.toggle("blue")

            // mostro nel log il numero selezionato 
            console.log(`Hai cliccato il numero: ${spanHtml}`);
        })

        // inserisco all'interno della griglia 
        grid.appendChild(box)
    }
})

