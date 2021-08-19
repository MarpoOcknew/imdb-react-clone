import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
    return (
        <Router>
            <div>
                <header className="p-3 bg-dark text-white">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <Link
                                to="/"
                                className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    aria-hidden="true"
                                    className="me-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                    <circle cx="12" cy="13" r="4" />
                                </svg>
                            </Link>

                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                <li>
                                    <Link
                                        to="/"
                                        className="nav-link px-2 text-white"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        className="nav-link px-2 text-white"
                                    >
                                        About
                                    </Link>
                                </li>
                            </ul>

                            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
                            </form>
                        </div>
                    </div>
                </header>

                {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                
                <div className="container">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div className="col-md-4 d-flex align-items-center">
                            <Link
                                to="/"
                                className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    aria-hidden="true"
                                    className="me-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                    <circle cx="12" cy="13" r="4" />
                                </svg>
                            </Link>
                            
                            <span className="text-muted">© 2021 Company, Inc</span>
                        </div>

                        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                            <li className="ms-3">
                                <a className="text-muted" href="#">
                                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="text-muted" href="#">
                                <FontAwesomeIcon icon={["fab", "instagram"]} />
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="text-muted" href="#">
                                <FontAwesomeIcon icon={["fab", "facebook"]} />
                                </a>
                            </li>
                        </ul>
                    </footer>
                </div>
            </div>
        </Router>
    );
}
