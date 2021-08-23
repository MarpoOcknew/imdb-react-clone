import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllMovies, selectAllData, fetchMovies } from './moviesSlice'
import { Pagination } from 'react-laravel-paginex'
import { Link } from "react-router-dom";

// const getData = (data) => {
//     // axios.get('getDataEndpoint?page=' + data.page).then(response => {
//     //     this.setState({data:data});
//     // });
//     const dispatch = useDispatch()
//     console.log(data)
//     dispatch(fetchMovies(data.page))
// };

const Category = ({ cat }) => {
    return (
        <span key={cat.id} className="badge rounded-pill bg-info">{cat.title}</span>
    )
}

const MovieCard = ({ movie }) => {
    let categories = movie.categories.map((cat) => (
        <Category key={cat.id} cat={cat} />
    ))

    return (
        <div className="col card-group" key={movie.id}>
            <div className="card shadow-sm">
                <img src={'/storage/app/media/'+movie.image} className="card-img-top"/>

                <div className="card-header">
                    <h5 className="card-title mb-0">{movie.title}</h5>
                </div>

                <div className="card-body d-flex flex-column align-items-center">
                    <p className="card-text">
                        {movie.description.substring(0, 100)}
                    </p>

                    <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                        View Details
                    </Link>
                </div>

                <div className="card-footer d-flex justify-content-around">
                    {categories}
                </div>
            </div>
        </div>
    )
}
  
export const MoviesList = () => {
    const dispatch = useDispatch()
    const movies = useSelector(selectAllMovies)
    // const data = useSelector(selectAllData)
  
    const moviesStatus = useSelector((state) => state.movies.status)
    const error = useSelector((state) => state.movies.error)
  
    useEffect(() => {
        if (moviesStatus === 'idle') {
            dispatch(fetchMovies(1))
        }
    }, [moviesStatus, dispatch])
  
    let content
    content = <div className="loader">Loading...</div>
  
    if (moviesStatus === 'loading') {
        content = <div className="loader">Loading...</div>
    } else if (moviesStatus === 'succeeded') {
        content = movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))
    } else if (moviesStatus === 'error') {
        content = <div>{error}</div>
    }

    return (
        <div>
            <div className="col-12">
                <h2>Movies</h2>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {content}
            </div>

            {/* <Pagination changePage={getData} data={data}/> */}
        </div>
    )
}
  