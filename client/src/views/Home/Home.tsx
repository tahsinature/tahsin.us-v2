import React from 'react';

import HomeSections from 'src/components/HomeSections/HomeSections';
import data from 'src/api/data';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <div className={classes.Home}>
      <header className="tc pv4 pv5-ns">
        <img src={data.basicData.personal.avatar} className="br-100 pa1 ba b--black-10 h3 w3" alt="avatar" />
        <h1 className="f5 f4-ns fw6 avenir">{data.basicData.personal.name}</h1>
        <h2 className="f6 ttu tracked">{data.basicData.personal.profession}</h2>
        <small className="tracked">{data.basicData.personal.email}</small>
      </header>
      <HomeSections />
    </div>
  );
};

export default Home;
