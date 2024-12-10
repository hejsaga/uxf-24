// Array av produktobjekt
const products = [
  {
    id: "1",
    name: "Trådlösa Hörlurar",
    image: "https://via.placeholder.com/150",
    price: "$199.00",
    description:
      "Högkvalitativa trådlösa hörlurar med brusreducering och 20 timmars batteritid.",
  },
  {
    id: "2",
    name: "Smartphone-ställ",
    image: "https://via.placeholder.com/150",
    price: "$25.00",
    description:
      "Ett snyggt och justerbart ställ för smartphones, perfekt för handsfree-videosamtal eller att titta på filmer.",
  },
  {
    id: "3",
    name: "Portabel Mixer",
    image: "https://via.placeholder.com/150",
    price: "$49.99",
    description:
      "En kompakt och kraftfull portabel mixer för supersläta smoothies när du är på språng.",
  },
];

const productList = document.querySelector(".product-list");
let favorites = [];

// Funktion för att rendera produkterna
const renderProduct = () => {
  products.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.dataset.id = product.id;
    listItem.classList.add("product-card");

    // Skapar och lägger till produktbild
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.classList.add("product-image");

    // Skapar och lägger till produktnamn
    const name = document.createElement("h3");
    name.textContent = product.name;

    // Skapar och lägger till produktpris
    const price = document.createElement("p");
    price.textContent = product.price;
    price.classList.add("product-price");

    // Skapar och lägger till produktbeskrivning
    const description = document.createElement("p");
    description.textContent = product.description;
    description.classList.add("product-description");

    // Skapar och lägger till favoritknapp
    const favButton = document.createElement("button");
    favButton.classList.add("fav-btn");

    // Kontrollera om produkten redan finns i favoritlistan
    const productIsInFavoriteList = favorites.some(
      (fav) => fav.id === product.id
    );
    favButton.innerHTML = productIsInFavoriteList
      ? "❤️" // Markerad som favorit
      : "🤍"; // Inte markerad som favorit

    // Lägger till klickhändelse för favoritknappen
    favButton.addEventListener("click", () => {
      const favoriteIndex = favorites.findIndex(
        (favoriteItem) => favoriteItem.id === product.id
      );

      if (favoriteIndex > -1) {
        // Ta bort produkten från favoriter
        favorites.splice(favoriteIndex, 1);
        favButton.innerHTML = "🤍";
      } else {
        // Lägg till produkten i favoriter
        favorites.push(product);
        favButton.innerHTML = "❤️";
      }
    });

    // Lägg till fler element till listItem
    listItem.appendChild(image);
    listItem.appendChild(name);
    listItem.appendChild(price);
    listItem.appendChild(description);
    listItem.appendChild(favButton);

    // Lägg till listItem i DOM
    productList.appendChild(listItem);
  });
};

// Anropar funktionen vid initial laddning
renderProduct();
