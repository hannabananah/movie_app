import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Header from "../components/Header";
import "./Home.css";

class Home extends React.Component {
	state = {
		isLoading: true,
		movies: [],
	}
	getMovies = async () => {
		const {
			data: {
				data: { movies },
			},
		} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
		this.setState({ movies, isLoading: false })
	}

	componentDidMount() {
		this.getMovies()
	}
	render() {
		const { isLoading, movies } = this.state

		return (
			<section className="container">
				<div className="header">
          <Header />
        </div>
				{isLoading ? (
					<div className="loader">
						<div className="loader__text">
							<span>L</span>
							<span>o</span>
							<span>a</span>
							<span>d</span>
							<span>i</span>
							<span>n</span>
							<span>g</span>
							<span>.</span>
						</div>
					</div>
				) : (
					<div className="movies">
						{movies.map((movie) => (
							<Movie
								key={movie.id}
								id={movie.id}
								year={movie.year}
								title={movie.title}
								summary={movie.summary}
								poster={movie.medium_cover_image}
								genres={movie.genres}
							/>
						))}
					</div>
				)}
			</section>
		)
	}
}

export default Home;