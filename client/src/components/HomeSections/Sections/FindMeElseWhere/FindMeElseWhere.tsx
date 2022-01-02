import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

// import GotoChatButton from '../../../Buttons/GotoChatButton/GotoChatButton';
import NpxTahsin from '../../../NpxTahsin/NpxTahsin';
import Toy from '../../../Fun/GravityPoints/GravityPoints';
import Header from '../../../Header/Header';
import classes from './FindMeElseWhere.module.scss';
import Section from '../../../Section/Section';
import { PublicRounded } from '@material-ui/icons';

const data = [
  { platform: 'Facebook', url: 'https://www.facebook.com/t4h51n', username: '@t4h51n' },
  { platform: 'Instagram', url: 'https://www.instagram.com/t4h51n', username: '@t4h51n' },
  { platform: 'Twitter', url: 'https://twitter.com/t4h51n', username: '@t4h51n' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/t4h51n', username: '@t4h51n' },
  { platform: 'Keybase', url: 'https://keybase.io/t4h51n', username: '@t4h51n' },
  { platform: 'Telegram', url: 'https://t.me/t4h51n', username: '@t4h51n' },
  { platform: 'Discord', url: 'https://discord.com/users/t4h51n', username: '@t4h51n' },
  { platform: 'npm', url: 'https://www.npmjs.com/~tahsin', username: '@tahsin' },
  { platform: 'PyPI', url: 'https://pypi.org/user/tahsinature', username: '@tahsinature' },
  { platform: 'GitHub', url: 'https://github.com/tahsinature', username: '@tahsinature' },
  { platform: 'Gitlab', url: 'https://gitlab.com/tahsinature', username: '@tahsinature' },
  { platform: 'Medium', url: 'https://medium.com/@tahsinature', username: '@tahsinature' },
  { platform: 'DEV Community', url: 'https://dev.to/tahsinature', username: '@tahsinature' },
];

const FindMeElseWhere = () => {
  return (
    <Section classNames={[classes.FindMeElseWhere]}>
      <Header title="Find Me Elsewhere" icon={<PublicRounded />} />
      <ul>
        {data.map(ele => (
          <li key={ele.platform}>
            <p>
              On {ele.platform}:{' '}
              <a className="fw6 green no-underline underline-hover" href={ele.url}>
                {ele.username}
              </a>
            </p>
          </li>
        ))}
      </ul>
      <ScrollAnimation animateIn="fadeIn">
        <NpxTahsin />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Toy />
      </ScrollAnimation>
    </Section>
  );
};

export default FindMeElseWhere;
