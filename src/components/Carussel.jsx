import { Link } from "react-router-dom"

import {FaStar} from "react-icons/fa"
import Movie from "../pages/Movie"
const imageUrl = import.meta.env.VITE_IMG

const Carussel = ({movie, showLink = true, type = 1}) => {
  
  //var url_path = type == 1 ? movie.backdrop_path : type == 2 ? movie.poster_path : ""
  var url_path = type == 1 ? movie.backdrop_path : movie.poster_path
  
  return <div className="movie-card-carussel">
    {showLink && <Link to={`/movie/${movie.id}`}>
      <img src={imageUrl + movie.backdrop_path} alt={movie.title} />
    <h2>{movie.title}</h2>
    <h2>{movie.vote_avarage}</h2>
    <p>{movie.overview}</p>
      </Link>}
  
  </div>
}

export default Carussel;