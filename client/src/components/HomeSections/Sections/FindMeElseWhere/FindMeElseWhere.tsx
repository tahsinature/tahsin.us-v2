import React from 'react';
import { PublicRounded } from '@material-ui/icons';
// import ScrollAnimation from 'react-animate-on-scroll';

// import GotoChatButton from '../../../Buttons/GotoChatButton/GotoChatButton';
// import NpxTahsin from '../../../NpxTahsin/NpxTahsin';
// import Toy from '../../../Fun/GravityPoints/GravityPoints';
import classes from './FindMeElseWhere.module.scss';
import Header from 'src/components/Header/Header';
import Section from 'src/components/Section/Section';
import Capsule from 'src/components/Capsule/Capsule';
import data from 'src/api/data';

const handleClick = (url: string) => {
  const win = window.open(url, '_blank');
  win?.focus();
};

const FindMeElseWhere = () => {
  return (
    <Section classNames={[classes.FindMeElseWhere]}>
      <Header title="Find Me Elsewhere" icon={<PublicRounded />} />

      <div className={classes.Holder}>
        {data.findMeElsewhere.map(ele => (
          <Capsule clickHandler={() => handleClick(ele.url)} key={ele.platform} logo={ele.logo} title={ele.platform} subtitle={ele.username} />
        ))}
      </div>
      {/* <ScrollAnimation animateIn="fadeIn">
        <NpxTahsin />
      </ScrollAnimation> */}
      {/* <ScrollAnimation animateIn="fadeIn">
        <Toy />
      </ScrollAnimation> */}
    </Section>
  );
};

export default FindMeElseWhere;
