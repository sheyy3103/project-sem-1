import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function Masterlayout({children}) {
  return (
    <div>
            <div>
                <Header />
            </div>
            <div>
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
  )
}

export default Masterlayout