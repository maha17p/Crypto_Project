import React from 'react';
import {Routes,Route} from 'react-router-dom'
import {CryptoDetails, Currency, Exchanges, HomePage, News} from './pages'
const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/currency' element={<Currency />} />
        <Route path='/exchanges' element={<Exchanges />} />
        <Route path='/news' element={<News />} />
        <Route path='/crypto/:coinID' element={<CryptoDetails />} />

    </Routes>
  )
}

export default Router