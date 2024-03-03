import { Outlet } from "react-router-dom"

export const UsersLayout = () => {
    return (
        <div className="users-layout">
            <h2>Users</h2>
            <p>Users Layout</p>
            <Outlet /> {/* ROUTE OUTLET İÇERİKLERİNİ GÖSTER  */}
        </div>
    )
}