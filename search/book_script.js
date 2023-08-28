fetch('book_data.json')
    .then(response => response.json())
    .then(data => {
        const bookList = document.getElementById('bookList');

        // Loop through the book data and generate buttons
        data.forEach(book => {
            const button = document.createElement('button');
            button.innerText = `${book.name} by ${book.author}`;
            button.addEventListener('click', () => redirectToSearchPage(book.name));
            bookList.appendChild(button);
        });
    })
    .catch(error => console.error('Error loading book data:', error));

function redirectToSearchPage(bookName) {
    window.location.href = `book_search.html?book=${encodeURIComponent(bookName)}`;
}
