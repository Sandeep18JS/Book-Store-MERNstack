import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Editbook from './pages/EditBook'
import Deletebook from './pages/DeleteBook'
import Showbook from './pages/ShowBook'
import Createbook from './pages/CreateBooks'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<Createbook />} />
      <Route path="/books/details/:id" element={<Showbook />} />
      <Route path="/books/edit/:id" element={<Editbook />} />
      <Route path="/books/delete/:id" element={<Deletebook />} />

    </Routes>
  )
}

export default App;