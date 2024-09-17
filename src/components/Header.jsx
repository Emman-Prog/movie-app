import React from 'react'
import { BsCameraVideoFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center w-100 text-uppercase p-3 header">
            <BsCameraVideoFill />
            &nbsp;&nbsp; The Movie Central
          </div>
        </div>
      </div>
    </>
  )
}

export default Header