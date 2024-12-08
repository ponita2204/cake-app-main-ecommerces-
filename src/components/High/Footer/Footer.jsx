import React from 'react'

export const Footer = () => {
	return (
		<footer>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6 footer-title py-5">
						<h1 className="text-capitalize text-center">
							<strong className="banner-title">Niitaa</strong>
						</h1>
						<div className="footer-icons mt-3 d-flex justify-content-around flex-wrap">
							<a href="https://web.facebook.com/" className="footer-icon" target="_blank">
								<i className="fab fa-facebook"></i>
							</a>
							<a href="#" className="footer-icon">
								<i className="fab fa-twitter"></i>
							</a>
							<a href="https://www.instagram.com/" className="footer-icon">
								<i className="fab fa-instagram"></i>
							</a>
							<a href="#" className="footer-icon">
								<i className="fab fa-google-plus"></i>
							</a>

						</div>
					</div>
					<div className="col-md-6 footer-contact text-center text-capitalize p-5">
						<h3 className="mb-5">contact</h3>
						<p className="d-flex flew-wrap">
							<span className="mr-4 footer-icon">
								<i className="fas fa-map"></i>
							</span>
							<span>
                                #517 58p street, SenSok, PhnomPenh city
							</span>
						</p>
						<p className="d-flex flew-wrap">
							<span className="mr-4 footer-icon">
								<i className="fas fa-phone"></i>
							</span>
							<span>
                                +885 888565388
							</span>
						</p>
						<p className="d-flex flew-wrap">
							<span className="mr-4 footer-icon">
								<i className="fas fa-envelope"></i>
							</span>
							<span>
                                nitapo2204@email.com
							</span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
