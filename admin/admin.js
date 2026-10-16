(() => {
  const form = document.getElementById("cms-form");
  const status = document.getElementById("dirty-status");
  if (!form || !status) return;

  const markDirty = () => {
    status.textContent = "Unsaved changes";
    status.classList.add("dirty");
  };

  form.addEventListener("input", markDirty);
  form.addEventListener("change", markDirty);
  form.addEventListener("submit", () => {
    status.textContent = "Saving…";
    status.classList.remove("dirty");
  });

  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") {
      event.preventDefault();
      form.requestSubmit();
    }
  });

  document.querySelectorAll("[data-upload]").forEach((input) => {
    input.addEventListener("change", () => {
      const file = input.files && input.files[0];
      const preview = document.querySelector(`[data-preview="${input.dataset.upload}"]`);
      if (!file || !preview) return;
      preview.src = URL.createObjectURL(file);
      markDirty();
    });
  });

  window.addEventListener("beforeunload", (event) => {
    if (!status.classList.contains("dirty")) return;
    event.preventDefault();
    event.returnValue = "";
  });
})();
