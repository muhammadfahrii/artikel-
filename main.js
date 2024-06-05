document.querySelectorAll('.paging__link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        let page = this.getAttribute('data-ci-pagination-page');
        console.log('Navigating to page:', page);
        // Tambahkan logika navigasi atau manipulasi halaman di sini
    });
});
let navbar = document.querySelector(".navbar a.active");

menu.onclick = () => {
  navbar.classList.toggle("open");
};

sr.reveal(".navbar a.active", { delay: 400, origin: "top" });

