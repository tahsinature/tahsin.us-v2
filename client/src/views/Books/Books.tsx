import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Rating from '@material-ui/lab/Rating';

import GraphLoader from 'src/components/GraphLoader/GraphLoader';
import classes from './Books.module.scss';
import CardTitle from 'src/components/Texts/CardTitle/CardTitle';
import Genres from 'src/components/Genres/Genres';

const GET_MOVIES = gql`
  query {
    books {
      id
      title
      author
      myRating
      genres {
        id
        name
        color
      }
      cover
    }
  }
`;

interface Book {
  id: string;
  title: string;
  author: string;
  myRating: number;
  genres: {
    id: string;
    name: string;
    color: string;
  }[];
  cover: string;
}

function Books() {
  const { loading, error, data } = useQuery<{ books: Book[] }>(GET_MOVIES);

  const Card = (props: { book: Book }) => {
    return (
      <li className={classes.Book}>
        <div className={classes.Cover}>
          <img src={props.book.cover} alt="book-cover" />
        </div>
        <div className={classes.Details}>
          <CardTitle title={props.book.title} />
          <span>Author: {props.book.author}</span>
          <Rating precision={0.5} name="simple-controlled" value={props.book.myRating / 2} readOnly size={'small'} style={{ fontSize: 12 }} />
          <Genres genres={props.book.genres} />
        </div>
      </li>
    );
  };

  return (
    <div className={classes.Root}>
      <GraphLoader data={data} error={error} loading={loading}>
        <ul className={classes.Books}>
          {data?.books.map((book: Book) => (
            <Card key={book.id} book={book} />
          ))}
        </ul>
      </GraphLoader>
    </div>
  );
}

export default Books;
