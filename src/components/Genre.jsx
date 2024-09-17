import React, { useEffect } from 'react'

const Genre = ({ setState, genre, setGenre, value, setValue, setPage, type }) => {

  const fetchGenre = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=dbf407d37eebc2df16d53a4d8ed6928d&language=en-US`)
    const { genres } = await res.json()

    setGenre(genres)
  }

  useEffect(() => {
    fetchGenre()
  }, [])

  const CategoryAdd = (genres) => {
    setValue([...value, genres])
    setGenre(genre.filter((gen) => gen.id !== genres.id))
    setPage(1)
  }

  const CategoryRemove = (genres) => {
    setValue(value.filter((val) => val.id !== genres.id))
    setGenre([...genre, genres])
    setPage(1)
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col-12 d-flex flex-wrap">
            {value && value.map((val) => {
              const { id, name } = val
              return (
                <div className="m-2" key={id}>
                  <button
                    className="bg-dark text-white px-4 py-2 text-center buttons"
                    onClick={() => CategoryRemove(val)}
                  >
                    {name}
                  </button>
                </div>
              )
            })}
            {genre && genre.map((gen) => {
              const { id, name } = gen
              return (
                <div className="m-2" key={id}>
                  <button
                    className="bg-dark text-white px-4 py-2 text-center button"
                    onClick={() => CategoryAdd(gen)}
                  >
                    {name}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Genre