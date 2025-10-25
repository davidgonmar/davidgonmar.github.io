// Dark mode toggle with localStorage
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (saved === "dark" || (!saved && prefersDark)) root.classList.add("dark");

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-toggle-theme]");
    if (!btn) return;
    root.classList.toggle("dark");
    const isDark = root.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
})();
