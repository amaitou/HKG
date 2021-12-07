

import React, {Component} from 'react'
import './Footer.css'

class Footer extends Component
{
	render()
	{
		return(
			<footer className = 'footer py-3 px-2 text-light'>
				<div className = 'container'>
					<div className = 'last text-lg-start text-center'>
						This Website Has Been Created And Designed By <span className = "owner">Amine Ait Ouazghour</span> Also Known As<span className = "owner"> Lelouche01 </span>
                		Open Sourced At <a href = "https://github.com/Lelouche01" target = "_blank" rel="noreferrer"><i className = "fab fa-github"></i></a>, and Published On <span className = "year">2021</span>
					</div>
				</div>
			</footer>
			)
	}
}

export default Footer