import React from 'react';
import { WorkRounded as WorkIcon } from '@material-ui/icons';
import { PlaceRounded, BuildRounded } from '@material-ui/icons';
import styled from 'styled-components';

import classes from './Work.module.scss';
import colors from 'src/constants/colors';
import { ThemeManager } from 'src/App.theme';
import Section from 'src/components/Section/Section';
import Header from 'src/components/Header/Header';
import images from 'src/assets/images';

interface IWorkExperience {
  company: string;
  timeRange: string;
  position: string;
  logo: string;
  url: string;
  location: string;
  specialization: string;
  techStack: string;
}

const items: IWorkExperience[] = [
  {
    timeRange: 'Jul 2021 - Present',
    company: 'Rakuten Travel Xchange',
    position: 'FullStack Engineer',
    logo: 'https://solutions.travel.rakuten.com/favicon.ico',
    url: 'https://solutions.travel.rakuten.com/',
    location: 'Singapore (Remote)',
    specialization: 'Express, Vue 3',
    techStack: 'foo-stack',
  },
  {
    timeRange: 'Jul 2021 - Jan 2022',
    company: 'Bountie',
    position: 'FullStack Engineer',
    logo: images.logogs.work.bountie.justLogo,
    url: 'https://www.bountie.io/',
    location: 'Singapore (Remote)',
    specialization: 'Go, Node.js, TypeScript',
    techStack: 'foo-stack',
  },
  {
    timeRange: 'Jul 2021 - Present',
    company: 'TerasWork',
    position: 'FullStack Engineer',
    logo: images.logogs.work.teras,
    url: 'http://www.history.com',
    location: 'Indonesia (Remote)',
    specialization: 'Go, React',
    techStack: 'foo-stack',
  },
  {
    timeRange: 'Feb 2019 - Jun 2021',
    company: 'HaloJasa',
    position: 'Sr. Software Engineer',
    logo: images.logogs.work.halojasa,
    url: 'https://halojasa.com/',
    location: 'Indonesia',
    specialization: 'Node.js, Microservices, JavaScript, TypeScript',
    techStack: 'foo-stack',
  },
];

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

const ListContainer = styled.ul<{ backgroundColor: string }>`
  &:before {
    background-color: ${props => props.backgroundColor};
  }
`;

const LeftIcon = styled.label<{ backgroundColor: string; outlineColor: string }>`
  background-color: ${props => props.backgroundColor};
  outline: 10px solid ${props => props.outlineColor};
`;

const Title = styled.label<{ color: string; backgroundColor: string }>`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
`;

const Work = () => {
  const tm = new ThemeManager();

  const styles = map[tm.currentTheme];

  return (
    <Section>
      <Header title="Work" icon={<WorkIcon />} />
      <div className={classes.TimeLineBox}>
        <ListContainer backgroundColor={styles.color1} className={classes.Timeline}>
          {items.map(item => (
            <li key={item.company + item.position} className={classes.TimelineEvent}>
              <LeftIcon backgroundColor={styles.color1} outlineColor={styles.color2} className={classes.TimelineEventIcon}></LeftIcon>
              <div className={classes.TimelineEventCopy}>
                <Title color={styles.color2} backgroundColor={styles.color1} className={classes.TimelineEventThumbnail}>
                  {item.company} <small className={classes.TimeRange}>{item.timeRange}</small>
                </Title>
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
        </ListContainer>
      </div>
    </Section>
  );
};

export default Work;
