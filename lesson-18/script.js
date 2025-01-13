const items = ["Apple", "Banana", "Orange", "Blueberry", "Grape", "Strawberry"];

const itemList = document.getElementById("item-list");
const filterInput = document.getElementById("filter-input");

const renderList = (filteredItems) => {
  itemList.innerHTML = "";

  filteredItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    itemList.appendChild(li);
  });
};

renderList(items);

filterInput.addEventListener("input", () => {
  const searchText = filterInput.value.toLowerCase();

  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(searchText);
  });

  renderList(filteredItems);
});
