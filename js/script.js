console.log("Hello World!");

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return `rock`;
        case 1:
            return `paper`;
        case 2:
            return `scissor`;
    }
}

function getHumanChoice() {
    let choice = prompt(`rock, paper or scissor?`).toLowerCase();

    let properChoice = false;
    while (properChoice != true) {
        if (choice == `rock` || choice == `paper` || choice == `scissor`) {
            properChoice = true;
        }
        else {
            choice = prompt(`rock, paper or scissor?`).toLowerCase();
        }
    }
    return choice;
}


function playRound(computerChoice, humanChoice) {

    console.log(`comp: ${computerChoice} -- human: ${humanChoice}`);

    let humanPoint = 0;
    let compPoint = 0;
    let statement = (choice) => {
        if (humanPoint > compPoint) {
            return `human has won with ${choice} -- HUMAN: ${humanPoint} -- COMP: ${compPoint}`;
        }
        else if (humanPoint < compPoint) {
            return `comp has won with ${choice} -- HUMAN: ${humanPoint} -- COMP: ${compPoint}`;
        }
        else {
            return `both chose ${choice}, tie`;
        }
    };

    if (computerChoice == `rock` && humanChoice == `scissor` || computerChoice == `paper` && humanChoice == `rock` || computerChoice == `scissor` && humanChoice == `paper`) {
        compPoint++;
        console.log(statement(computerChoice));
    }
    else if (humanChoice == `rock` && computerChoice == `scissor` || humanChoice == `paper` && computerChoice == `rock` || humanChoice == `scissor` && computerChoice == `paper`) {
        humanPoint++;
        console.log(statement(humanChoice));
    }
    else {
        console.log(`tie`);
        console.log(statement(computerChoice));
    }

}

playRound(getComputerChoice(), getHumanChoice());