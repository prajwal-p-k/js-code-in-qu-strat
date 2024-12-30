

function countParagraphs() {
    const text = document.getElementById('paragraphTextarea').value;
    if (!text) {
        alert('the text count is 0 Please enter some text.');
        return;
    }

   
    const paragraphCount = text.replace(/\n$/gm, '').split(/\n/).length;


    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `Total number of paragraphs: ${paragraphCount}`;
}
