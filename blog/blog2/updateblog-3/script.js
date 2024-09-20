// Voting Logic
let agreeCount = 50;
let disagreeCount = 50;

document.getElementById("agree-button").addEventListener("click", function() {
    agreeCount++;
    updateVoteResults();
});

document.getElementById("disagree-button").addEventListener("click", function() {
    disagreeCount++;
    updateVoteResults();
});

function updateVoteResults() {
    let totalVotes = agreeCount + disagreeCount;
    let agreePercentage = Math.round((agreeCount / totalVotes) * 100);
    let disagreePercentage = Math.round((disagreeCount / totalVotes) * 100);

    // Update percentages
    document.getElementById("agree-percentage").textContent = `${agreePercentage}%`;
    document.getElementById("disagree-percentage").textContent = `${disagreePercentage}%`;

    // Animate bars
    let agreeBar = document.querySelector(".agree-bar");
    let disagreeBar = document.querySelector(".disagree-bar");

    // Set bar widths based on percentage
    agreeBar.style.width = `${agreePercentage}%`;
    disagreeBar.style.width = `${disagreePercentage}%`;

    // Reset positions to ensure proper alignment
    agreeBar.style.transform = `translateX(${100 - agreePercentage}%)`;
    disagreeBar.style.transform = `translateX(${disagreePercentage - 100}%)`;
}