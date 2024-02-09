import { Link } from "react-router-dom"
import { Container } from "./Grid"
import { useEffect } from "react";

export default function Navbar ({children}) {

    useEffect(() => {
        document.body.removeAttribute("style");
    },[]);

    return <>
    <nav className="border-b p-0">
        <div className="container mx-auto">
            <a className="text-2xl" href="#">Web</a>
            <button type="button" className="flex items-center px-3 py-2 border rounded text-white border-white">
                <span className="icon-bar"></span>
            </button>
            <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title text-2xl" id="offcanvasNavbarLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <ul className="p-3 flex justify-end gap-2 w-full">
                    <NavLink text={"Beranda"} to={"/"}/>
                    <NavLink text={"Project"} to={"/"}/>
                    <NavLink text={"Keahlian"} to={"/"}/>
                    <NavLink text={"Kontak"} to={"/"}/>
                </ul>
            </div>
        </div>
    </nav>
    <Container>
        {children}
    </Container>
    </>
}

function NavLink ({active,text,to}){
    return <li className={`nav-item ${active ? "bg-blue-500 rounded font-bold" : ""}`} >
        <Link className={`nav-link px-2 ${active ? "text-white" : ""}`} to={to}>{text}</Link>
    </li>
}
