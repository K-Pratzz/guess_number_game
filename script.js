let randomNumber = Math.floor(Math.random() * 10) + 1;

document.getElementById("guessBtn").addEventListener("click", function() {
    let guess = Number(document.getElementById("guessInput").value);

    if (guess === randomNumber) {
        document.getElementById("message").textContent = "Correct!";
    } else {
        document.getElementById("message").textContent = "Wrong! Try again.";
    }
});

document.getElementById("resetBtn").addEventListener("click", function() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById("message").textContent = "";
    document.getElementById("guessInput").value = "";
});