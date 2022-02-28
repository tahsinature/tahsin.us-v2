import React from 'react';
import { gql, useQuery } from '@apollo/client';

import ScrollingText from 'src/components/ScrollingText/ScrollingText';
import ImageLoader from 'src/components/ImageLoader/ImageLoader';
import classes from './Movies.module.scss';

// import classes from './Movies.module.scss';
import './Movies.scss';

const GET_MOVIES = gql`
  query {
    movies {
      id
      title
      year
      myRating
      genres
      image
      watchedAt
    }
  }
`;

export default function Movies() {
  interface Movie {
    id: string;
    title: string;
    year: number;
    myRating: string;
    genres: string[];
    image: string;
    watchedAt: string;
  }

  interface Response {
    movies: Movie[];
  }
  const { error, loading, data } = useQuery<Response>(GET_MOVIES);
  console.log('error', error);
  console.log('loading', loading);
  console.log('data', data);

  const loadingComp = (
    <>
      <p>Loading</p>
    </>
  );

  const mainComp = (
    <>
      <div className="app">
        <h2>Some of my favorite movies of all time</h2>
        {/* <div >
          
        </div> */}
        <hr />
        <section className="movies">
          {data?.movies.map(ele => (
            <div className={['movie'].join(' ')} key={ele.title}>
              <div className={classes.ImageBox}>
                <ImageLoader src={ele.image} />
              </div>
              {/* <img onLoad={() => console.log('loaded')} src={ele.image} alt="" className="poster" /> */}
              <div className="title">
                <ScrollingText text={`${ele.title} (${ele.year})`} />
              </div>
              <div className="info">
                <span className="length">My Rating: {ele.myRating}</span>
                <br />
                <span className="length">Watched: {ele.watchedAt}</span>
              </div>
              <div className="desc">No description yet</div>
            </div>
          ))}
        </section>
        <div className="detail">
          <svg className="close">
            <use href="#close"></use>
          </svg>
          <div className="movie">
            <img src="https://github.com/supahfunk/supah-codepen/blob/master/movie-room.jpg?raw=true" alt="" className="poster active" />
            <div className="title">Room</div>
            <div className="info">
              <span className="length">117 min</span>
              <span className="year">2015</span>
            </div>
            <div className="desc">
              Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it are the only real things in the world. But what will happen when his Ma
              suddenly tells him that there are other things outside of Room?
            </div>

            <button className="play">play movie</button>
          </div>
        </div>
      </div>
    </>
  );

  return loading ? loadingComp : mainComp;
}
