// Footer yılı
document.getElementById("yil").textContent = new Date().getFullYear();

// Koyu / açık tema (tercih tarayıcıda saklanır)
const kok = document.documentElement;
const kayitli = (() => { try { return localStorage.getItem("tema"); } catch { return null; } })();
const sistemKoyu = window.matchMedia("(prefers-color-scheme: dark)").matches;

kok.dataset.tema = kayitli || (sistemKoyu ? "koyu" : "acik");

document.getElementById("tema").addEventListener("click", () => {
  const yeni = kok.dataset.tema === "koyu" ? "acik" : "koyu";
  kok.dataset.tema = yeni;
  try { localStorage.setItem("tema", yeni); } catch {}
});
