
import React, {Component} from 'react'
import './Awards.css'
import {awards} from '../helpers/Data'
import gift from '../../images/pics/awards.svg'

class Awards extends Component
{
	render()
	{
		return (
			<section className = 'awards py-5 mb-5 text-light  text-lg-start text-center' id = 'awards'>
				<div className = 'container'>
					<div className = 'row align-items-center'>
						<div className = 'c2 col-lg-6 col-12 mb-lg-0 mb-5'>
							<div className = 'title mb-3'>Awards</div>
							<div className = 'underline mb-5 mx-lg-0 mx-auto'></div>
							<p className = 'text-capitalize fs-6 lh-lg'>{awards}</p>
							<div className = 'link'>
								<a className href = 'https://marocwebawards.com/blog/les-gagnants-des-mwa14/' target = '_blank' rel="noreferrer">
									<i className="fas fa-award me-2"></i> Maroc Web Awards 14th Edition (Technology)
								</a>
							</div>
							<div className = 'link'>
								<a className href = 'https://marocwebawards.com/blog/et-les-gagnants-de-la-13eme-edition-sont/' target = '_blank' rel="noreferrer">
									<i className="fas fa-award me-2"></i> Maroc Web Awards 13th Edition (Blogger of the Year)
								</a>
							</div>
						</div>
						<div className = 'c1 col-lg-6 col-12 text-center text-lg-end'>
							<img className  = 'img-fluid w-75' src = {gift} alt = 'img' />
						</div>
					</div>
				</div>
			</section>
			)
	}
}

export default Awards