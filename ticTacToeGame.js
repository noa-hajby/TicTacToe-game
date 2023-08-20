
let turn = 0;
let playerOne = '';
let playerTwo = '';

function load() {
    const tds = Array.from(document.getElementsByTagName("td"));
    tds.map((element) => {
        element.onclick = () => handaleClick(element);
    })
}

function restartGame() {
    document.getElementById('startGameDiv').style.display = "block";
    document.getElementById('tableWarp').style.display = "none";
    const tds = Array.from(document.getElementsByTagName("td"));
    tds.map((element) => {
        element.innerHTML = "";
    });
}

function startGame() {
    playerOne = document.getElementById("playerOne").value;
    playerTwo = document.getElementById("playerTwo").value;
    if (playerTwo == "" || playerOne == "") {
        alert("please insert players name");
        return;
    }
    document.getElementById("turnPlayer").innerText = playerOne + ":";
    document.getElementById('startGameDiv').style.display = "none";
    document.getElementById('tableWarp').style.display = "block";
}

function handaleClick(e) {
    if (e.innerHTML != "")
        return;

    if (turn % 2 == 0) {
        document.getElementById("turnPlayer").innerText = playerTwo + ":";
        e.innerHTML = "x";
    }
    else {
        document.getElementById("turnPlayer").innerText = playerOne + ":";
        e.innerHTML = "o";
    }
    turn++;
    checkWinner()
}

function checkWinner() {
    let tds = Array.from(document.getElementsByTagName("td"));
    tds = tds.map((element, index) => {
        return element.innerText
    });
    console.log({ tds })
    if (tds[0] == tds[1] && tds[1] == tds[2] && tds[0] != "") {
        winner(tds[0]);
    }
    else if (tds[3] == tds[4] && tds[4] == tds[5] && tds[3] != "") {
        winner(tds[3]);
    }
    else if (tds[6] == tds[7] && tds[7] == tds[8] && tds[6] != "") {
        winner(tds[6]);
    }
    else if (tds[0] == tds[3] && tds[3] == tds[6] && tds[0] != "") {
        winner(tds[0]);
    }
    else if (tds[1] == tds[4] && tds[4] == tds[7] && tds[1] != "") {
        winner(tds[1]);
    }
    else if (tds[2] == tds[5] && tds[5] == tds[8] && tds[2] != "") {
        winner(tds[2]);
    }
    else if (tds[2] == tds[4] && tds[4] == tds[6] && tds[2] != "") {
        winner(tds[2]);
    }
    else if (tds[0] == tds[4] && tds[4] == tds[8] && tds[0] != "") {
        winner(tds[0]);
    } else if (tds[0] != "" && tds[1] != "" && tds[2] != "" && tds[3] != "" && tds[4] != "" && tds[5] != "" && tds[6] != "" && tds[7] != "" && tds[8] != "") {
        winner();
    }
}

function winner(value) {
    setTimeout(() => {
        if (value == "x")
            alert(playerOne + ' is winner')
        else if (value == "o")
            alert(playerTwo + ' is winner')
        else
            alert('The game over');
        restartGame();
    }, 500)

}