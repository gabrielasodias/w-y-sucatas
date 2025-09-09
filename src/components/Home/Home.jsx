import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import About from '../About/About'
// import Footer from '../Footer/Footer'

function Home () {
    return (
        <>
            <Header />
            <section id="home" className="home">
                <div className="home-content">
                    <h1>Ferro Velho W.Y Sucatas & Reciclagem</h1>
                </div>

                <div>
                    <p>Coleta de materiais ferrosos, não ferrosos e sucatas em empresas e pós obras. Compra e venda de reciclagens de modo geral.</p>
                </div>
            </section>
            <About />
            {/* <Footer /> */}
        </>
    )
}

export default Home