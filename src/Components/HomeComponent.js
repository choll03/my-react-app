import React , { Component } from 'react';

class HomeComponent extends Component {

	render () {
		return (
			<div>
				<main className="page lanidng-page">
			        <section className="portfolio-block block-intro">
			            <div className="container">
			                <div className="avatar" style={{backgroundImage:"url(assets/img/avatars/avatar.jpg)"}}></div>
			                <div className="about-me">
			                    <p>Hello! I am <strong>John Smith</strong>. I work as interface and front end developer. I have passion for pixel perfect, minimal and easy to use interfaces.</p><a className="btn btn-outline-primary" role="button">Hire me</a></div>
			            </div>
			        </section>
			        <section className="portfolio-block photography">
			            <div className="container">
			                <div className="row no-gutters">
			                	<div className="col-md-6 col-lg-4 item zoom-on-hover">
			                		<a> <img className="img-fluid image" src="assets/img/nature/image5.jpg" /></a>
			                	</div>
			                	<div className="col-md-6 col-lg-4 item zoom-on-hover">
			                		<a> <img className="img-fluid image" src="assets/img/nature/image2.jpg" /></a>
			                	</div>
			                	<div className="col-md-6 col-lg-4 item zoom-on-hover">
			                		<a> <img className="img-fluid image" src="assets/img/nature/image4.jpg" /></a>
			                	</div>
			                </div>
			            </div>
			        </section>
			        <section className="portfolio-block call-to-action border-bottom">
			            <div className="container">
			                <div className="d-flex justify-content-center align-items-center content">
			                    <h3>Like what you see?</h3>
			                    <button className="btn btn-outline-primary btn-lg" type="button">Hire me</button></div>
			            </div>
			        </section>
			        <section className="portfolio-block skills">
			            <div className="container">
			                <div className="heading">
			                    <h2>Special Skills</h2>
			                </div>
			                <div className="row">
			                    <div className="col-md-4">
			                        <div className="card special-skill-item border-0">
			                            <div className="card-header bg-transparent border-0"><i className="icon ion-ios-star-outline"></i></div>
			                            <div className="card-body">
			                                <h3 className="card-title">Web Design</h3>
			                                <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
			                            </div>
			                        </div>
			                    </div>
			                    <div className="col-md-4">
			                        <div className="card special-skill-item border-0">
			                            <div className="card-header bg-transparent border-0"><i className="icon ion-ios-lightbulb-outline"></i></div>
			                            <div className="card-body">
			                                <h3 className="card-title">Interface Design</h3>
			                                <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
			                            </div>
			                        </div>
			                    </div>
			                    <div className="col-md-4">
			                        <div className="card special-skill-item border-0">
			                            <div className="card-header bg-transparent border-0"><i className="icon ion-ios-gear-outline"></i></div>
			                            <div className="card-body">
			                                <h3 className="card-title">Photography and Print</h3>
			                                <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </section>
			    </main>
			    <section className="portfolio-block website gradient">
			        <div className="container">
			            <div className="row align-items-center">
			                <div className="col-md-12 col-lg-5 offset-lg-1 text">
			                    <h3>Website Project</h3>
			                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efr nunc, vivamus vel accumsan dui. Quisque ac dolor cursus, volutpat nisl vel, porttitor eros.</p>
			                </div>
			                <div className="col-md-12 col-lg-5">
			                    <div className="portfolio-laptop-mockup">
			                        <div className="screen">
			                            <div className="screen-content" style={{backgroundImage:"url(assets/img/tech/image6.png)"}}></div>
			                        </div>
			                        <div className="keyboard"></div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>
			    <section className="portfolio-block mobile-app">
			        <div className="container align-items-center">
			            <div className="row align-items-center">
			                <div className="col-md-12 col-lg-3 offset-lg-2">
			                    <div className="portfolio-phone-mockup">
			                        <div className="phone-screen" style={{backgroundImage:"url(assets/img/tech/image7.png)"}}></div>
			                        <div className="home-button"></div>
			                    </div>
			                </div>
			                <div className="col-md-12 col-lg-5 text">
			                    <h3>Mobile App</h3>
			                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui. Quisque ac dolor cursus, volutpat nisl vel, porttitor eros.</p>
			                </div>
			            </div>
			        </div>
			    </section>
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

export default HomeComponent ;

