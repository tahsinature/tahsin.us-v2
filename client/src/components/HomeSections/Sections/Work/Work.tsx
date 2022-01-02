import React from 'react';
import Header from '../../../Header/Header';
import Section from '../../../Section/Section';
import { WorkRounded as WorkIcon } from '@material-ui/icons';
import { Chrono } from 'react-chrono';
import classes from './Work.module.scss';
import './Chrono.scss';
import colors from '../../../../constants/colors';
import { PlaceRounded } from '@material-ui/icons';
import { connect } from 'react-redux';

interface IFoo {
  company: string;
  timeRange: string;
  position: string;
  logo: string;
  url: string;
  location: string;
  specialization: string;
}

const items: IFoo[] = [
  {
    timeRange: 'July 2021 - Present',
    company: 'Bountie',
    position: 'FullStack Engineer',
    logo: 'https://cdn.techinasia.com/data/images/hqw58hc1cQ2NicTVy9MNHcTDegW0kfbimNLllIgA.jpeg',
    url: 'http://www.history.com',
    location: 'Singapore (Remote)',
    specialization: 'Go, Node.js, TypeScript',
  },
  {
    timeRange: 'July 2021 - Present',
    company: 'TerasWork',
    position: 'FullStack Engineer',
    logo: 'https://avatars.githubusercontent.com/u/73483466',
    url: 'http://www.history.com',
    location: 'Jakarta, Indonesia (Remote)',
    specialization: 'Go, React',
  },
  {
    timeRange: 'Feb 2019 - June 2021',
    company: 'HaloJasa',
    position: 'Sr. Software Engineer',
    logo: 'https://cdn.techinasia.com/data/images/hqw58hc1cQ2NicTVy9MNHcTDegW0kfbimNLllIgA.jpeg',
    url: 'http://www.history.com',
    location: 'Jakarta, Indonesia',
    specialization: 'Node.js, Microservices, JavaScript, TypeScript',
  },
];

const Children = (props: IFoo) => {
  return (
    <div className={classes.Children}>
      <img src={props.logo} alt={`logo of ${props.company}`} />
      <p>
        <b>{props.company}</b>
      </p>
      <p>{props.position}</p>
      <div className={classes.LocationBox}>
        <PlaceRounded />
        <p>{props.location}</p>
      </div>
      <p>Specialized in: {props.specialization}</p>
    </div>
  );
};

const Work = (props: any) => {
  const theme = {
    primary: '#404040',
    secondary: '#4040402f',
    // textColor: '#404040',
    cardBgColor: props.appTheme === 'light' ? 'rgb(250, 250, 250)' : 'rgb(30, 30, 30)',
    // cardForeColor: '#4040402f',
    titleColor: colors.common.primaryGreenishColor,
  };

  return (
    <Section>
      <Header title="Work" icon={<WorkIcon />} />
      <div className={classes.TimeLineBox}>
        <Chrono
          borderLessCards
          scrollable
          children={items.map(item => (
            <Children key={item.company} {...item} />
          ))}
          items={items.map(item => ({ title: item.timeRange }))}
          theme={theme}
          mode="VERTICAL_ALTERNATING"
        />
      </div>
    </Section>
  );
};

const mapStateToProps = (state: any) => ({
  ...state.appReducer,
});

export default connect(mapStateToProps, null)(Work);
