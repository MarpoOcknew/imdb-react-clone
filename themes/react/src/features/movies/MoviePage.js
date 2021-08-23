import React from "react";
import { useSelector } from "react-redux";

const Category = ({ cat }) => {
    return (
        <span key={cat.id} className="card-title">{cat.title} </span>
    )
}

export const MoviePage = ({ match }) => {
    const { movieId } = match.params;

    const movie = useSelector((state) =>
        state.movies.data.data.find((movie) => movie.id.toString() === movieId)
    );

    if (!movie) {
        return (
            <section>
                <h2>Movie not found!</h2>
            </section>
        );
    }

    let categories = movie.categories.map((cat) => (
        <Category key={cat.id} cat={cat} />
    ))

    return (
        <section className="container">
            <div className="row">
                <article className="col-md-12">
                    <div className="row g-0 mt-5">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary">
                                {categories}
                            </strong>
                            <h3 className="mb-0">{movie.title}</h3>
                            <div className="mb-1 text-muted">{movie.created_at}</div>
                            <p className="card-text mb-auto">
                                {movie.description}
                            </p>
                        </div>

                        <div className="col-auto d-none d-lg-block">
                            <img src={'/storage/app/media/'+movie.image} className="img-fluid"/>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};
