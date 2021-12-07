
import React, {Component} from 'react'
import './Support.css'
import {support} from '../helpers/Data'
import girl from '../../images/pics/support.svg'

class Support extends Component
{
	render()
	{
		return (
			<section className = 'support py-5 mb-5 text-light  text-lg-start text-center' id = 'support'>
				<div className = 'container'>
					<div className = 'row align-items-center'>
						<div className = 'c1 col-lg-6 col-12 text-center text-lg-start mb-lg-0 mb-5'>
							<img className  = 'img-fluid w-75' src = {girl} alt = 'img' />
						</div>
						<div className = 'c2 col-lg-6 col-12'>
							<div className = 'title mb-3'>Support</div>
							<div className = 'underline mb-5 mx-lg-0 mx-auto'></div>
							<p className = 'text-capitalize fs-6 lh-lg'>{support}</p>
						</div>
					</div>
				</div>
			</section>
			)
	}
}

export default Support