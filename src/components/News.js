import { useState } from "react"

const storie = [
    { img: "foto-perfil.jpeg", name: "ivan_matesu2" },
    { img: "respondeai.svg", name: "respondeai" },
    { img: "filomoderna.svg", name: "filomoderna" },
    { img: "nathanwpylestrangeplanet.svg", name: "nathanwpylestrangeplanet" },
    { img: "9gag.svg", name: "9gag" },
    { img: "adorable_animals.svg", name: "adorable_animals" },
    { img: "razoesparaacreditar.svg", name: "razoesparaacreditar" },
    { img: "chibirdart.svg", name: "chibirdart" }
]

const post = [
    { img: "foto-perfil.jpeg", name: "ivan_matesu2", imgPost: "desbravadores.jpg" },
    { img: "respondeai.svg", name: "respondeai", imgPost: "gato-telefone.svg" },
    { img: "filomoderna.svg", name: "filomoderna", imgPost: "dog.svg" },
]

export default

    function News() {

    return (
        <div class="noticias">
            <div class="menu-story">
                <div class="seta-story">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>

                <div class="stories">
                    {storie.map((s) => <Stories img={s.img} name={s.name} />)}
                </div>

            </div>

            {post.map((p) => <Post name={p.name} img={p.img} imgPost={p.imgPost} />)}

        </div>
    )
}

function Stories(props) {
    return (
        <div class="story-total">
            <div>
                <img src="./assets/img/stories_background.jpg" alt="" />
                <div>
                    <img src={`./assets/img/${props.img}`} alt="" />
                </div>
            </div>
            <h3>{props.name}</h3>
        </div>
    )
}

function Post(props) {
    const [like, setLike] = useState("heart-outline");
    const [color, setColor] = useState()
    return (
        <div class="post">
            <div class="menu-post">
                <div>
                    <img src={`./assets/img/${props.img}`} alt="" />

                    <h1>{props.name}</h1>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

            <img src={`./assets/img/${props.imgPost}`} alt="" />
            <div class="interacao-post">
                <div class="interacao">
                    <div>
                        <ion-icon onClick={curtiu} class={color} name={like}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="reacoes">
                    <img src="./assets/img/respondeai.svg" alt="" />
                    <p>
                        Curtido por <strong>respondeai</strong> e
                        <strong>outras 101.523 pessoas</strong>
                    </p>
                </div>
            </div>
            <div class="comentarios">
                <div></div>
                <div class="adicionar-comentario">
                    <ion-icon name="happy-outline"></ion-icon>
                    <input type="text" placeholder="Adicione um comentario" />
                    <a href="#">Publicar</a>
                </div>
            </div>

        </div>

    )

    function curtiu(p) {
        if (like === "heart-outline") {
            setLike("heart-sharp")
            setColor("red md hydrated")
        } else {
            setColor("md hydrated")
            setLike("heart-outline")
        }
    }
}
