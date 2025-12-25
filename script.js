// Navbar scroll effect
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);

    // Active menu highlight
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".nav-links a");

    let current = "";
    sections.forEach(section => {
        if (pageYOffset >= section.offsetTop - 120) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Portfolio filter
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        filters.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        projects.forEach(project => {
            project.style.display =
                filter === "all" || project.classList.contains(filter)
                    ? "block"
                    : "none";
        });
    });
});
