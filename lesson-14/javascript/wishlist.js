const bookList = document.querySelector(".book-list");

// Array of book objects
const books = [
  {
    id: "1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://via.placeholder.com/150",
    description:
      "A timeless classic that explores themes of justice and morality.",
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    image: "https://via.placeholder.com/150",
    description:
      "A dystopian novel that delves into the dangers of totalitarianism.",
  },
  {
    id: "3",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://via.placeholder.com/150",
    description: "A tale of love, wealth, and the American Dream in the 1920s.",
  },
];

// Load wishlist from localStorage
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// Render book list as cards
const renderBooks = () => {
  books.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.dataset.id = book.id;
    listItem.classList.add("book-card");

    // Image
    const image = document.createElement("img");
    image.src = book.image;
    image.alt = book.title;
    image.classList.add("book-image");

    // Book title
    const title = document.createElement("h3");
    title.textContent = book.title;

    // Author
    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;
    author.classList.add("book-author");

    // Description
    const description = document.createElement("p");
    description.textContent = book.description;
    description.classList.add("book-description");

    // Wishlist button
    const wishlistButton = document.createElement("button");
    wishlistButton.classList.add("wishlist-btn");

    // Check if the book is in the wishlist
    wishlistButton.innerHTML = wishlist.some((wish) => wish.id === book.id)
      ? "❤️" // Marked as wishlisted
      : "🤍"; // Not wishlisted

    // Add event listener directly on the wishlist button
    wishlistButton.addEventListener("click", () => {
      const wishlistIndex = wishlist.findIndex((wish) => wish.id === book.id);

      if (wishlistIndex > -1) {
        // Remove from wishlist
        wishlist.splice(wishlistIndex, 1);
        wishlistButton.innerHTML = "🤍"; // Change to unmarked
      } else {
        // Add to wishlist
        wishlist.push(book);
        wishlistButton.innerHTML = "❤️"; // Change to marked
      }

      // Save updated wishlist to localStorage
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    });

    listItem.appendChild(image);
    listItem.appendChild(title);
    listItem.appendChild(author);
    listItem.appendChild(description);
    listItem.appendChild(wishlistButton);
    bookList.appendChild(listItem);
  });
};

// Initial render
renderBooks();
