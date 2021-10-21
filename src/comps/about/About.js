
import React, {Component} from 'react'
import './About.css'
import about from "../../images/pics/about.svg"
import {aboutus} from '../helpers/Data'

class About extends Component
{
	render()
	{
		return (

			<section className = 'about text-light p-5 text-lg-start text-center' id = 'about'>
				<div className = 'container'>
					<h3 className = 'title text-center mb-2'>About</h3>
					<div className = 'underline mb-5 mx-auto'></div>
					<div className = 'row align-items-center'>
						<div className = 'col-md-6 col-sm-12'>
							<img className  = 'img-fluid w-75 mb-4' src = {about} alt = 'img' />
						</div>
						<div className = 'col-md-6 col-sm-12'>
							<div className = 'fs-6 lh-lg'>{aboutus}</div>
						</div>
					</div>
				</div>
			</section>
			)
	}
}

export default About