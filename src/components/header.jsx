import { Modal } from "bootstrap/dist/js/bootstrap.bundle.min";
import Cart from "./cart";
import { useState } from "react";
export default function Header({ cart, wishlist }) {

    const [model, setmodel] = useState(false);

    const modelclose = () => setmodel(false);


    return (
        <div>
            <header className="bg-light shadow-sm sticky-top">
                <div className="container">
                    {/* Top Header */}
                    <div className="row py-3 align-items-center">
                        {/* Logo */}
                        <div className="col-md-2">
                            <a href="#" className="text-decoration-none">
                                <h1 className="h3 mb-0 text-primary fw-bold">BBB</h1>
                            </a>
                        </div>




                        {/* Wishlist and Cart */}
                        <div className="col-md-10">
                            <div className="d-flex justify-content-end gap-4">
                                <a href="#" className="text-decoration-none text-dark d-flex align-items-center">
                                    <i className="bi bi-heart fs-4 me-2"></i>
                                    <div>
                                        <small className="d-block text-muted">Wishlist</small>
                                        <span className="fw-medium">{wishlist.length} Items</span>
                                    </div>
                                </a>
                                <a className="text-decoration-none text-dark d-flex align-items-center" style={{ cursor: "pointer" }} onClick={() => setmodel(!model)}>
                                    <i className="bi bi-cart3 fs-4 me-2"></i>
                                    <div>
                                        <small className="d-block text-muted">Cart</small>
                                        <span className="fw-medium">{cart.length} Items</span>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Navigation */}
                <nav className="border-top">
                    <div className="container">
                        <ul className="nav justify-content-center py-2">
                            <li className="nav-item">
                                <a className="nav-link text-dark px-4 fw-medium" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark px-4 fw-medium" href="#">Laptop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark px-4 fw-medium" href="#">Featured Brands</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark px-4 fw-medium" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark px-4 fw-medium" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            {model && 

                (
                    <Cart close={modelclose}/>
                )
            }





        </div>
    );

}