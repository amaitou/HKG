

import React, {Component} from 'react'
import './Footer.css'
import {accounts} from '../helpers/Data'

class Footer extends Component
{
	links()
	{
		const account = accounts.map(item =>
		{
			return (
				<a className = {`me-4 ${item.icon}`} href = {item.url} target = '_blank' key = {Math.random()}></a>
			)
		})
		return account
	}

	render()
	{
		return(
			<footer className = 'footer py-3 px-2 text-light' id = 'contact'>
				<div className = 'container'>
					<div className = 'prefooter row'>
						<div className = 'accounts w-100 mb-4 mx-auto col-5 text-center'>
							<h3 className = 'title mb-3'>Let's Connect!</h3>
							<div className = 'urls'>
								{this.links()}
							</div>
						</div>
					</div>
					
					<div className = 'last text-lg-start text-center'>
						This Website Has Been Created And Designed By <span className = "owner">Amine Ait Ouazghour</span> Also Known As<span className = "owner"> Lelouche01 </span>
                		Open Sourced At <a href = "https://github.com/Lelouche01" target = "_blank"><i className = "fab fa-github"></i></a>, and Published On <span className = "year">2021</span>
					</div>
				</div>
			</footer>
			)
	}
}

export default Footer