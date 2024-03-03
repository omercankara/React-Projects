import { NavLink, Outlet } from "react-router-dom"
export const HelpLayout = () => {
    return (
        <div className="help-layout">
            <h2>Help Pages</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit rem iure nobis hic distinctio magnam nesciunt, ipsa illo sunt voluptas.</p>
            <nav>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="faq">Faq</NavLink>
            </nav>

            <main>
                <Outlet /> {/* ROUTE OUTLET İÇERİKLERİNİ GÖSTER  */}
            </main>
        </div>
    )
}