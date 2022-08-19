import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import './Main.scss'

const Layout = () => {
    return (
        <div className="container-m">
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout