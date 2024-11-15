import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBarComponent() {
    return (
    <>
        <nav style={{padding:20, display:"flex"}} className='navbar fixed-top navbar-expand-sm navbar-dark bg-dark'>
            <div className="container-fluid">
                <a style={{fontSize:22, fontWeight:500}} className="navbar-brand" href="/">1G-Store</a>
                <div className='lista'>
                    <ul style={{gap:120, fontSize:17}} className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={`/sofas/:catId`}>Sofas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/mesas/:catId`}>Mesas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/asientos/:catId`}>Asientos</Link>
                        </li>
                        <CartWidget/>
                    </ul>
                </div>
                
            </div>
        </nav>
    </>
    )
}

