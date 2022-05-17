let id;
let z = 0;
let dwn = 0;
let grid = document.getElementsByClassName("grid");
let turn = "X";
let cnt1 = 0;
let cnt2 = 0;
let turnfor = document.querySelector(".turnfor");
const changeturn = () => {
    return turn === "X" ? "O" : "X";
}
let isgameover = false;
turnfor.innerText = turn;

Array.from(grid).forEach(element => {
    let bitem = element.querySelector(".bitem");
    element.addEventListener('click', () => {
        if (z < 1) {
            if (bitem.innerText === '') {
                bitem.innerText = turn;
                turn = changeturn();
                checkwin();
                turnfor.innerText = turn;
                dwn++;
            } else {
                alert("current cell was assigned/selected select other cell");
            }
        } else {
            alert("Game Completed ! Restart The Game");
        }
    })
})

let bitem = document.getElementsByClassName("bitem");
const checkwin = () => {
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    win.forEach(e => {
        if ((bitem[e[0]].innerText === bitem[e[1]].innerText) && (bitem[e[1]].innerText === bitem[e[2]].innerText) && (bitem[e[0]].innerText !== '')) {
            if (bitem[e[0]].innerText === "X") {
                document.querySelector(".won").innerHTML = "Player 1 :" + document.getElementById("pm1").value + "<br>Won";
                cnt1++;
                z++;
            } else {
                document.querySelector(".won").innerHTML = "Player 2 :" + document.getElementById("pm2").value + "<br>Won";
                cnt2++;
                z++;
            }
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "45vh";
            document.querySelector(".imgbox2").getElementsByTagName("video")[0].style.width = "45vh";
            vidplay();
            document.querySelector(".pl1").innerHTML = "Player 1 :" + document.getElementById("pm1").value + "<hr><br>" + cnt1;
            document.querySelector(".pl2").innerHTML = "Player 2 :" + document.getElementById("pm2").value + "<hr><br>" + cnt2;
            //  document.querySelector(".p1").innerText=cnt1;
            // document.querySelector(".p2").innerText=cnt2;
        } else if ((dwn == 8)) {
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "45vh";
            document.querySelector(".imgbox2").getElementsByTagName("video")[0].style.width = "45vh";
            document.querySelector(".won").innerHTML = "Game Drawn ! Reset the Game";
        }
    })

}


let reset = document.querySelector(".reset");
reset.addEventListener('click', () => {
    if (confirm("Want to Reset The game...")) {
        Array.from(grid).forEach(element => {
            let bitem = element.querySelector(".bitem");
            bitem.innerText = '';
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "";
            document.querySelector(".imgbox2").getElementsByTagName("video")[0].style.width = "";
            z = 0;
            dwn = 0;
        })
    }
})

let vid = document.querySelector("video");

function vidplay() {
    vid.play();
}