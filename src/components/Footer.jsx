import React from 'react'
import { NavLink } from "react-router-dom"
import { FaFire } from "react-icons/fa"
import { FaFilm } from "react-icons/fa"
import { FaTv } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"

const Footer = () => {
  const data = [
    {
      icon: FaFire,
      name: "Trending",
      link: "/"
    },
    {
      icon: FaFilm,
      name: "Movies",
      link: "/movies"
    },
    {
      icon: FaTv,
      name: "TV Series",
      link: "/tv"
    },
    {
      icon: FaSearch,
      name: "Search",
      link: "/search"
    }
  ]

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center bg-dark footer">
            {data.map((item) => (
              <NavLink key={item.name} to={`${item.link}`}>
                <button className="col-sm-2 col-md-2 btn btn-dark">
                  <i style={{ fontSize: "1.5rem" }}>{item.icon()}</i>
                  <h5 className="pt-1 fs-6">{item.name}</h5>
                </button>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer