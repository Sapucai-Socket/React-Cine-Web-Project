import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import App from './App'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Search from './pages/Search'
import Profile from './pages/TelaDePerfilEditavel'
import Login from './pages/Login'
import ReviewPage from './pages/ReviewPage'
import NotFound from './pages/NotFound'

import './pages/ReviewPage.css'
import './index.css'
import './pages/TelaDePerfilEditavel.css'
import './pages/MoviesGrid.css'
import './pages/Login.css'
import './pages/NotFound.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='/profile' element={<Profile />} />
          <Route path='/cadastrar' />
          <Route path='/login' element={<Login />}/>
          <Route path='/movie/:id' element={<Movie />}/>
          <Route path='search' element={<Search />}/>
          <Route path='/ReviewPage' element={<ReviewPage />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
