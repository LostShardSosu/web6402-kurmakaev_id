class JokeSubmission {
    constructor(author, category, text, isAgreed) {
        this.author = author;
        this.category = category;
        this.text = text;
        this.isAgreed = isAgreed;
    }

    printToConsole() {
        console.log('=== Новый предложенный анекдот ===');
        console.log(`Автор: ${this.author}`);
        console.log(`Тематика: ${this.category}`);
        console.log(`Текст: ${this.text}`);
        console.log(`Согласие на публикацию: ${this.isAgreed ? 'Да' : 'Нет'}`);
        console.log('==================================');
    }
}

const form = document.getElementById('jokeForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const author = document.getElementById('AuthorName').value;
    const category = document.getElementById('category').value;
    const text = document.getElementById('Joke').value;
    const isAgreed = document.getElementById('agree').checked;

    const newJoke = new JokeSubmission(author, category, text, isAgreed);
    newJoke.printToConsole();

    alert('Анекдот отправлен, консолька! АХАХАХАХАХАХАХАХ');
    form.reset(); 
});