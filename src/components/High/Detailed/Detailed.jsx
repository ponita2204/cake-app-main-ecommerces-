import React from 'react'

export const Detailed = () => {
	return (
		<section id="services" className="services py-5">
			<div className="container">
				<div className="row">
					{/* <!-- single service */}
					<div className="col-md-4 text-center my-3">

						<img src="img/bread-icon.png" alt="bread icon" />
						<h6 className="text-uppercase my-3 service-title">bread</h6>
						<p className="w-75 mx-auto text-left service-text">
						Bread is one of the oldest and most widespread prepared foods 
						in the world, central to many cultures and cuisines.
						</p>
					</div>
					{/* <!-- end of single service */}
					{/* <!-- single service */}
					<div className="col-md-4 text-center my-3">

						<img src="img/cupcake-icon.png" alt="bread icon" />
						<h6 className="text-uppercase my-3 service-title">cupckakes</h6>
						<p className="w-75 mx-auto text-left service-text">
						A cupcake is a small, individual-sized cake that is typically
						 baked in a paper or foil liner. It is a popular treat for birthdays, 
						 parties, and casual snacking, 
						offering the convenience of a personal portion of cake. 
						</p>
					</div>
					{/* <!-- end of single service */}
					{/* <!-- single service */}
					<div className="col-md-4 text-center my-3">

						<img src="img/candy-icon.png" alt="bread icon" />
						<h6 className="text-uppercase my-3 service-title">candy</h6>
						<p className="w-75 mx-auto text-left service-text">
						Candy is a broad term used to describe a variety of sweet 
						confections that are typically made from sugar, and often combined 
						with other ingredients like chocolate, fruits, 
						nuts, syrups, flavorings, and colorings. 
						</p>
					</div>
					{/* <!-- end of single service */}
				</div>
			</div>
		</section>
	)
}
