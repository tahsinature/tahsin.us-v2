import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import ReactJson from 'react-json-view';
// import JSONViewer from 'react-json-viewer';
import classes from './JSONData.module.scss';
import { useParams } from 'react-router-dom';
import apiCalls from '../../api/calls';

// import classes from './List.module.scss';

const JSONData = () => {
  const [isLoaded, makeLoaded] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<null | Error>(null);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    apiCalls.getJSON
      .call(id)
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        setError(new Error(_.get(err, 'response.data.message', err.message)));
      })
      .finally(() => {
        makeLoaded(true);
      });
  }, []);

  const postLoad = error ? <p>{error.message}</p> : <ReactJson src={data} />;

  return <div className={classes.JSONData}>{isLoaded ? postLoad : <p>Loading</p>}</div>;
};

export default JSONData;
