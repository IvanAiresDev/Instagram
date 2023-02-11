import News from "./News";
import Sidebar from "./Sidebar";
import Top from "./Top";

export default

    function App() {
    return (
        <>

            <Top />

            <div class="container">

                <News />
                <Sidebar />
                <div class="menu-bottom-mobile">
                    <ion-icon name="home"></ion-icon>
                    <ion-icon name="search-outline"></ion-icon>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>

        </>
    )
}