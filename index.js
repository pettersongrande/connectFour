const playBtn   = document.querySelector(".playBtn");
const infoBtn   = document.querySelector("#infBtn");


playBtn.addEventListener("click",(e) =>{

    e.preventDefault();
    window.location.href = '/connectFour/gamepage.html';
});

infoBtn.addEventListener("click",(e)=>{
    info()

});



function info (){
    alert("Players take turns placing checkers into the grid until one player has a row of 4 of his or her checkers in a row. The row can be up and down (vertical), across (horizontal), or diagonal. 4. The first player to make a row wins the game.")
};