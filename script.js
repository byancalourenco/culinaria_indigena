const menuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const header = document.querySelector('header');

// Abrir/Fechar menu mobile
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// Pega o botão
const backToTopButton = document.getElementById("backToTop");

// Quando o usuário rolar 300px para baixo, mostra o botão
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// Quando clicar no botão, volta para o topo de forma suave
backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Isso faz a rolagem ser suave
    });
});