// Load the score from localStorage or initialize with default values
let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = {
        userWins: 0,
        userLosses: 0,
        ties: 0
    };
}

// Initialize the score display based on the loaded score
document.getElementById('userWins').textContent = score.userWins;
document.getElementById('userLosses').textContent = score.userLosses;
document.getElementById('ties').textContent = score.ties;

const computerPicks = ["Rock", "Paper", "Scissors"];

function randomComputerPick(computerPicks) {
    let numberOfPick = computerPicks.length;
    let randomPickPosition = Math.floor(Math.random() * numberOfPick);
    let randomPick = computerPicks[randomPickPosition];
    return randomPick;
}

function playGame(userChoice) {
    const computerChoice = randomComputerPick(computerPicks);

    // Compare userChoice and computerChoice to determine the winner
    let result = '';
    if (userChoice === computerChoice) {
        result = "It's a tie!";
        score.ties++;
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You win!";
        score.userWins++;
    } else {
        result = "Computer wins!";
        score.userLosses++;
    }

    // Store the updated score in localStorage
    localStorage.setItem('score', JSON.stringify(score));

    // Display the result with an alert
    alert(`You chose ${userChoice}, and the computer chose ${computerChoice}.\n\n${result}`);

    // Update the score display
    document.getElementById('userWins').textContent = score.userWins;
    document.getElementById('userLosses').textContent = score.userLosses;
    document.getElementById('ties').textContent = score.ties;
}

function resetScore() {
    // Reset the score and update the display
    score.userWins = 0;
    score.userLosses = 0;
    score.ties = 0;
    localStorage.setItem('score', JSON.stringify(score));

    // Update the score display
    document.getElementById('userWins').textContent = score.userWins;
    document.getElementById('userLosses').textContent = score.userLosses;
    document.getElementById('ties').textContent = score.ties;

    // Remove the score from localStorage
    localStorage.removeItem('score');
}
