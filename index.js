/*
Premise: Single-player rock paper scissors game against the computer.

Make a function with no parameters
    Return a random number between 0 and 2

Make a function with no parameters
    Make a variable to hold their choice
    Prompt the user for either rock, paper, or scissors
    Re-do if they input nothing or spell something wrong
    Convert their choice into a 0, 1, or 2
    Return their converted choice

Make a function that takes the two choices from computer and player
    Check for fail conditions for the computer
    Check for win conditions for the computer
    Check for a draw
    Print the result

Make a variable and call function1
Make a variable and call function2
Call function3 with results of functions 1 & 2
*/

function getComputerChoice()
{
    return Math.floor(Math.random() * 3);1
}

function getPlayerChoice()
{
    let choice = prompt("Pick(rock, paper, scissors): ");
    while(true)
    {
        if (choice == "rock" || choice == "Rock" || choice == "paper" || choice == "Paper" || choice == "scissors" || choice == "Scissors")
        {
            break;
        }
        else
        {
            choice = prompt("Pick(rock, paper, scissors): ");
        }
    }

    let convertedChoice = 0;
    switch(choice)
    {
        case "Rock":
        case "rock":
            convertedChoice = 0;
            break;
        
        case "Paper":
        case "paper":
            convertedChoice = 1;
            break;

        case "Scissors":
        case "scissors":
            convertedChoice = 2;
            break;
    }
    return convertedChoice;
}

function playGame(cChoice, pChoice)
{
    if (cChoice == 0 && pChoice == 1 || cChoice == 1 && pChoice == 2 || cChoice == 2 && pChoice == 0)
    {
        alert("You win!");
        return 1;
    }
    else if (cChoice == 0 && pChoice == 2 || cChoice == 1 && pChoice == 0 || cChoice == 2 && pChoice == 1)
    {
        alert("You lose!");
        return 2;
    }
    else
    {
        alert("Draw!");
        return 0;
    }
}

let cChoice = getComputerChoice();
let pChoice = getPlayerChoice();

console.log(cChoice);
console.log(pChoice);

let game = playGame(cChoice, pChoice);
console.log(game);
