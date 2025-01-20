// Väntar tills hela DOM är laddad innan koden körs
document.addEventListener("DOMContentLoaded", () => {
  // Hämtar alla element med klassen "book-card"
  const bookCards = document.querySelectorAll(".book-card");

  // Hämtar listan över olästa böcker från localStorage, eller skapar en tom lista om det inte finns någon
  let unreadBooks = JSON.parse(localStorage.getItem("unreadBooks")) || [];

  // Funktion för att hantera tillägg eller borttagning av bok-ID från olästa böcker
  const toggleUnreadBooks = (bookId, button) => {
    // Om boken redan finns i listan över olästa böcker
    if (unreadBooks.includes(bookId)) {
      // Ta bort boken från listan
      const index = unreadBooks.indexOf(bookId);
      unreadBooks.splice(index, 1);

      // Uppdatera knappens text och stil för att visa att boken är läst
      button.textContent = "Read";
      button.classList.add("read");
    } else {
      // Lägg till boken i listan över olästa böcker
      unreadBooks.push(bookId);

      // Uppdatera knappens text och stil för att visa att boken är oläst
      button.textContent = "Unread";
      button.classList.remove("read");
    }

    // Spara den uppdaterade listan över olästa böcker i localStorage
    localStorage.setItem("unreadBooks", JSON.stringify(unreadBooks));
  };

  // Itererar över varje "book-card"-element
  bookCards.forEach((card) => {
    // Hämtar bokens unika ID från "data-id"-attributet
    const bookId = card.dataset.id;

    // Skapar en knapp för att växla lässtatus
    const readToggleButton = document.createElement("button");
    readToggleButton.classList.add("read-toggle-btn");

    // Sätter initial text och stil på knappen baserat på om boken är oläst eller inte
    if (unreadBooks.includes(bookId)) {
      readToggleButton.textContent = "Unread";
    } else {
      readToggleButton.textContent = "Read";
      readToggleButton.classList.add("read");
    }

    // Lägger till en klickhändelse på knappen för att växla lässtatus
    readToggleButton.addEventListener("click", () => {
      toggleUnreadBooks(bookId, readToggleButton);
    });

    // Lägger till knappen i bokelementet
    card.appendChild(readToggleButton);
  });
});
