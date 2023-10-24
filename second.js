const paragraph = document.getElementById('paragraph');

const sentences = paragraph.textContent.split('. ');
paragraph.innerHTML = sentences.join('.<br>');

const words = paragraph.textContent.split(' ');
words.forEach(word => {
    if (word.length > 8) {
        paragraph.innerHTML = paragraph.innerHTML.replace(word, `<span class="highlight">${word}</span>`);
    }
});

const sourceLink = document.createElement('a');
sourceLink.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html";
sourceLink.textContent = "Source";
paragraph.insertAdjacentElement('afterend', sourceLink);

const wordCount = paragraph.textContent.split(/\s+/).length;
const wordCountElement = document.createElement('p');
wordCountElement.textContent = `Word Count: ${wordCount}`;
paragraph.insertAdjacentElement('afterbegin', wordCountElement);

paragraph.innerHTML = paragraph.innerHTML.replace(/\?/g, '&#129300;');
paragraph.innerHTML = paragraph.innerHTML.replace(/!/g, '&#128562;');
