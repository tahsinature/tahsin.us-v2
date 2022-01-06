import React from 'react';

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
import { IReducers } from 'src/interfaces/reducers';
// import PublicSpeaking from './Sections/PublicSpeaking/PublicSpeaking';
// import EventsIAmAt from './Sections/EventsIAmAt/EventsIAmAt';

const HomeSections = (props: { basicData: IReducers.IAppReducer['basicData'] }) => {
  if (!props.basicData) throw new Error('basic data not found but component tried to render');

  return (
    <div className={classes.HomeSections}>
      <FewWordsAboutMe />
      <Work />
      <ToolsIAmUsing tools={props.basicData.tools} />
      <FrameworksAndLibraries />
      <ProgrammingLanguages />
      <MyContributions />
      <PublishedWriting writings={props.basicData.writings} />
      <HumanLanguages />
      {/* <PublicSpeaking /> */}
      {/* <EventsIAmAt /> */}
      <OtherActivities />
      <FindMeElseWhere />
    </div>
  );
};

export default HomeSections;
