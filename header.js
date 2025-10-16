function loadHeader() {
  fetch("header.html", { cache: "no-store" })
    .then(response => {
      if (!response.ok) throw new Error("Header not found");
      return response.text();
    })
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;

      // After header loads, enable mobile toggle
      const toggle = document.querySelector(".nav-toggle");
      const nav = document.querySelector("nav");
      toggle?.addEventListener("click", () => nav.classList.toggle("show"));
    
		// Highlight active link
		const current = window.location.pathname.split("/").pop();
		document.querySelectorAll("nav a").forEach(a => {
		  if (a.getAttribute("href") === current) a.classList.add("active");
		});
	})
    .catch(err => console.error("Header load failed:", err));
}
