export default

    function Top() {
    return (
        <div class="menu">
            <div class="topo">
                <div class="topo-esquerdo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div></div>
                    <a href="https://www.instagram.com" target="_blank"><img src="./assets/img/logo.png" alt="" /></a>
                </div>

                <input type="text" placeholder="Pesquisar" />
                <div class="topo-direito">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>

            <div class="menu-mobile">
                <ion-icon name="logo-instagram"></ion-icon>
                <img src="./assets/img/logo.png" alt="" />
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>

        </div>
    )
}