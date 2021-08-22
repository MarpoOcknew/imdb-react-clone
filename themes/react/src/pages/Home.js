import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MoviesList } from '../features/movies/MoviesList'
import { selectAllData, fetchMovies } from '../features/movies/moviesSlice'
import { Pagination } from 'react-laravel-paginex'

const getData = (data) => {
    const dispatch = useDispatch()
    console.log(data)
    dispatch(fetchMovies(data.page))
};

export default function Home() {    
    const allData = useSelector(selectAllData)

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
                        <MoviesList/>

                        <div className="row g-3 mt-4">
                            <div className="col">
                                <nav aria-label="Page navigation example">
                                    <Pagination changePage={getData} data={allData} containerClass={"pagination justify-content-center"}/>
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
