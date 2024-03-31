$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    var typed = new Typed(".typing", {
        strings: ["Analista", "Desenvolvedor", "Designer"],
        typeSpeed: 50,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Analista", "Desenvolvedor", "Designer"],
        typeSpeed: 50,
        backSpeed: 60,
        loop: true
    });

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPauser: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

function ajustarTamanhoCartoes() {
    // Seleciona todos os cartões
    const cards = document.querySelectorAll('.services .serv-content .card');

    // Inicializa uma variável para armazenar o maior tamanho
    let maiorTamanho = 0;

    // Encontra o maior tamanho entre os cartões
    cards.forEach(card => {
        const tamanho = card.offsetHeight; // Altura do cartão
        if (tamanho > maiorTamanho) {
            maiorTamanho = tamanho;
        }
    });

    // Define o tamanho mínimo para todos os cartões
    cards.forEach(card => {
        card.style.minHeight = maiorTamanho + 'px';
    });
}

function ajustarTamanhoCartoesCarrosel() {
    // Seleciona todos os cartões
    const cards = document.querySelectorAll('.class .carousel .card');

    // Inicializa uma variável para armazenar o maior tamanho
    let maiorAltura = 0;

    // Encontra a maior altura entre os cartões
    cards.forEach(card => {
        const altura = card.offsetHeight; // Altura do cartão
        if (altura > maiorAltura) {
            maiorAltura = altura;
        }
    });

    // Define a altura mínima para todos os cartões
    cards.forEach(card => {
        card.style.minHeight = maiorAltura + 'px';

        // Centraliza verticalmente o texto dentro do cartão
        const box = card.querySelector('.box');
        box.style.display = 'flex';
        box.style.flexDirection = 'column';
        box.style.justifyContent = 'center';
        box.style.height = '100%';

        // Ajusta o tamanho do texto para o tamanho restante do cartão
        const texto = card.querySelector('.text');
        const paddingVertical = parseInt(window.getComputedStyle(card).paddingTop) + parseInt(window.getComputedStyle(card).paddingBottom);
        texto.style.height = `calc(100% - ${paddingVertical}px)`;
    });
}

function ajustarTamanhoCartoesCarroselProj() {
    // Seleciona todos os cartões
    const cards = document.querySelectorAll('.project .carousel .card');

    // Inicializa uma variável para armazenar o maior tamanho
    let maiorAltura = 0;

    // Encontra a maior altura entre os cartões
    cards.forEach(card => {
        const altura = card.offsetHeight; // Altura do cartão
        if (altura > maiorAltura) {
            maiorAltura = altura;
        }
    });

    // Define a altura mínima para todos os cartões
    cards.forEach(card => {
        card.style.minHeight = maiorAltura + 'px';

        // Centraliza verticalmente o texto dentro do cartão
        const box = card.querySelector('.box');
        box.style.display = 'flex';
        box.style.flexDirection = 'column';
        box.style.justifyContent = 'center';
        box.style.height = '100%';

        // Ajusta o tamanho do texto para o tamanho restante do cartão
        const texto = card.querySelector('.text');
        const paddingVertical = parseInt(window.getComputedStyle(card).paddingTop) + parseInt(window.getComputedStyle(card).paddingBottom);
        texto.style.height = `calc(100% - ${paddingVertical}px)`;
    });
}

// Chama a função para ajustar o tamanho dos cartões assim que a página for carregada
window.addEventListener('load', function () {
    ajustarTamanhoCartoes();

    // Chama a função a cada 5 segundos
    setInterval(ajustarTamanhoCartoes, 5000);
});

// Chama a função para ajustar o tamanho dos cartões assim que a página for carregada
window.addEventListener('load', function () {
    ajustarTamanhoCartoesCarrosel();

    // Chama a função a cada 5 segundos
    setInterval(ajustarTamanhoCartoes, 5000);
});

// Chama a função para ajustar o tamanho dos cartões assim que a página for carregada
window.addEventListener('load', function () {
    ajustarTamanhoCartoesCarroselProj();

    // Chama a função a cada 5 segundos
    setInterval(ajustarTamanhoCartoes, 5000);
});