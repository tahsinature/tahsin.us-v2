import React from 'react';

import HomeSections from '../../components/HomeSections/HomeSections';
import { IReducers } from '../../interfaces/reducers';

import classes from './Home.module.scss';

const Home = (props: { basicData: IReducers.IAppReducer['basicData'] }) => {
  if (!props.basicData) throw new Error('basic data not found but component tried to render');
  return (
    <div className={classes.Home}>
      <header className="tc pv4 pv5-ns">
        <img src={props.basicData.personal.avatar} className="br-100 pa1 ba b--black-10 h3 w3" alt="avatar" />
        <h1 className="f5 f4-ns fw6 avenir">{props.basicData.personal.name}</h1>
        <h2 className="f6 ttu tracked">{props.basicData.personal.profession}</h2>
        <small className="tracked">{props.basicData.personal.email}</small>
      </header>
      <HomeSections basicData={props.basicData} />
    </div>
  );
};

export default Home;
