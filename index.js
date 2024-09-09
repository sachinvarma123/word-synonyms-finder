function findSynonyms() {
    const inputWord = document.getElementById('wordInput').value.trim();
    if (inputWord === '') {
        alert('Please enter a word.');
        return;
    }

    const url = `https://api.datamuse.com/words?rel_syn=${inputWord}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const synonymsList = document.getElementById('synonymsList');
        synonymsList.textContent = '';

        if (data.length === 0) {
            synonymsList.textContent = 'No synonyms found.';
        } else {
            data.forEach(synonym => {
                const synonymElement = document.createElement('span');
                synonymElement.textContent = synonym.word + ', ';
                synonymsList.appendChild(synonymElement);
            });
        }
    })
    .catch(error => {
        console.error('Error fetching synonyms:', error);
        alert('An error occurred. Please try again later.');
    });
    document.querySelector('.result').style.display = '';
}