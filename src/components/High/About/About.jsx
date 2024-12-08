import React from 'react'
import ImageFrame from '../../Low/styled/ImageFrame/ImageFrame'
import image from '../../../assets/images/img/sweets-1.jpeg'
export const About = () => {
	return (
		<section className="about py-5" id="about">
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-6 my-5">
						<h1 className="text-capitalize">about <strong className="banner-title">us</strong></h1>
						<p className="my-4 text-muted w-75">
						Allrecipes connects home cooks with their greatest sources of inspiration — other home cooks. We're the world's leading digital food brand, and that inspires us to do everything
						 possible to keep our community connected. Sixty-million home cooks deserve no less.
						</p>
						<a href="#" className="btn btn-black text-uppercase">explore</a>
					</div>
					<div className="col-10 mx-auto col-md-6 my-5 align-self-center">
						<ImageFrame image={image} />
					</div>
				</div>
			</div>
		</section>
	)
}
