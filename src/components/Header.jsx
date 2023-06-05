import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

import './Header.css'
import { VscTriangleUp } from 'react-icons/vsc'
import { RiFilmFill } from 'react-icons/ri'
import { HiPencil } from 'react-icons/hi'
import { TbEyeFilled } from 'react-icons/tb'
import { FaUserAlt } from 'react-icons/fa'
import { RxMagnifyingGlass } from 'react-icons/rx';
import { AiFillHome } from 'react-icons/ai'

function Header({ user }) { // accept a user prop
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!search) return;

    navigate(`/search?q=${search}`)
    setSearch("")
}

  return (

    <div className="header">
      <ul className="header-list">
        <img src="./public/images/cine.png" alt="" className="cine-logo" />
        <li>
          <a id="homeBtnHeader">
            <i className="" aria-hidden="true" /><VscTriangleUp /> <AiFillHome /> Home
          </a>
          <ul className="dropdown">
            <li>
              <a href="/">
                <i className="" aria-hidden="true" /><RiFilmFill /> Filmes </a>
            </li>
            <li>
              <a href="#">
                <i className="" aria-hidden="true" /><HiPencil /> Reviews

              </a>
            </li>
            <li>
              <a href="#">
                <i className="" aria-hidden="true" /><TbEyeFilled /> Para ver
              </a>
            </li>
            <li>
              <a href="login">
                <i className="" aria-hidden="true" /><FaUserAlt /> Perfil
              </a>
            </li>
          </ul>
          <form onSubmit={handleSubmit}>
                        <div className="box">
                            <input
                                id="pesquisa"
                                placeholder="Busque filmes, séries, reviews ou pessoas..."
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />
                            <button className="fa fa-search"></button>
                        </div>
                    </form>

        </li>
        {user ?
          <img src={user.photoURL} alt={user.displayName} className="usuario-nao-cadastrado" />
          :
          <img src="./public/images/superman.jpg" alt="" className="usuario-nao-cadastrado" />
        }
      </ul>
    </div>


  )
}

export default Header;
