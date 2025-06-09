let qrScanner = undefined;

const tickets = [
    { id: "b9d0027e-8056-4bd0-bac6-c84df34d3f5d", tier: 1 },
    { id: "e01c7e61-ea72-4aea-bc4b-477c3dc33336", tier: 0 },
    { id: "4141", tier: 2 },
];

const ticketTiers = [
    { color: "#E44C4C", text: "SPONSOR" }, // red
    { color: "#86E61F", text: "PLAYER" }, // green
    { color: "#E6B81F", text: "NORMAL" }, // yellow
    { color: "#1F6CE6", text: "SPEAKER" }, // blue
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
    const innerContent = innerResultModal.getElementsByClassName("inner-content")[0];
    let textColor = "white";
    let backgroundColor = "black";
    let displayContent = "INVALID TICKET";

    const foundTicket = tickets.find(ticket => ticket.id === content);
    if (foundTicket !== undefined) {
        textColor = "black";
        backgroundColor = ticketTiers[foundTicket.tier].color;
        displayContent = ticketTiers[foundTicket.tier].text;
    }

    innerResultModal.style.color = textColor;
    innerResultModal.style.backgroundColor = backgroundColor;
    innerContent.innerHTML = displayContent;
    resultModal.style.display = "inline-block";
    qrScanner.stop();
};


const handleResult = (result) => {
    openResultModal(result.data, "white")
};