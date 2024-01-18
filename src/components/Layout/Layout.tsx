import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Layout = () => {
    return (
        <>
            <Header />
            <main className="h-100">
                <Outlet />
            </main>
        </>
    )
}

export default Layout
