import { useState, useEffect } from "react"
import Movie from "./Movie";
import MovieCard from "../components/MovieCard";
import Carussel from "../components/Carussel";
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Header from "../components/Header"; // make sure to import the Header component
import '../components/Carussel.css'


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)
    }

    const getNowPlayingMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setNowPlayingMovies(data.results)
    }

    useEffect(() => {
        const nowPlayingUrl = `${moviesURL}now_playing?${apiKey}&language=pt-BR`
        getNowPlayingMovies(nowPlayingUrl)

        const topRatedUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;
        getTopRatedMovies(topRatedUrl)
    }, [])

    const [AuthUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        })
        return () => {
            listen();
        }
    }, [])

    const userSignOut = () => {
        signOut(auth).then(() => {
            alert('Signed out sucessfully!')
        }).catch(error => console.log(error))
    }

    const controls = document.querySelectorAll('.control');

    let currentItem = 0;
    const items = document.querySelectorAll('.item');
    const maxItems = document.querySelectorAll('.item').length;

    controls.forEach(control => {
        control.addEventListener('click', () => {
            const isLeft = control.classList.contains('arrow-left');
            if (isLeft) {
                currentItem -= 1;
            } else {
                currentItem += 1;
            }

            if(currentItem >= maxItems) {
                currentItem = 0;
            }

            if (currentItem < 0 ) {
                currentItem = maxItems - 1;
            }
            
            items.forEach(item =>
                item.classList.remove('current-item'));
            
            items[currentItem].scrollIntoView({
                inline: "center",
                behavior: 'smooth',
            });

            items[currentItem].classList.add('current-item');
        });
    });

    const controls2 = document.querySelectorAll('.control2');

    let currentItem2 = 0;
    const items2 = document.querySelectorAll('.item2');
    const maxItems2 = document.querySelectorAll('.item2').length;

    controls2.forEach(control2 => {
        control2.addEventListener('click', () => {
            const isLeft2 = control2.classList.contains('arrow-left2');
            if (isLeft2) {
                currentItem2 -= 3;
            } else {
                currentItem2 += 3;
            }

            if(currentItem2 >= maxItems2) {
                currentItem2 = 0;
            }

            if (currentItem2 < 0 ) {
                currentItem2 = maxItems2 - 1;
            }
            
            items2.forEach(item2 =>
                item2.classList.remove('current-item2'));
            
            items2[currentItem2].scrollIntoView({
                inline: "center",
                behavior: 'smooth',
            });

            items2[currentItem2].classList.add('current-item2');
        });
    });



    return (
        <div className="container">
            <Header user={AuthUser} />
            <div style={{ textAlign: "center" }}>
                {AuthUser ?
                    <>
                        <h4>Name: {AuthUser.displayName}</h4>
                        <p>{`Signed In as ${AuthUser.email}`}</p>
                        <button onClick={userSignOut}>Sign Out</button>
                    </>
                    :
                    <p>Signed Out</p>
                }
            </div>
            <div className="wrapper-content">
                <div className="lista">
                    <div className="title">
                        <h2>Populares na Ciné</h2>
                        <a href="#">Ver Lista</a>
                    </div>
                    <hr></hr>
                    <div className="movie-carrusel-container">
                        <button className="arrow-left control" aria-label="Previous Image">⭕</button>
                        <button className="arrow-right control" aria-label="Next Image">⭕</button>
                        <div className="movie-gallery-wrapper">
                            <div className="movie-gallery">
                                {nowPlayingMovies.length === 0 && <p>Carregando...</p>}
                                {nowPlayingMovies.length > 0 && nowPlayingMovies.map((movie) => <Carussel key={movie.id} movie={movie} />)}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
           
            <div className="wrapper-content">
                <div className="lista">
                    <div className="title">
                        <h2>Populares na Ciné</h2>
                        <a href="#">Ver Lista</a>
                    </div>
                    <hr></hr>
                    <div className="movie-container">
                        <button className="arrow-left2 control2" aria-label="Previous Image">⭕</button>
                        <button className="arrow-right2 control2" aria-label="Next Image">⭕</button>
                        <div className="movie-gallery-general-wrapper">
                            <div className="movie-gallery-general">
                                {topMovies.length === 0 && <p>Carregando...</p>}
                                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home