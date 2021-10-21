
import React, {Component} from 'react'
import {navlist} from '../helpers/Data'
import './Navbar.css'


class Navbar extends Component
{
    state = {
        scroll: false,
    }

    changeone = _ =>
    {
        if(window.scrollY >= 160)
        {
            this.setState({scroll: true})
        }
        else
        {
            this.setState({scroll: false})
        }
    }

    changetwo = _ =>
    {
        if(window.scrollY <= 160)
        {
            document.getElementsByClassName('navbar')[0].classList.toggle('active')
        }
    }

    componentDidMount()
    {    
        window.addEventListener("scroll", this.changeone)
        document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', this.changetwo)
    }

    items()
    {
        const b = navlist.map(item => 
        {
            return (
                <li className = 'nav-item me-2' key = {Math.random()}>
                    <a className = 'nav-link' href = {`#${item.toLowerCase()}`}>{item}</a>
                </li>)
        })
       return b
    }
    
    render()
    {
        return (
            <nav className = {`navbar navbar-expand-md navbar-dark fixed-top ${this.state.scroll ? 'active py-1' : 'py-2'}`}>
                <div className = 'container'>
                    <a className = 'navbar-brand' href = '#home'>HkG</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggler">Ξ</button>
                    <div className = 'collapse navbar-collapse' id = 'toggler'>
                        <ul className = 'navbar-nav ms-auto'>
                            {this.items()}
                        </ul>
                    </div>
                </div>
            </nav>
     )      
    }
}

export default Navbar
