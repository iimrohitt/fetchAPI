import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AppRoute from './utils/AppRoute'

const App = () => {
  return (
    <>
      <Header />
      <AppRoute />
      <Footer />
    </>
  )
}

export default App