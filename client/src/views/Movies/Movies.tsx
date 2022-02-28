import React from 'react';
import { gql, useQuery } from '@apollo/client';

import ScrollingText from 'src/components/ScrollingText/ScrollingText';
import ImageLoader from 'src/components/ImageLoader/ImageLoader';
import classes from './Movies.module.scss';
import GraphLoader from 'src/components/GraphLoader/GraphLoader';

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

  return (
    <GraphLoader data={data} error={error} loading={loading} loadingMsg="Fetching Watched Movies">
      <div className={classes.Movies}>
        <h2>Some of my favorite movies of all time</h2>
        <hr />
        <section className={classes.Cards}>
          {data?.movies.map(ele => (
            <div className={classes.Card} key={ele.title}>
              <div className={classes.ImageBox}>
                <ImageLoader src={ele.image} />
              </div>
              <div className={classes.Title}>
                <ScrollingText text={`${ele.title} (${ele.year})`} />
              </div>
              <div className={classes.Info}>
                <span>My Rating: {ele.myRating}</span>
                <br />
                <span>Watched: {ele.watchedAt}</span>
              </div>
              <div className={classes.Desc}>No description yet</div>
            </div>
          ))}
        </section>
      </div>
    </GraphLoader>
  );

  // return loading ? loadingComp : mainComp;
}
