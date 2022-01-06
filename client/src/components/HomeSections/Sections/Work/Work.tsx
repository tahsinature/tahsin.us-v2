import React from 'react';
import Header from '../../../Header/Header';
import Section from '../../../Section/Section';
import { WorkRounded as WorkIcon } from '@material-ui/icons';
import classes from './Work.module.scss';
import colors from '../../../../constants/colors';
import { PlaceRounded, BuildRounded } from '@material-ui/icons';
import { connect } from 'react-redux';
import { ThemeManager } from '../../../../App.theme';
import styled from 'styled-components';

interface IFoo {
  company: string;
  timeRange: string;
  position: string;
  logo: string;
  url: string;
  location: string;
  specialization: string;
  techStack: string;
}

const items: IFoo[] = [
  {
    timeRange: 'July 2021 - Present',
    company: 'Bountie',
    position: 'FullStack Engineer',
    logo: 'https://gallery.tahsin.us/uploads/big/85fa136d474db39c33d638b6a6ed1402.png',
    url: 'http://www.history.com',
    location: 'Singapore (Remote)',
    specialization: 'Go, Node.js, TypeScript',
    techStack: 'foo-stack',
  },
  {
    timeRange: 'July 2021 - Present',
    company: 'TerasWork',
    position: 'FullStack Engineer',
    logo: 'https://avatars.githubusercontent.com/u/73483466',
    url: 'http://www.history.com',
    location: 'Jakarta, Indonesia (Remote)',
    specialization: 'Go, React',
    techStack: 'foo-stack',
  },
  {
    timeRange: 'Feb 2019 - June 2021',
    company: 'HaloJasa',
    position: 'Sr. Software Engineer',
    logo: 'https://gallery.tahsin.us/uploads/big/6f8a5ec77197814a488f987410bf5135.png',
    url: 'http://www.history.com',
    location: 'Jakarta, Indonesia',
    specialization: 'Node.js, Microservices, JavaScript, TypeScript',
    techStack: 'foo-stack',
  },
];

// $color-1: black;
// $color-2: white;

const Work = (props: any) => {
  const tm = new ThemeManager();
  const map = {
    dark: {
      color1: colors.light.backgroundColor,
      color2: colors.dark.backgroundColor,
    },
    light: {
      color1: colors.dark.backgroundColor,
      color2: colors.light.backgroundColor,
    },
  };

  const styles = map[tm.currentTheme];

  const UL = styled.ul`
    &:before {
      background-color: ${styles.color1};
    }
  `;

  const LABEL = styled.label`
    background-color: ${styles.color1};
    outline: 10px solid ${styles.color2};
  `;

  const P = styled.label`
    color: ${styles.color2};
    background-color: ${styles.color1};
  `;

  return (
    <Section>
      <Header title="Work" icon={<WorkIcon />} />
      <div className={classes.TimeLineBox}>
        <UL className={classes.Timeline}>
          {items.map(item => (
            <li key={item.company + item.position} className={classes.TimelineEvent}>
              <LABEL className={classes.TimelineEventIcon}></LABEL>
              <div className={classes.TimelineEventCopy}>
                <P className={classes.TimelineEventThumbnail}>
                  {item.company} <small className={classes.TimeRange}>{item.timeRange}</small>
                </P>
                <div className={classes.Logobox}>
                  <img src={item.logo} alt="" />
                </div>
                <p>
                  <strong>{item.position}</strong>
                </p>
                <div className={classes.LocationBox}>
                  <PlaceRounded fontSize="small" />
                  <p>{item.location}</p>
                </div>
                <div className={classes.LocationBox}>
                  <BuildRounded fontSize="small" />
                  <p>{item.specialization}</p>
                </div>
              </div>
            </li>
          ))}
        </UL>
      </div>
    </Section>
  );
};

const mapStateToProps = (state: any) => ({
  ...state.appReducer,
});

export default connect(mapStateToProps, null)(Work);
