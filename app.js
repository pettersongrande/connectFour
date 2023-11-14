// SELECTORS

const playBtn   = document.querySelector(".playBtn");
const infoBtn   = document.querySelector("#infBtn");
const maxBtn    =  document.querySelector("#maxBtn");


//  FUNCTIONATILITIES

// Preventing Default

playBtn.addEventListener("click",(e) =>{

    e.preventDefault();
    window.location.href = '/connectFour/gamepage.html';


});


