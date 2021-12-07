
import React, {Component} from 'react'
import {title, par} from '../helpers/Data'
import './Hero.css'

class Hero extends Component
{

    render()
    {
        return (
            <section className = 'hero min-vh-100 position-relative mb-5' id = 'home'>
                <div className = "header-overlay position-absolute w-100 h-100"></div>
                <div className = 'con container-fluid text-center d-flex flex-column jusitfy-content-between align-items-center position-absolute top-50 start-50 translate-middle'>
                    <div className = 'header-info w-75 h-100'>
                        <h1 className = 'mb-md-5 m-4'>{title}</h1>
                        <p className = 'mb-md-5 m-4'>{par}</p>
                        <a className = 'btn btn-outline-danger' href = 'https://hkgang.com/' target ='_blank' rel="noreferrer">See our Articles</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero
