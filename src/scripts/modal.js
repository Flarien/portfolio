function showModal(id, title, message, isError = false) {
  const modal = document.getElementById(id);
  const modalTitle = document.getElementById("modal-title");
  const modalMessage = document.getElementById("modal-message");
  const modalIcon = document.getElementById("modal-icon");
  const modalClose = document.getElementById("modal-close");

  if (modal && modalTitle && modalMessage && modalIcon && modalClose) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;

    if (isError) {
      modalIcon.className =
        "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100";
      modalIcon.innerHTML = `
          <svg class="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        `;
      modalClose.className =
        "px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300";
    } else {
      modalIcon.className =
        "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100";
      modalIcon.innerHTML = `
          <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        `;
      modalClose.className =
        "px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300";
    }

    modal.classList.remove("hidden");
  }
}

function hideModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("hidden");
  }
}

document
  .getElementById("modal-close")
  ?.addEventListener("click", () => hideModal("form-modal"));

// Exponer las funciones al ámbito global
window.showModal = showModal;
window.hideModal = hideModal;
