import React from 'react';

import FewWordsAboutMe from './Sections/FewWordsAboutMe/FewWordsAboutMe';
import ToolsIAmUsing from './Sections/ToolsIAmUsing/ToolsIAmUsing';
import FrameworksAndLibraries from './Sections/FrameworksAndLibraries/FrameworksAndLibraries';
import ProgrammingLanguages from './Sections/ProgrammingLanguages/ProgrammingLanguages';
import MyContributions from './Sections/MyContributions/MyContributions';
import PublishedWriting from './Sections/PublishedWriting/PublishedWriting';
// import PublicSpeaking from './Sections/PublicSpeaking/PublicSpeaking';
// import EventsIAmAt from './Sections/EventsIAmAt/EventsIAmAt';
import OtherActivities from './Sections/OtherActivities/OtherActivities';
import FindMeElseWhere from './Sections/FindMeElseWhere/FindMeElseWhere';
import classes from './HomeSections.module.scss';
import { IReducers } from '../../interfaces/reducers';

const HomeSections = (props: { basicData: IReducers.IAppReducer['basicData'] }) => {
  if (!props.basicData) throw new Error('basic data not found but component tried to render');

  return (
    <div className={classes.HomeSections}>
      <FewWordsAboutMe />
      <ToolsIAmUsing tools={props.basicData.tools} />
      <FrameworksAndLibraries />
      <ProgrammingLanguages />
      <MyContributions />
      <PublishedWriting writings={props.basicData.writings} />
      {/* <PublicSpeaking /> */}
      {/* <EventsIAmAt /> */}
      <OtherActivities />
      <FindMeElseWhere />
    </div>
  );
};

export default HomeSections;
