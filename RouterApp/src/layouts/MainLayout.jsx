import { NavLink, Outlet, useNavigation } from "react-router-dom"
import Loading from "../pages/Loading"
export const MainLayout = () => {
    const navigation = useNavigation()
    return (
        <div className="main-layout">
            <header className="container">
                <h1>React Router</h1>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to='/Help'>Help</NavLink>
                </nav>

            </header>
            <main className="container">
                { navigation.state === "loading" && <Loading/> }
                <Outlet /> {/*ROUTE OUTLET İÇERİKLERİNİ GÖSTER*/}
                <Loading />
            </main>
        </div>
    )
}