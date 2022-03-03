import React from 'react';
import { WorkRounded as WorkIcon } from '@material-ui/icons';
import { PlaceRounded, BuildRounded } from '@material-ui/icons';
import styled from 'styled-components';

import classes from './Work.module.scss';
import colors from 'src/constants/colors';
import { ThemeManager } from 'src/App.theme';
import Section from 'src/components/Section/Section';
import Header from 'src/components/Header/Header';
import data from 'src/api/data';
import ScrollingText from 'src/components/ScrollingText/ScrollingText';

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

const items: IWorkExperience[] = data.work;

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
                  <ScrollingText className={classes.TextScroller} text={item.specialization} />
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
