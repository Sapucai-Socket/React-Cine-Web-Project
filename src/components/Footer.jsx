import React from 'react'
import './Footer.css'
import {AiFillGithub, AiFillYoutube} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="Footer">
            <footer>
                <div class="caixa-footer">
                    <div class="links-footer">
                        <nav>
                            <ul>
                                <li><a href="">Sobre</a></li>
                                <li><a href="">Notícias</a></li>
                                <li><a href="">Pro</a></li>
                                <li><a href=""> Retrospectiva</a></li>
                                <li><a href="">Ajuda</a></li>
                                <li><a href="">Contato</a></li>
                            </ul>
                        </nav>
                        <p class="copyright">&copy; Ciné. Feito por uma equipe de estudantes. Informações sobre os filmes providenciadas pela TMDb.</p>
                    </div>
                    <div class ="segundo-container-footer">
                        <div class="redes-sociais">
                            <ul>
                                <li> <a href=""><img class="img-redes-sociais img-ytb" src="images/youtube-icon.png" alt="youtube"></img></a></li>
                                <li> <a href=""><img class="img-redes-sociais img-github" src="images/github-icon.png"alt="github"></img></a></li>
                            </ul>
                        </div>
                        <div class="equipe-de-dev">
                            <p>Desenvolvido por</p>
                            <img class="img-equipe-de-dev" src="images/sapucai-socket-logo.png" alt="sapucai socket"></img>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
  )
}

export default Footer
