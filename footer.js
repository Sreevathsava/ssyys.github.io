function loadFooter() {
  fetch("footer.html", {cache:"no-store"})
    .then(r => {
      if (!r.ok) throw new Error("Footer not found");
      return r.text();
    })
    .then(html => document.getElementById("footer-placeholder").innerHTML = html)
    .catch(err => {
      console.error("Footer load failed:", err);
      document.getElementById("footer-placeholder").innerHTML =
        '<footer><p>&copy; 2025 Sri Shukla Yajurveda Yuvaka Sangha</p></footer>';
    });
}
