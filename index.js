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

function getPlayerChoice(choice)
{
    var convertedChoice = 0;
    switch(choice)
    {
        case "ROCK":
            convertedChoice = 0;
            break;
        
        case "PAPER":
            convertedChoice = 1;
            break;

        case "SCISSORS":
            convertedChoice = 2;
            break;
    }
    return convertedChoice;
}

let pWins = 0;
let cWins = 0;

function playFive(gameResult)
{
    if (gameResult == 1)
    {
        ++pWins;
    }
    else if (gameResult == 2)
    {
        ++cWins;
    }
    else
    {
        ++pWins;
        ++cWins;
    }

    if (pWins + cWins >= 5)
    {
        alert("Game over!")
        if (pWins > cWins)
        {
            alert("You are victorious!");
        }
        else if (cWins > pWins)
        {
            alert("The computer was victorious :(");
        }
        else
        {
            alert("Complete DRAW!");
        }
        pWins = 0;
        cWins = 0;
    }
}

function playRound(choice)
{
    var cChoice = getComputerChoice();
    var pChoice = getPlayerChoice(choice);

    if (cChoice == 0 && pChoice == 1 || cChoice == 1 && pChoice == 2 || cChoice == 2 && pChoice == 0)
    {
        alert("You win!");
        playFive(1);
    }
    else if (cChoice == 0 && pChoice == 2 || cChoice == 1 && pChoice == 0 || cChoice == 2 && pChoice == 1)
    {
        alert("You lose!");
        playFive(2);
    }
    else
    {
        alert("Draw!");
        playFive(0);
    }
}