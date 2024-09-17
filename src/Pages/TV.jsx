import React, { useState, useEffect } from 'react'
import Genre from '../components/Genre'
import useGenre from '../CustomHooks/useGenre'
import { img_300, unavailable } from '../components/config'
import Pagination from '../components/Pagination'

const TV = () => {
  const [state, setState] = useState([])
  const [page, setPage] = useState(1)
  const [genre, setGenre] = useState([])
  const [value, setValue] = useState([])
  const genreURL = useGenre(value)

  const fetchTV = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=dbf407d37eebc2df16d53a4d8ed6928d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}`)
    const { results } = await res.json()
    setState(results)
  }

  useEffect(() => {
    fetchTV()
  }, [page, genreURL])

  return (
    <>
      <div className="container">
        <div className="row py-5 my-5">
          <div className="col-12 text-center mt-2 mb-4 fs-1 fw-bold text-decoration-underline">
            TV Series
          </div>
          <Genre
            genre={genre}
            setGenre={setGenre}
            setPage={setPage}
            value={value}
            setValue={setValue}
            type="tv"
          />
          {state.map((item) => {
            const {
              name,
              title,
              poster_path,
              first_air_date,
              release_date,
              media_type,
              id,
            } = item
            return (
              <div className="col-md-3 col-sm-4 py-3" id="card" key={id}>
                <div className="card bg-dark">
                  <img
                    src={poster_path ? `${img_300}/${poster_path}` : unavailable}
                    alt={title || name}
                    className="card-img-top pt-3 pb-0 px-3"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center fs-5">
                      {title || name}
                    </h5>
                    <div className="d-flex fs-6 align-items-center justify-content-evenly movie">
                      <div>{media_type === "movie" ? "Movie" : "TV"}</div>
                      <div>{first_air_date || release_date}</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <Pagination page={page} setPage={setPage} />
        </div>
      </div>
    </>
  )
}

export default TV