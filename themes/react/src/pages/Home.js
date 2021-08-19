import React from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
    return (
        <main>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Home</h1>

                        <p className="lead text-muted">
                            Something short and leading about the collection
                            below—its contents, the creator, etc. Make it short
                            and sweet, but not too short so folks don’t simply
                            skip over it entirely.
                        </p>

                        <p>
                            <a href="#" className="btn btn-primary m-2">
                                Main call to action
                            </a>
                            <a href="#" className="btn btn-secondary m-2">
                                Secondary action
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-md-10">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                            <MovieCard/>

                            <MovieCard/>

                            <MovieCard/>

                            <MovieCard/>

                            <MovieCard/>

                            <MovieCard/>

                            <MovieCard/>

                            <MovieCard/>
                        </div>
                        
                        <div className="row g-3 mt-4">
                            <div className="col">
                                <nav className="blog-pagination" aria-label="Pagination">
                                    <a className="btn btn-outline-primary" href="#">
                                        Older
                                    </a>
                                    <a
                                        className="btn btn-outline-secondary disabled"
                                        href="#"
                                        tabIndex="-1"
                                        aria-disabled="true"
                                    >
                                        Newer
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="position-sticky">
                            <div className="p-4 mb-3 bg-light rounded">
                                <h4 className="fst-italic">Genres</h4>
                                <ol className="list-unstyled mb-0">
                                    <li>
                                        <a href="#">Action</a>
                                    </li>
                                    <li>
                                        <a href="#">Comedy</a>
                                    </li>
                                    <li>
                                        <a href="#">Drama</a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
