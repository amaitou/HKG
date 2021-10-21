
import React, {Component} from 'react'
import './Leaders.css'
import {leaders} from '../helpers/Data'

class Leaders extends Component
{
	cards()
	{
		const card = leaders.map(item =>
		{
			return (
				<div className = 'c col-lg-3 g-1 mx-auto col-12 mb-3 align-items-center position-relative' key = {Math.random()}>
					<div className = 'card bg-transparent p-3'>
						<div className = 'c-header d-flex f-row align-items-center mb-3'>
							<img src = {item.avatar.default} className = 'rounded-circle border border-light rounded-pill w-25 h-25 me-3' alt = 'leader icon'></img>
							<div className = 'titles'>
								<h6 className = 'name'>{item.name}</h6>
								<h6 className = 'nickname text-muted'>{item.nickname}</h6>
							</div>
						</div>
						<div className = 'card-body'>
							<p>{item.desc}</p>
						</div>
						<div className = 'c-footer'>
							<a href = {item.twitter} className = "card-link" target = '_blank'><i className = "fab fa-twitter"></i></a>
							<a href = {item.github}  className = "card-link" target = '_blank'><i className = "fab fa-github"></i></a>
						</div>
					</div>
			</div>)
		})
		return card
	}
 	render()
	{
		return (
			<section className = 'leaders p-5 text-light' id = 'leaders'>
				<div className = 'container'>
					<h3 className = 'title text-center mb-2'>Community Leaders</h3>
					<div className = 'underline mb-5 mx-auto'></div>
					<div className = 'row'>
						{this.cards()}
					</div>
				</div>
			</section>
		)
	}
}

export default Leaders