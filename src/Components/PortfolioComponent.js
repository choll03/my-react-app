import React , { Component } from 'react';

class PortfolioComponent extends Component {

	render () {
		return (
			<div>
			<main className="page projects-page">
		        <section className="portfolio-block projects-cards">
		            <div className="container">
		                <div className="heading">
		                    <h2>Recent Work</h2>
		                </div>
		                <div className="row">
		                    <div className="col-md-6 col-lg-4">
		                        <div className="card border-0"><a ><img src="assets/img/nature/image1.jpg" aria-hidden alt="image" className="card-img-top scale-on-hover" /></a>
		                            <div className="card-body">
		                                <h6><a >Lorem Ipsum</a></h6>
		                                <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-md-6 col-lg-4">
		                        <div className="card border-0"><a ><img src="assets/img/nature/image2.jpg" alt={`image 2`} className="card-img-top scale-on-hover" /></a>
		                            <div className="card-body">
		                                <h6><a >Lorem Ipsum</a></h6>
		                                <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-md-6 col-lg-4">
		                        <div className="card border-0"><a ><img src="assets/img/nature/image3.jpg" alt={`image 3`} className="card-img-top scale-on-hover" /></a>
		                            <div className="card-body">
		                                <h6><a >Lorem Ipsum</a></h6>
		                                <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-md-6 col-lg-4">
		                        <div className="card border-0"><a ><img src="assets/img/nature/image4.jpg" alt={`image 4`} className="card-img-top scale-on-hover" /></a>
		                            <div className="card-body">
		                                <h6><a >Lorem Ipsum</a></h6>
		                                <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-md-6 col-lg-4">
		                        <div className="card border-0"><a ><img src="assets/img/nature/image5.jpg" alt={`image 5`} className="card-img-top scale-on-hover" /></a>
		                            <div className="card-body">
		                                <h6><a >Lorem Ipsum</a></h6>
		                                <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-md-6 col-lg-4">
		                        <div className="card border-0"><a ><img src="assets/img/nature/image6.jpg" alt={`image 6`} className="card-img-top scale-on-hover" /></a>
		                            <div className="card-body">
		                                <h6><a >Lorem Ipsum</a></h6>
		                                <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.</p>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </section>
		    </main>
		    <footer className="page-footer gradient">
	            <div className="container">
	                <div className="links"><a >About me</a><a >Projects</a></div>
	                <div className="social-icons"><a ><i className="icon ion-social-facebook"></i></a><a ><i className="icon ion-social-instagram-outline"></i></a><a ><i className="icon ion-social-twitter"></i></a></div>
	            </div>
	        </footer>
		    </div>
		)
	}
}

export default PortfolioComponent ;

