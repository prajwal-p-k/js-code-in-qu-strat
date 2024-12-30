// Function to generate random paragraphs
function generateRandomParagraph() {
    const sentences = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Vestibulum quis augue in lorem placerat fermentum a ac magna.",
        "Aliquam erat volutpat. Donec vehicula bibendum metus.",
        "Curabitur ac libero eu nunc sollicitudin blandit.",
        "Proin sodales erat a lorem ultricies dapibus.",
        "Nullam hendrerit nisi nec leo pharetra, in facilisis urna aliquet.",
        "Sed convallis magna sit amet nibh tristique tincidunt.",
        "Integer scelerisque sapien non justo commodo, vitae laoreet metus sollicitudin."
    ];

    let paragraph = '';
    for (let i = 0; i < 4; i++) { // Generates a 4-sentence paragraph
        const randomIndex = Math.floor(Math.random() * sentences.length);
        paragraph += sentences[randomIndex] + " ";
    }

    return paragraph.trim();
}

// Function to generate and display random paragraphs based on user input
function generateParagraphs() {
    let paragraphs = [];
    const numParagraphs = parseInt(document.getElementById('numParagraphs').value); // Get the user input
    const paragraphContainer = document.getElementById('paragraphs');
    const countContainer = document.getElementById('count');

    paragraphContainer.innerHTML = ''; // Clear any previous paragraphs
    countContainer.innerHTML = ''; // Clear previous count

    // Validate user input
    if (isNaN(numParagraphs) || numParagraphs < 1) {
        alert('Please enter a valid number greater than 0.');
        return;
    }

    // Generate paragraphs based on user input
    for (let i = 0; i < numParagraphs; i++) {
        const paragraph = generateRandomParagraph();
        paragraphs.push(paragraph);
        paragraphContainer.innerHTML += `<p>Paragraph ${i + 1}: ${paragraph}</p>`;
    }

    // Display paragraph count
    countContainer.innerHTML = `Total number of paragraphs: ${paragraphs.length}`;
}
