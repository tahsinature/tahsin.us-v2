import React from 'react';
import { BuildRounded } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import Header from 'src/components/Header/Header';
import Section from 'src/components/Section/Section';
import Capsule from 'src/components/Capsule/Capsule';
import classes from './ToolsIAmUsing.module.scss';
import data from 'src/api/data/index';

const ToolsIAmUsing = () => {
  const history = useHistory();
  return (
    <Section>
      <Header title="Tools I'm using nowadays" icon={<BuildRounded />} />
      <div className={classes.ToolBox}>{data.tools.map(ele => ele.display && <Capsule key={ele._id} logo={ele.image} title={ele.title} />)}</div>
      <Capsule type={1} logo={''} title={'See All'} clickHandler={() => history.push(`/list/tools`)} />
    </Section>
  );
};

export default ToolsIAmUsing;
