import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="p-3 d-flex justify-content-between align-items-center shadow">
            <div className="logo d-flex align-items-center">
                <img src="https://www.unsa.ba//themes/unsa/images/logo.jpg" alt="UNSA Logo" style={{ width: '40px', marginRight: '10px' }} />
                <h1 className="m-0">Student Support Hub</h1>
            </div>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
            >
                ☰
            </button>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Student Support Hub</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Kontakt</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/admin/admin-login"><i className="fa fa-user-circle-o" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;