let comp = () => {
    const comp = Math.random();
    console.log(comp)

    if (comp < 0.34) return "gajah";
    if (comp => 0.34 && comp < 0.67) return "orang";
    return "semut"
}

// function getCompRes() {
//     const comp = Math.random();
//         console.log(comp)
    
//         if (comp < 0.34) return "gajah";
//         if (comp => 0.34 && comp < 0.67) return "orang";
     
// }

comp();

let change = () => {
    const imgComp = document.querySelector(".img-komputer");
    const img = ['gajah', 'semut', 'orang'];
    let i = 0;
    const start = new Date().getTime();
    setInterval(() => {
        if( new Date().getTime() - start > 1000){
            clearInterval
            return
        } 
        imgComp.setAttribute('src', 'img/' + img[i++] + ".png");
        if ( i == img.length) i = 0;
    }, 100)
}


function getResult(comp, player) {
    if ( player == comp ) return "SERI";
    if ( player == "gajah" ) return ( comp == "orang") ? "MENANG" : "KALAH";
    if ( player == "orang" ) return ( comp == "gajah") ? "KALAH" : "MENANG";
    if ( player == "semut" ) return ( comp == "orang") ? "KALAH" : "MENANG";

}

const choices = document.querySelectorAll("li img");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const compChoice = comp();
    const playerChoice = choice.className;
    const res = getResult(compChoice, playerChoice);
    change();

    setTimeout(() => {
        const info = document.querySelector(".info");
        const compImg  = document.querySelector(".img-komputer");
        compImg.setAttribute('src', 'img/' + compChoice + ".png")
        info.innerText = res
    }, 1000)
    
    })
})
// gajah.addEventListener("click", function() {
//     const compChoice = comp();
//     const playerChoice = gajah.className;
//     const res = getResult(compChoice, playerChoice);
    
//     const info = document.querySelector(".info");
//     const compImg  = document.querySelector(".img-komputer");
//     compImg.setAttribute('src', 'img/' + compChoice + ".png")
//     info.innerText = res
// })
// orang.addEventListener("click", function() {
//     const compChoice = comp();
//     const playerChoice = orang.className;
//     const res = getResult(compChoice, playerChoice);
    
//     const info = document.querySelector(".info");
//     const compImg  = document.querySelector(".img-komputer");
//     compImg.setAttribute('src', 'img/' + compChoice + ".png")
//     info.innerText = res
// })
// semut.addEventListener("click", function() {
//     const compChoice = comp();
//     const playerChoice = semut.className;
//     const res = getResult(compChoice, playerChoice);
    
//     const info = document.querySelector(".info");
//     const compImg  = document.querySelector(".img-komputer");
//     compImg.setAttribute('src', 'img/' + compChoice + ".png")
//     info.innerText = res
// })