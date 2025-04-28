const books = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    authorName: 'Patrick Bet-David and Greg Dinkin',
    releaseYear: 2001,
  },
  {
    title: 'Atomic Habits',
    authorName: 'James Clear',
    releaseYear: 1690,
  },
  {
    title:
      'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    authorName: 'Patrick Bet-David',
    releaseYear: 1999,
  },
];

function sortByYear(book1, book2) {
    return book1.releaseYear < book2.releaseYear ? -1 : book1.releaseYear > book2.releaseYear ? 1 : 0;
}

const filteredBooks = books.filter((book) => book.releaseYear > 1950);
filteredBooks.sort(sortByYear);
console.log(filteredBooks);