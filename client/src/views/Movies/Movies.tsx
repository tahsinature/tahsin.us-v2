import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Rating from '@material-ui/lab/Rating';

import ScrollingText from 'src/components/ScrollingText/ScrollingText';
import ImageLoader from 'src/components/ImageLoader/ImageLoader';
import classes from './Movies.module.scss';
import GraphLoader from 'src/components/GraphLoader/GraphLoader';

interface Movie {
  id: string;
  title: string;
  year: number;
  myRating: number;
  genres: {
    id: string;
    name: string;
    color: string;
  }[];
  image: string;
  watchedAt: string;
}

const Genres = (props: { genres: Movie['genres'] }) => {
  return (
    <div className={classes.Genres}>
      {props.genres.map(genre => (
        <span style={{ backgroundColor: genre.color }} key={genre.id} className={classes.Genre}>
          {genre.name}
        </span>
      ))}
    </div>
  );
};

const GET_MOVIES = gql`
  query {
    movies {
      id
      title
      year
      myRating
      genres {
        id
        name
        color
      }
      image
      watchedAt
    }
  }
`;

export default function Movies() {
  interface Response {
    movies: Movie[];
  }
  const { error, loading, data } = useQuery<Response>(GET_MOVIES);
  console.log(data);

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
                <Rating name="simple-controlled" value={ele.myRating / 2} readOnly size={'small'} style={{ fontSize: 12 }} />
                <br />
                <span>Watched: {ele.watchedAt}</span>
                <Genres genres={ele.genres} />
              </div>
              <div className={classes.Desc}>No description yet</div>
            </div>
          ))}
        </section>
      </div>
    </GraphLoader>
  );
}
