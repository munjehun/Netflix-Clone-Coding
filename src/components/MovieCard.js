import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function MovieCard({ movie }) {
  const { genreList } = useSelector((state) => state.movie);

  return (
    <a
      href="/"
      className="movieCard"
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.poster_path})`,
      }}
    >
      <div className="movieCard-info">
        <h1 className="movieCard-info-title">{movie.title}</h1>
        <div className="movieCard-info-detail">
          <div className="movieCard-info-average">
            <Badge bg="danger">{movie.vote_average}</Badge>
          </div>
          <div className="movieCard-info-genres">
            {movie.genre_ids.map((id) => (
              <Badge bg="danger" key={id}>
                {genreList.find((genre) => genre.id === id).name}
              </Badge>
            ))}
          </div>
          <div className="movieCard-info-adult">
            {movie.adult ? <Badge bg="danger">청불</Badge> : null}
          </div>
        </div>
      </div>
    </a>
  );
}

export default MovieCard;
