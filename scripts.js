let qrScanner = undefined;

const tickets = [
    { id: "1234", tier: 1 },
    { id: "1337", tier: 0 },
    { id: "4141", tier: 2 },
];

const ticketTiers = [
    { color: "#E44C4C" }, // red
    { color: "#86E61F" }, // green
    { color: "#E6B81F" }, // yellow
    { color: "#1F6CE6" }, // blue
];


const renderTickets = (id) => {
    const target = document.getElementById(id);
    let targetContents = "";
    target.innerHTML = ""; // clear

    targetContents += `<thead>`;
    targetContents += `<tr>`;
    targetContents += `<td>#</td>`;
    targetContents += `<td>ID</td>`;
    targetContents += `<td>Tier</td>`;
    targetContents += `</tr>`;
    targetContents += `</thead>`;
    targetContents += `<tbody>`;

    let i = 0;

    for (const ticket of tickets) {
        targetContents += `<tr style="background-color: ${ticketTiers[ticket.tier].color}">`;
        targetContents += `<td>${i}</td>`;
        targetContents += `<td>${ticket.id}</td>`;
        targetContents += `<td>${ticket.tier}</td>`;
        targetContents += `</tr>`;

        i += 1;
    }

    targetContents += `</tbody>`;

    target.innerHTML = targetContents;

};


const closeResultModal = () => {
    document.getElementById("result-modal").style.display = "none";
    qrScanner.start()
};

const openResultModal = (content, color) => {
    const resultModal = document.getElementById("result-modal");
    const innerResultModal = resultModal.getElementsByClassName("inner")[0];
    innerResultModal.style.backgroundColor = color;
    innerResultModal.getElementsByClassName("inner-content")[0].innerHTML = content;
    resultModal.style.display = "inline-block";
    qrScanner.stop();
};


const handleResult = (result) => {
    openResultModal(result.data, "white")
};