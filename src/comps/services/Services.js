
import React, {Component} from 'react'
import {services} from '../helpers/Data'
import './Services.css'

class Services extends Component
{
	cards()
	{
		const card = services.map(item  =>
		{
			return (
				<div key = {Math.random()} className = ' py-3 s position-relative ms-3 mb-3'>
					<div className = 'card bg-transparent'>
						<h2 className = 'card-title mb-4 text-center'>{item.title}</h2>
						<img src = {item.icon.default} className = 'w-25 mx-auto' alt = 'icon' />
						<p className = 'card-body text-center'>{item.desc}</p>
					</div>
				</div>
				)
		})
		return card
	}

	render()
	{
		return ( 
			<section className = 'services py-5 mb-5 text-light' id = 'services'>
				<div className = 'container'>
					<h3 className = 'title text-center mb-3'>Services</h3>
					<div className = 'underline mb-5 mx-auto'></div>
					<div className = '_box d-flex flex-wrap justify-content-center'>
						{this.cards()}
					</div>
				</div>
			</section>
			)
	}
}

export default Services