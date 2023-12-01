const buttonEl = document.getElementById("roll-button");
const diceEi = document.getElementById("dice");
let historyList = [];
const rollHistoryEl = document.getElementById("roll-history");



function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    console.log(rollResult);
    const diceFace = getDiceFace(rollResult);
    diceEi.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

function updateRollHistory() {
    rollHistoryEl.innerHTML = "";
    for(let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <spam> ${getDiceFace(historyList[i])} </spam>`
        rollHistoryEl.appendChild(listItem);
    }
}

function getDiceFace(rollResult) {
    switch(rollResult) {
        case 1: 
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}



buttonEl.addEventListener("click", () => {
    diceEi.classList.add("roll-animation");
    setTimeout(() => {
        diceEi.classList.remove("roll-animation")
        rollDice();
    }, 1000);

    });