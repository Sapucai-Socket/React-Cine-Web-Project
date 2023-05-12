import React from 'react'

function ProfilePicture() {
    return (
      <div class="pfpImage">
        <img
          id="pfp"
          src="https://pbs.twimg.com/profile_images/836420807085674497/fjDNEUsp_400x400.jpg"
        />
      </div>
    );
  }
  
  function UserInfos() {
    return (
      <div>
        <input type="text" placeholder="Clark Kent"/><br/><br/>
        <input type="text" placeholder="truth, justice and a better tomorrow."/>
        <button class="btnEditarPerfil">⚙ SALVAR</button>
      </div>
    );
  }
  
  function OtherUserInfos() {
    return (
      <div class="otherUserInfos">
        <div class="otherUserInfo">
          <span class="quantity">4</span>
          <br />
          <span class="parameter">FILMES</span>
        </div>
        <div class="vertical-line"></div>
  
        <div class="otherUserInfo">
          <span class="quantity">23</span>
          <br />
          <span class="parameter">ESTE ANO</span>
        </div>
        <div class="vertical-line"></div>
  
        <div class="otherUserInfo">
          <span class="quantity">3</span>
          <br />
          <span class="parameter">LISTAS</span>
        </div>
        <div class="vertical-line"></div>
        <div class="otherUserInfo">
          <span class="quantity">1</span>
          <br />
          <span class="parameter">SEGUINDO</span>
        </div>
        <div class="vertical-line"></div>
  
        <div class="otherUserInfo">
          <span class="quantity">4</span>
          <br />
          <span class="parameter">SEGUIDORES</span>
        </div>
      </div>
    );
  }
  
  
  function MoviesReviewedByUser() {
    return(
      <div id="favoritos">
        <h2 id="favoritos-cabecalho">FILMES FAVORITOS</h2>
        
        <div class="posterUserFavorites">
  
    <div class="flex-child">
     <a href="#"><img class="filme-favorito" src="https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"/></a>
      <button class="minus-button">-</button>
    </div>
    
    <div class="flex-child">
      <a href="#"><img class="filme-favorito" src="https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"/></a>
      <button class="minus-button">-</button>
    </div>
          <div class="flex-child">
      <a href="https://youtu.be/djV11Xbc914"><img class="filme-favorito" src="https://image.tmdb.org/t/p/original/gmU7P3FzGFsl2wiSDhx9znZCNub.jpg"/></a>
            <button class="minus-button">-</button>
    </div>
          <div class="flex-child"><button href="https://youtu.be/dQw4w9WgXcQ" class="add-button">+</button></div>
  </div>
        
        
      </div>
    );
  }
  
  function ReviewsDoUsuario() {
    return (
      <div id="secao-filmes-avaliados">
        <h2 id="avaliacoes-cabecalho">REVIEWS</h2>
      
      <div id="filme-poster-avaliado">
        <a href="#"><img class="filme-avaliado" src="./public/images/bullettrain.jpg" /></a>
      </div>
        <div id="infos-avaliacao">
          <span id="titulo-filme-avaliado">Bullet Train</span>
          <span id="ano-filme-avaliado">2022</span><br/>
          <span id="estrelas-filme-avaliado">★★</span><br/>
          <span id="review-filme-avaliado">Filme bem divertido, ótimas cenas de ação. O filme fica meio chatinho em algumas partes, mas é legal de forma geral.</span>
        </div>
        </div>
    );
  }
  
  
  function Profile() {
    return (
      <body className='body-profile'>
        <div>
          <div class="container-perfil">
            <ProfilePicture />
            <UserInfos />
          </div>
          <div>
            <OtherUserInfos />
          </div>
          <div>
            <MoviesReviewedByUser />
          </div>
          <div>
            <ReviewsDoUsuario />
          </div>
        </div>
      </body>
    );
  }

export default Profile