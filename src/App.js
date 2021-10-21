
import React, {Component} from 'react'
import Navbar from './comps/navbar/Navbar'
import Hero from './comps/hero/Hero'
import About from './comps/about/About'
import Services from './comps/services/Services'
import Support from './comps/support/Support'
import Leaders from './comps/leaders/Leaders'
import Awards from './comps/awards/Awards'
import Footer from './comps/footer/Footer'

class App extends Component
{
    render()
    {
        return (
            <>
                <div className = '_navbar'>
                    <Navbar />
                </div>
                <div className = '_body'>
                    <Hero />
                    <About />
                    <Services />
                    <Support />
                    <Awards />
                    <Leaders />
                </div>
                <div className = '_footer'>
                    <Footer />
                </div>
            </>
        )
    }
}

export default App;
