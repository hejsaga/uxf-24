const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Banana", category: "Fruit" },
  { name: "Orange", category: "Fruit" },
  { name: "Blueberry", category: "Berry" },
  { name: "Grape", category: "Fruit" },
  { name: "Strawberry", category: "Berry" },
];

const itemList = document.getElementById("item-list");
const filterInput = document.getElementById("filter-input");

const renderList = (filteredItems) => {
  itemList.innerHTML = "";

  filteredItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name;
    itemList.appendChild(li);
  });
};

renderList(items);

filterInput.addEventListener("input", () => {
  const searchText = filterInput.value.toLowerCase();

  const filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchText) ||
      item.category.toLowerCase().includes(searchText)
    );
  });

  renderList(filteredItems);
});
