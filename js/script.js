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

    // console.log(statement(`rock`));

    if (computerChoice == `rock`) {
        //paper wins
        if (humanChoice == `paper`) {
            humanPoint++;
            console.log(statement(humanChoice));
        }
        //scissors loses
        else if (humanChoice == `scissors`) {
            compPoint++;
            console.log(statement(computerChoice));
        }
        else {
            console.log(`tie`);
            console.log(statement(computerChoice));
        }
    }
    else if (computerChoice == `paper`) {
        //scissor wins
        if (humanChoice == `scissor`) {
            humanPoint++;
            console.log(statement(humanChoice));

        }
        //rock loses
        else if (humanChoice == `rock`) {
            compPoint++;
            console.log(statement(computerChoice));

        }
        else {
            console.log(`tie`);
            console.log(statement(computerChoice));
        }
    }
    else if (computerChoice == `scissor`) {
        //rock wins
        if (humanChoice == `rock`) {
            humanPoint++;
            console.log(statement(humanChoice));

        }
        //paper loses
        else if (humanChoice == `paper`) {
            compPoint++;
            console.log(statement(computerChoice));

        }
        else {
            console.log(`tie`);
            console.log(statement(computerChoice));
        }
    }


}

playRound(`paper`, getHumanChoice());