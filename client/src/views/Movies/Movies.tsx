import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Rating from '@material-ui/lab/Rating';

import ScrollingText from 'src/components/ScrollingText/ScrollingText';
import classes from './Movies.module.scss';
import './Movies.scss';
import GraphLoader from 'src/components/GraphLoader/GraphLoader';
import PreLoader from 'src/components/PreLoader/PreLoader';

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

const Card = (props: { movie: Movie }) => {
  const [isReady, setReady] = useState(false);
  return (
    <PreLoader className={classes.Card} isReady={isReady}>
      <div className={classes.ImageBox}>
        <img src={props.movie.image} alt="" onLoad={() => setReady(true)} />
      </div>
      <div className={classes.Title}>
        <ScrollingText text={`${props.movie.title} (${props.movie.year})`} />
      </div>
      <div className={classes.Info}>
        <Rating precision={0.5} name="simple-controlled" value={props.movie.myRating / 2} readOnly size={'small'} style={{ fontSize: 12 }} />
        <br />
        <span>Watched: {props.movie.watchedAt}</span>
        <Genres genres={props.movie.genres} />
      </div>
      <div className={classes.Desc}>No description yet</div>
    </PreLoader>
  );
};

export default function Movies() {
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
            <Card key={ele.id} movie={ele} />
          ))}
        </section>
      </div>
    </GraphLoader>
  );
}
