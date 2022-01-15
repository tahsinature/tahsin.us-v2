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
import images from 'src/assets/images';

const data = [
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/t4h51n',
    logo: images.logogs.facebook,
    username: '@t4h51n',
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/t4h51n',
    logo: images.logogs.instagram,
    username: '@t4h51n',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/t4h51n',
    logo: images.logogs.twitter,
    username: '@t4h51n',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/t4h51n',
    logo: images.logogs.linkedIn,
    username: '@t4h51n',
  },
  {
    platform: 'Keybase',
    url: 'https://keybase.io/t4h51n',
    logo: images.logogs.keybase,
    username: '@t4h51n',
  },
  {
    platform: 'Telegram',
    url: 'https://t.me/t4h51n',
    logo: images.logogs.telegram,
    username: '@t4h51n',
  },
  {
    platform: 'Discord',
    url: 'https://discord.com/users/t4h51n',
    logo: images.logogs.discord,
    username: '@t4h51n',
  },
  {
    platform: 'npm',
    url: 'https://www.npmjs.com/~tahsin',
    logo: images.logogs.npm,
    username: '@tahsin',
  },
  {
    platform: 'PyPI',
    url: 'https://pypi.org/user/tahsinature',
    logo: images.logogs.pypi,
    username: '@tahsinature',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/tahsinature',
    logo: images.logogs.gitHub,
    username: '@tahsinature',
  },
  {
    platform: 'Gitlab',
    url: 'https://gitlab.com/tahsinature',
    logo: images.logogs.gitLab,
    username: '@tahsinature',
  },
  {
    platform: 'Medium',
    url: 'https://medium.com/@tahsinature',
    logo: images.logogs.medium,
    username: '@tahsinature',
  },
  {
    platform: 'DEV Community',
    url: 'https://dev.to/tahsinature',
    logo: images.logogs.devTo,
    username: '@tahsinature',
  },
];

const handleClick = (url: string) => {
  const win = window.open(url, '_blank');
  win?.focus();
};

const FindMeElseWhere = () => {
  return (
    <Section classNames={[classes.FindMeElseWhere]}>
      <Header title="Find Me Elsewhere" icon={<PublicRounded />} />

      <div className={classes.Holder}>
        {data.map(ele => (
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
