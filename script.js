let tentativas = 3

function verificarData() {
    const resposta = document.getElementById("dataDigitada").value.trim()
    const mensagem = document.getElementById("mensagemData")
    const btnTentar = document.getElementById("tentarNovamente")

    if (resposta === "08/06/2025") {
        mensagem.innerText = "Data correta! ❤️"
        document.getElementById("inicio").style.display = "none"
        document.getElementById("carta-section").style.display = "flex"
    } else {
        tentativas--
        if (tentativas > 0) {
            mensagem.innerHTML = `Ops! Data errada, Tekinha... você ainda tem <strong>(${tentativas})</strong> tentativa(s).`;
        } else {
            mensagem.innerHTML = `
        Vamos 'fingir' que você não sabe a data... 😅<br>
        <br>
        Mesmo quando erramos, Deus nos dá novas chances.
        E como Ele nos ama, eu também sempre vou te amar, mesmo nas falhas. 💞
        Vamos recomeçar juntos.
      `

            // Toca o áudio de erro
            const audioErro = new Audio('errou.mp3');
            audioErro.play().catch((error) => {
                console.log("Erro ao tocar o áudio de erro:", error)
            })

            btnTentar.style.display = "inline-block";
            document.getElementById("dataDigitada").disabled = true
        }
    }
}

function resetarTentativa() {
    tentativas = 3
    document.getElementById("mensagemData").innerText = ""
    document.getElementById("dataDigitada").disabled = false
    document.getElementById("dataDigitada").value = ""
    document.getElementById("tentarNovamente").style.display = "none"
}

function abrirCarta() {
    document.getElementById("carta-section").style.display = "none"
    document.getElementById("surpresa").style.display = "block"

    // Tocar a música ao clicar
    const musica = document.getElementById("musica")
    musica.play().catch((error) => {
        console.log("Erro ao tentar tocar a música:", error)
    })
}


let contador = 0

function contarAmor() {
    contador++
    document.getElementById("contador").innerText = contador
    criarCoracao()

    if (contador === 20) {
        const valor_texto = document.getElementById('valor_texto')
        mostrarIdadeSurpresa()
        valor_texto.innerText = 'Eita, Tekinha... você é ligeira mesmo! 😄💖'

    }
}

function mostrarIdadeSurpresa() {
    document.getElementById("idade-surpresa").style.display = "block"
}

function criarCoracao() {
    const coracao = document.createElement("div")
    coracao.innerText = "❤️"
    coracao.style.position = "fixed"
    coracao.style.left = Math.random() * 90 + "vw"
    coracao.style.top = "-20px"
    coracao.style.fontSize = "24px"
    coracao.style.zIndex = "99"
    document.body.appendChild(coracao)

    let pos = 0
    const animar = setInterval(() => {
        if (pos >= window.innerHeight) {
            clearInterval(animar)
            coracao.remove()
        } else {
            pos += 3
            coracao.style.top = pos + "px"
        }
    }, 10)
}

const carousel = document.getElementById("carousel")

let isResetting = false
let isTouching = false
let intervalId

function rolarFotos() {
    if (isResetting || isTouching) return

    const scrollAmount = carousel.scrollLeft + 1

    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        isResetting = true
        setTimeout(() => {
            carousel.scrollTo({ left: 0, behavior: 'smooth' })
            isResetting = false
        }, 500)
    } else {
        carousel.scrollLeft = scrollAmount
    }
}

// Inicia o scroll automático
intervalId = setInterval(rolarFotos, 20)

// Pausa ao tocar
carousel.addEventListener("touchstart", () => {
    isTouching = true
});

// Retoma ao parar de tocar
carousel.addEventListener("touchend", () => {
    isTouching = false
});


