import React, { useState, useEffect } from 'react'
import { img_300, unavailable } from '../components/config';
import { FaFire } from "react-icons/fa"
import Pagination from '../components/Pagination';

const Trending = () => {
  const [state, setState] = useState([])
  const [page, setPage] = useState(1)

  const fetchTrending = async () => {
    const res = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=dbf407d37eebc2df16d53a4d8ed6928d')
    const { results } = await res.json()
    setState(results)
  }

  useEffect(() => {
    fetchTrending()
  }, [page])

  return (
    <>
      <div className="container">
        <div className="row py-5 my-5">
          <div className="col-12 mt-2 mb-4 fs-1 fw-bold text-decoration-underline head d-flex justify-content-center align-items-center">
            <FaFire className="mx-4 text-danger" />
            <h4 className="fs-2">Trending Today</h4>
            <FaFire className="mx-4 text-danger" />
          </div>
          {state.map((item) => {
            const {
              name,
              title,
              poster_path,
              first_air_date,
              release_date,
              media_type,
              id
            } = item
            return (
              <>
                <div key={id} className="col-md-3 col-sm-4 py-3 d-flex justify-content-center g-4" id="card">
                  <div className="card bg-dark">
                    <img
                      src={poster_path ? `${img_300}/${poster_path}` : unavailable}
                      className="card-img-top pt-3 pb-0 px-3"
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center fs-5">{title || name}</h5>
                      <div className="d-flex fs-6 align-items-center justify-content-evenly movie">
                        <div>{media_type === 'tv' ? 'TV' : "Movie"}</div>
                        <div>{first_air_date || release_date}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          }
          )}
        </div>
      </div>
    </>
  )
}

export default Trending