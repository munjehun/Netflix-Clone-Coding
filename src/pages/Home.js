import React, { useEffect } from 'react';
import { movieActions } from '../redux/actions/movieActions';
import { useDispatch } from 'react-redux';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.getMovies());
  }, []);
  return <div>Home</div>;
}

export default Home;
