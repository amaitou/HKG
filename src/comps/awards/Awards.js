
import React, {Component} from 'react'
import './Awards.css'
import {awards} from '../helpers/Data'
import gift from '../../images/pics/awards.svg'

class Awards extends Component
{
	render()
	{
		return (
			<section className = 'awards p-5 text-light  text-lg-start text-center' id = 'awards'>
				<div className = 'container'>
					<div className = 'row align-items-center'>
						<div className = 'c2 col-md-6 col-12'>
							<div className = 'title mb-2'>Awards</div>
							<div className = 'underline mb-5 mx-lg-0 mx-auto'></div>
							<p className = 'text-capitalize fs-6 lh-lg'>{awards}</p>
							<div className = 'link'>
								<a className href = 'https://marocwebawards.com/blog/les-gagnants-des-mwa14/' target = '_blank'>
									<i className="fas fa-award me-2"></i> Maroc Web Awards 14th Edition (Technology)
								</a>
							</div>
							<div className = 'link'>
								<a className href = 'https://marocwebawards.com/blog/et-les-gagnants-de-la-13eme-edition-sont/' target = '_blank'>
									<i className="fas fa-award me-2"></i> Maroc Web Awards 13th Edition (Blogger of the Year)
								</a>
							</div>
						</div>
						<div className = 'c1 col-md-6 col-12'>
							<img className  = 'img-fluid w-50 mb-3 mx-auto d-none d-md-block' src = {gift} alt = 'img' />
						</div>
					</div>
				</div>
			</section>
			)
	}
}

export default Awards