import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Rating from '@material-ui/lab/Rating';
import { BorderColorOutlined } from '@material-ui/icons';

import GraphLoader from 'src/components/GraphLoader/GraphLoader';
import classes from './Books.module.scss';
import CardTitle from 'src/components/Texts/CardTitle/CardTitle';
import Genres from 'src/components/Genres/Genres';
import { useEffect } from 'react';

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
      isReading
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
  isReading: boolean;
}

function Books() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { loading, error, data } = useQuery<{ books: Book[] }>(GET_MOVIES);

  const Card = (props: { book: Book }) => {
    const review = (
      <div className={classes.Rating}>
        <Rating precision={0.5} name="simple-controlled" value={props.book.myRating / 2} readOnly size={'small'} style={{ fontSize: 12 }} />
      </div>
    );

    return (
      <li className={classes.Book}>
        {props.book.isReading && <div className={classes.ReadingBadge}>Reading</div>}
        <div className={classes.Cover}>
          <img src={props.book.cover} alt="book-cover" />
        </div>
        <div className={classes.Details}>
          <CardTitle className={classes.Title} title={props.book.title} />
          <div className={classes.Author}>
            <BorderColorOutlined className={classes.AuthorIcon} />
            <span>{props.book.author}</span>
          </div>
          {!props.book.isReading && review}
          <Genres className={classes.Genres} genres={props.book.genres} />
        </div>
      </li>
    );
  };

  return (
    <div className={classes.Root}>
      <GraphLoader data={data} error={error} loading={loading}>
        <div>
          <h2>Books I've read so far</h2>
          <hr />
          <ul className={classes.Books}>
            {data?.books.map((book: Book) => (
              <Card key={book.id} book={book} />
            ))}
          </ul>
        </div>
      </GraphLoader>
    </div>
  );
}

export default Books;
