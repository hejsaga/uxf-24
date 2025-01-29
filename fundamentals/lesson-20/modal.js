const initModal = () => {
  const openModalButton = document.getElementById("openModal");
  const modal = document.getElementById("modal");
  const backdrop = document.getElementById("backdrop");
  const closeModalButton = document.getElementById("closeModal");
  const focusableElements = "input, button";
  const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];

  const openModal = () => {
    modal.classList.add("open");
    backdrop.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    firstFocusableElement.focus();
  };

  openModalButton.addEventListener("click", () => openModal());

  const closeModal = () => {
    modal.classList.remove("open");
    backdrop.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };

  backdrop.addEventListener("click", () => closeModal());
  closeModalButton.addEventListener("click", () => closeModal());

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
};

initModal();

module.exports = { initModal };
