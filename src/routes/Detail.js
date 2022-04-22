import React from "react";
import "./Detail.css";

class Detail extends React.Component {
   componentDidMount() {
      const {location, history}=this.props;
      if(location.state===undefined) {
         history.push('/');
      }
   }
   render() {
      const {location}=this.props
      if(location.state) {
         return (
            <div className="detail">
               <img src={location.state.poster}
                  alt={location.state.title} title={location.state.poster} />
               <div className="movie_data">
                  <h3 className="movie_title">{location.state.title}</h3>
                  <h5 className="movie_year">{location.state.year}</h5>
                  <ul className="movie_genres">
                     {location.state.genres.map((genre, index) => {
                        return (<li key={index} className="movie_genre">
                           {location.state.genre}
                        </li>
                        )
                     })}
                  </ul>
                  <p className="movie_summary">{location.state.summary}</p>
               </div>
               <span>{location.state.title}</span>
            </div>
         )
      } else {
         return null
      }
   }
}

export default Detail;