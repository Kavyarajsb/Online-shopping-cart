import React from 'react'
import Footer from '../components/Footer/Footer'
import Item from '../components/Products/Product'
import PageContent from '../components/PageContent/PageContent'
import AppHeader from '../components/Header/Header'



function Home() {
  return (
    <div>
        <AppHeader/>
        <PageContent/>
        <Item/>
        <Footer/>
    </div>
  )
}

export default Home


