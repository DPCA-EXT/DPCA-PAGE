function configurarCarrossel(ano) {
    const carrossel = document.getElementById(`carrossel-${ano}`);

    const anterior = document.getElementById(`anterior-${ano}`);

    const proximo = document.getElementById(`proximo-${ano}`);

    const painel = document.getElementById(`painel-${ano}`);
    const verMais = carrossel
        ? carrossel.querySelector(".ver-mais")
        : null;

    const fecharPainel = document.getElementById(`fechar-${ano}`);

    if (!carrossel || !anterior || !proximo) {
        return;
    }

    proximo.addEventListener("click", function() {
        carrossel.scrollBy({
            left: carrossel.querySelector("img").offsetWidth + 20,
            behavior: "smooth"
        });

    });
    anterior.addEventListener("click", function() {
        carrossel.scrollBy({
            left: -(carrossel.querySelector("img").offsetWidth + 20),
            behavior: "smooth"
        });

    });
    if (verMais && painel) {
        verMais.addEventListener("click", function() {
            painel.classList.add("aberto");

        });

    }

    if (fecharPainel && painel) {
        fecharPainel.addEventListener("click", function() {
            painel.classList.remove("aberto");

        });

    }

}
configurarCarrossel(2024);
configurarCarrossel(2025);
configurarCarrossel(2026);

/* visualizador de fotos */
const visualizador = document.getElementById("visualizador");
const fotoGrande = document.getElementById("foto-grande");
const fecharVisualizador = document.getElementById("fechar-visualizador");
const fotoAnterior = document.getElementById("foto-anterior");
const fotoProxima = document.getElementById("foto-proxima");
const fotos = document.querySelectorAll(".carrossel img, .fotos-extras img");
let fotoAtual = 0;

fotos.forEach(function(foto, index) {
    foto.addEventListener("click", function() {
        fotoAtual = index;
        fotoGrande.src = foto.src;
        fotoGrande.alt = foto.alt;
        visualizador.classList.add("aberto");
    });

});

fotoAnterior.addEventListener("click", function() {
    fotoAtual--;
    if (fotoAtual < 0) {
        fotoAtual = fotos.length - 1;
    }
    fotoGrande.src = fotos[fotoAtual].src;
    fotoGrande.alt = fotos[fotoAtual].alt;
});

fotoProxima.addEventListener("click", function() {
    fotoAtual++;
    if (fotoAtual >= fotos.length) {
        fotoAtual = 0;
    }
    fotoGrande.src = fotos[fotoAtual].src;
    fotoGrande.alt = fotos[fotoAtual].alt;
});

fecharVisualizador.addEventListener("click", function() {
    visualizador.classList.remove("aberto");
});