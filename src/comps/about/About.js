
import React, {Component} from 'react'
import './About.css'
import about from "../../images/pics/about.svg"
import {aboutus} from '../helpers/Data'
import {accounts} from '../helpers/Data'

class About extends Component
{
	display_accounts = _ =>
	{
		let items = accounts.map((item, index) =>
		{
			return (
				<a className = 'l me-3' href = {item.url} target = 'blank' key = {index} rel = "noreferrer"><i className = {`${item.icon}`}></i></a>
			)
		})
		return items 
	}

	render()
	{
		return (

			<section className = 'about text-light py-5 mb-5 text-lg-start text-center' id = 'about'>
				<div className = 'container'>
					<h3 className = 'title text-center mb-3'>About</h3>
					<div className = 'underline mb-5 mx-auto'></div>
					<div className = 'row align-items-center'>
						<div className = 'c col-lg-6 col-12 text-center text-lg-start'>
							<img className  = 'img-fluid w-75 mb-lg-0 mb-5' src = {about} alt = 'img' />
						</div>
						<div className = 'c col-lg-6 col-12'>
							<div className = 'fs-6 lh-lg mb-3'>{aboutus}</div>
							<div className ='accounts d-flex justify-content-lg-start justify-content-center'>
								{this.display_accounts()}
							</div>
						</div>
					</div>
				</div>
			</section>
			)
	}
}

export default About