import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllMovies, fetchMovies } from './moviesSlice'

const MovieCard = ({ movie }) => {
    return (
        <div className="col" key={movie.id}>
            <div className="card shadow-sm">
                <img src={'/storage/app/media/'+movie.image} className="card-img-top"/>

                <div className="card-header">
                    <h5 className="card-title">{movie.title}</h5>
                </div>

                <div className="card-body">
                    <p className="card-text">
                        {movie.description.substring(0, 100)}
                    </p>
                </div>

                <div className="card-footer">
                    <span className="badge rounded-pill bg-primary">{movie.category}</span>
                </div>
            </div>
        </div>
    )
}
  
export const MoviesList = () => {
    const dispatch = useDispatch()
    const movies = useSelector(selectAllMovies)
  
    const moviesStatus = useSelector((state) => state.movies.status)
    const error = useSelector((state) => state.movies.error)
  
    useEffect(() => {
        if (moviesStatus === 'idle') {
            dispatch(fetchMovies())
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
        content
    )
  }
  