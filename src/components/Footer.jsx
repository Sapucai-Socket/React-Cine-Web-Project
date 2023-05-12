import React from 'react'
import './Footer.css'
import {AiFillGithub, AiFillYoutube} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container-footer">
      <div className="row">
        <div className="footer-col">
          <a href="#">Sobre</a>
        </div>
        <div className="footer-col">
          <a href="#">Notícias</a>
        </div>
        <div className="footer-col">
          <a href="#">Pro</a>
        </div>
        <div className="footer-col">
          <a href="#">Retro</a>
        </div>
        <div className="footer-col">
          <a href="#">Ajuda</a>
        </div>
        <div className="footer-col">
          <a href="#">Contato</a>
        </div>
        <div className='footer-col footer-social-links'>
            <ul>
                <li>
                    <AiFillGithub />
                </li>
                <li>
                    <AiFillYoutube />
                </li>
                <li>
                    <img className="img-sapucai" src="./public/images/SAPUCAÍ_BBack.png" alt="" href="" />
                </li>
            </ul>
        </div>
        <div className="footer-col">
          
        </div>
      </div>
      <h4 className="copy">
        © Ciné. Feito por uma equipe de estudantes. Informações sobre os filmes
        providenciadas pela TMDb.
      </h4>
    </div>
  </footer>
  
  )
}

export default Footer