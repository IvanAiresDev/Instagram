import { useState } from "react"

const perfis = [
    { img: "respondeai.svg", name: "respondeai" },
    { img: "filomoderna.svg", name: "filomoderna" },
    { img: "nathanwpylestrangeplanet.svg", name: "nathanwpylestrangeplanet" },
    { img: "9gag.svg", name: "9gag" },
    { img: "adorable_animals.svg", name: "adorable_animals" }
]

export default


    function Sidebar() {

    const [nomeAtual, setNome] = useState("ivan_mateus2")
    const [imgAtual, setImg] = useState("./assets/img/foto-perfil.jpeg")

    return (
        <div class="total-sidebar">
            <div class="sidebar">
                <div class="perfil-sidebar">
                    <img onClick={mudarImg} src={imgAtual} alt="" />
                    <p class="negrito">{nomeAtual}</p>
                    <ion-icon onClick={mudarNome} name="pencil-outline"></ion-icon>
                </div>
                <div class="sugestoes">
                    <div class="sugestao-topo">
                        <p>Sugestões para você</p>
                        <p class="sugestao-topo-negrito">Ver tudo</p>
                    </div>

                    {perfis.map((p) => <SugestaoPerfil name={p.name} img={p.img} />)}

                </div>

                <div class="direitos-autorais">
                    <p>
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos
                        • Localizações • Contas mais relevantes • Hashtags • Idioma
                    </p>
                    <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                </div>

            </div>

        </div>

    )

    function mudarNome() {
        const novoNome = prompt('Digite seu novo nome');
        novoNome ? setNome(novoNome) : setNome(nomeAtual)
    }

    function mudarImg() {
        const novaImg = prompt("Digite o link da sua imagem");
        novaImg.contains === "https" ? setImg(novaImg) : setImg(imgAtual)
    }
}

function SugestaoPerfil(props) {
    return (
        <div class="perfis-seguir">
            <div class="perfil-sugestao">
                <img src={`./assets/img/${props.img}`} alt="" />
                <div class="texto-sugestao">
                    <h2>{props.name}</h2>
                    <p>Segue você</p>
                </div>
            </div>

            <a href="#">Seguir</a>
        </div>
    )
}