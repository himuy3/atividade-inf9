const candidates = [
    { id: 1, name: "Lula", votes: 0 },
    { id: 2, name: "Bolsonaro", votes: 0 },
    { id: 3, name: "Ciro Gomes", votes: 0 },
];

const votingForm = document.getElementById("voting-form");
const candidatesList = document.getElementById("candidates-list");
const votingSection = document.getElementById("voting-section");
const resultSection = document.getElementById("result-section");
const resultMessage = document.getElementById("result-message");

candidates.forEach((candidate) => {
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "candidate";
    radioInput.value = candidate.id;

    const label = document.createElement("label");
    label.innerText = candidate.name;

    const listItem = document.createElement("div");
    listItem.classList.add("candidate-item");
    listItem.appendChild(radioInput);
    listItem.appendChild(label);

    candidatesList.appendChild(listItem);
});

function submitVote() {
    const selectedCandidate = document.querySelector(
        'input[name="candidate"]:checked'
    );
    if (selectedCandidate) {
        const candidateId = parseInt(selectedCandidate.value);
        const votedCandidate = candidates.find(
            (candidate) => candidate.id === candidateId
        );
        votedCandidate.votes++;

        votingSection.classList.add("hidden");
        resultSection.classList.remove("hidden");
        resultMessage.innerText = `Você votou no ${votedCandidate.name}. Total de votos para ${votedCandidate.name}: ${votedCandidate.votes}.`;
    } else {
        alert("Por favor, selecione um candidato antes de votar.");
    }
}
