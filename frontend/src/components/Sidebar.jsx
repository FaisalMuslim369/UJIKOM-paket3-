import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {

    useEffect(() => {
        document.body.removeAttribute("style");
    },[]);

    return (
        <>
            <header className="fixed top-0 flex items-center justify-between p-1 bg-blue-600 shadow-md w-full z-10">
                <Link className="text-white font-bold px-3 text-lg w-full md:w-auto" to="/">
                    Web
                </Link>
                <ul className="md:hidden">
                    <li className="inline-block">
                        <button
                            className="px-3 text-white"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#sidebarMenu"
                            aria-controls="sidebarMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="bi bi-list fs-3"></i>
                        </button>
                    </li>
                </ul>
            </header>

            <div className="container-fluid ">
                <div className="row">
                    <div className="sidebar w-3/4 md:w-1/4 lg:w-1/5 p-0 bg-gray-800 fixed top-14 md:top-0 h-screen z-20" >
                        <div
                            className="offcanvas-md offcanvas-end bg-dark"
                            tabIndex="-1"
                            id="sidebarMenu"
                            aria-labelledby="sidebarMenuLabel"
                        >
                            <div className="offcanvas-header ">
                                <h5 className="offcanvas-title text-light" id="sidebarMenuLabel">Menu</h5>
                                <div style={{ cursor:"pointer" }}
                                    className="bi bi-x-lg fs-4 text-light"
                                    data-bs-dismiss="offcanvas"
                                    data-bs-target="#sidebarMenu"
                                    aria-label="Close"
                                ></div>
                            </div>
                            
                            <div className="offcanvas-body d-md-flex p-0 pt-lg-3 overflow-y-auto">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <Link className={`nav-link d-flex gap-2 text-light`} aria-current="page" to="/">
                                            <i className="bi bi-house"></i>Beranda
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <main className={`col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3 ${props.className}`}>
                        {props.children}
                    </main>
                </div>
            </div>
        </>
    );
}
