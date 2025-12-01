function startGame() {
    console.log("game started");
    document.getElementById("p1Play").disabled = false;
    document.getElementById("p2Play").disabled = false;
    document.getElementById("restart").disabled = false;
    document.getElementById("start").disabled = true;
}

function restart() {
    window.location.reload();
}


const diceImages = {
    1: "dice1.png",
    2: "dice2.webp",
    3: "dice3.png",
    4: "dice4.png",
    5: "dice5.webp",
    6: "dice6.png"
};


// PLAYER 1
function p1Play() {
    console.log("Player1 Playing");

    let score = Number(document.getElementById("player1").innerText);

    const DF = Math.floor(Math.random() * 6) + 1;

    document.getElementById("player1DiceImg").src = diceImages[DF];

    if (DF === 6) {
        score += DF;
        document.getElementById("player1").innerText = score;
        alert("Player 1 got 6! Extra turn.");
    } else {
        score += DF;
        document.getElementById("player1").innerText = score;

        
        document.getElementById("p1Play").disabled = true;
        document.getElementById("p2Play").disabled = false;
    }
}

// PLAYER 2
function p2Play() {
    console.log("Player2 Playing");

    let score = Number(document.getElementById("player2").innerText);

    const DF = Math.floor(Math.random() * 6) + 1;

    document.getElementById("player2DiceImg").src = diceImages[DF];

    if (DF === 6) {
        score += DF;
        document.getElementById("player2").innerText = score;
        alert("Player 2 got 6! Extra turn.");
    } else {
        score += DF;
        document.getElementById("player2").innerText = score;

        document.getElementById("p2Play").disabled = true;
        document.getElementById("p1Play").disabled = false;
    }
}
