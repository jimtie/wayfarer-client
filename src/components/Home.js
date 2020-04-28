import React, {Component} from 'react';
import Slide from './Slide';

class Home extends Component {


	render(){

		let carouselIndicators = [];
		for(let i = 0; i < this.props.cityList.length; i++){
			carouselIndicators.push(
				<li
					key={i}
					className={i===0 ? 'active' : ''}
					data-target="#cityCarousel"
					data-slide-to={i}
				/>
			)
		}

		let slides = this.props.cityList.map( (city, index) => {
			return <Slide
				key={city._id}
				active={index===0 ? 'active' : ''}
				image={city.images.carousel.src}
				name={city.name} />
		});

		return (
			<div>
				<div id="cityCarousel" className="carousel slide mb-5" data-ride="carousel">
					<ol className="carousel-indicators">
						{carouselIndicators}
					</ol>
					<div className="carousel-inner">
						{slides}
					</div>
					<a className="carousel-control-prev" href="#cityCarousel" role="button" data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" href="#cityCarousel" role="button" data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
				<h2 className="text-center my-4">Wayfarer is...</h2>
				<div className="row justify-content-center">
					<div className="col-md">
						<h4>See the world</h4>
						<p>Ready for your next adventure but not sure where to go or what to do when you get there? Enter Wayfarer. Explore cities and read posts to get ready for your best trip yet.</p>
					</div>
					<div className="col-md">
						<h4>Share the world</h4>
						<p>Know of an awesome hike? Eat the best meal of your life? Your Wayfarer community wants to know! Hit us with a post and keep the travel vibes vibing.</p>
					</div>
					<div className="col-md">
						<h4>Repeat</h4>
						<p>After you tell us all about your latest trip, start planning your next great adventure right here on Wayfarer. We can't wait for you to start the journey with us.</p>
					</div>
				</div>
			</div>
    );
	}
}

export default Home;
