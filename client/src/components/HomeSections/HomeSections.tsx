import React from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';

import classes from './HomeSections.module.scss';
import FewWordsAboutMe from 'src/components/HomeSections/Sections/FewWordsAboutMe/FewWordsAboutMe';
import ToolsIAmUsing from 'src/components/HomeSections/Sections/ToolsIAmUsing/ToolsIAmUsing';
import FrameworksAndLibraries from 'src/components/HomeSections/Sections/FrameworksAndLibraries/FrameworksAndLibraries';
import ProgrammingLanguages from 'src/components/HomeSections/Sections/ProgrammingLanguages/ProgrammingLanguages';
import MyContributions from 'src/components/HomeSections/Sections/MyContributions/MyContributions';
import PublishedWriting from 'src/components/HomeSections/Sections/PublishedWriting/PublishedWriting';
import OtherActivities from 'src/components/HomeSections/Sections/OtherActivities/OtherActivities';
import FindMeElseWhere from 'src/components/HomeSections/Sections/FindMeElseWhere/FindMeElseWhere';
import Work from 'src/components/HomeSections/Sections/Work/Work';
import HumanLanguages from 'src/components/HomeSections/Sections/HumanLanguages/HumanLanguages';
// import PublicSpeaking from './Sections/PublicSpeaking/PublicSpeaking';
// import EventsIAmAt from './Sections/EventsIAmAt/EventsIAmAt';

const Animation = (props: { children: JSX.Element }) => {
  return <div className={classes.Animation}>{props.children}</div>;
  // return (
  //   <ScrollAnimation animateOnce className={classes.Animation} animateIn="fadeIn">
  //   </ScrollAnimation>
  // );
};

const HomeSections = () => {
  return (
    <div className={classes.HomeSections}>
      <Animation>
        <FewWordsAboutMe />
      </Animation>
      <Animation>
        <Work />
      </Animation>
      <Animation>
        <ToolsIAmUsing />
      </Animation>
      <Animation>
        <FrameworksAndLibraries />
      </Animation>
      <Animation>
        <ProgrammingLanguages />
      </Animation>
      <Animation>
        <MyContributions />
      </Animation>
      <Animation>
        <PublishedWriting />
      </Animation>
      <Animation>
        <HumanLanguages />
      </Animation>
      <Animation>
        <OtherActivities />
      </Animation>
      <Animation>
        <FindMeElseWhere />
      </Animation>
    </div>
  );
};

export default HomeSections;
