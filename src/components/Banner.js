import React from 'react';

function Banner({ popularMovie }) {
  console.log(popularMovie);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${popularMovie.poster_path})`,
      }}
    >
      <div className="banner-info">
        <h1>{popularMovie.title}</h1>
        <p>{popularMovie.overview}</p>
      </div>
    </div>
  );
}

export default Banner;
