/**
 * @jest-environment jsdom
 */

const { fireEvent } = require("@testing-library/dom");
require("@testing-library/jest-dom");

beforeEach(() => {
  document.body.innerHTML = `
    <button id="openModal">Öppna modal</button>

    <div class="backdrop" id="backdrop"></div>
    <main class="modal" id="modal" role="dialog" aria-hidden="true">
        <form id="flexed">
        <h2>Kontakta oss</h2>
        <div id="input">
            <label for="name" aria-label="name-label">Name:</label>
            <input type="text" id="name" name="name" required aria-required="true">
        </div>
        <div id="input">
            <label for="email" aria-label="email-label">Email:</label>
            <input type="text" id="email" name="email" required aria-required="true">
        </div>
        <div class="buttons">
            <button type="button" id="closeModal">Stäng</button>
            <button type="submit">Skicka</button>
        </div>
        </form>
    </main>
    `;

  require("./modal");
});

test('Modalen öppnas när vi klickar på "Öppna modal"-knappen', () => {
  const openModalButton = document.getElementById("openModal");
  const modal = document.getElementById("modal");
  const backdrop = document.getElementById("backdrop");

  // Kontrollera att modalen är stängd från början
  expect(modal).not.toHaveClass("open");
  expect(backdrop).not.toHaveClass("open");
  expect(modal.getAttribute("aria-hidden")).toEqual("true");

  // Klicka på knappen för att öppna modal
  fireEvent.click(openModalButton);

  expect(modal.getAttribute("aria-hidden")).toEqual("false");
  expect(modal).toHaveClass("open");
});
