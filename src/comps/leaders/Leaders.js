
import React, {Component} from 'react'
import './Leaders.css'
import {leaders} from '../helpers/Data'

class Leaders extends Component
{
	cards()
	{
		const card = leaders.map((item, index) =>
		{
			return (
				<div className = 'leader p-4 mb-3 mx-2 position-relative' key = {index}>
					<div className = 'head d-flex align-items-center mb-4'>
						<img className = 'rounded-circle img-fluid' src = {item.avatar.default} alt = 'card' />
						<div className = 'names ms-4'>
							<h6 className = 'name'>{item.name}</h6>
							<a href = {item.twitter} className = 'twitter-account text-decoration-none' target = '_blank' rel="noreferrer">
								<h6 className = 'nickname text-muted'>{item.nickname}</h6>
							</a> 
						</div>
					</div>
					<p className = 'desc ps-3'>{item.desc}</p>
				</div>
			)
		})
		return card
	}
 	render()
	{
		return (
			<section className = 'leaders py-5 mb-5 text-light' id = 'leaders'>
				<div className = 'container'>
					<h3 className = 'title text-center mb-3'>Community Leaders</h3>
					<div className = 'underline mb-5 mx-auto'></div>
					<div className = 'box d-flex flex-wrap justify-content-center'>
						{this.cards()}
					</div>
				</div>
			</section>
		)
	}
}

export default Leaders