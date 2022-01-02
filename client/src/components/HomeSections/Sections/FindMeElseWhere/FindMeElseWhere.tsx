import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

// import GotoChatButton from '../../../Buttons/GotoChatButton/GotoChatButton';
import NpxTahsin from '../../../NpxTahsin/NpxTahsin';
import Toy from '../../../Fun/GravityPoints/GravityPoints';
import Header from '../../../Header/Header';
import classes from './FindMeElseWhere.module.scss';
import Section from '../../../Section/Section';
import { PublicRounded } from '@material-ui/icons';
import colors from '../../../../constants/colors';

const data = [
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/t4h51n',
    logo: 'https://gallery.tahsin.us/uploads/big/0b470cd01c523fc3fc48c2d43172cafd.png',
    username: '@t4h51n',
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/t4h51n',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png',
    username: '@t4h51n',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/t4h51n',
    logo: 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png',
    username: '@t4h51n',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/t4h51n',
    logo: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    username: '@t4h51n',
  },
  {
    platform: 'Keybase',
    url: 'https://keybase.io/t4h51n',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Keybase_logo_official.svg/1114px-Keybase_logo_official.svg.png',
    username: '@t4h51n',
  },
  {
    platform: 'Telegram',
    url: 'https://t.me/t4h51n',
    logo: 'https://gallery.tahsin.us/uploads/medium/f08316b64bff21d38e56159b16d63e20.png',
    username: '@t4h51n',
  },
  {
    platform: 'Discord',
    url: 'https://discord.com/users/t4h51n',
    logo: 'https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Square-1024x1024.png',
    username: '@t4h51n',
  },
  {
    platform: 'npm',
    url: 'https://www.npmjs.com/~tahsin',
    logo: 'https://gallery.tahsin.us/uploads/medium/a64bc58e3f798542cb00d361540c98b1.png',
    username: '@tahsin',
  },
  {
    platform: 'PyPI',
    url: 'https://pypi.org/user/tahsinature',
    logo: 'https://gallery.tahsin.us/uploads/big/d7190dd279ed8054600325b41ebc7846.png',
    username: '@tahsinature',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/tahsinature',
    logo: 'https://gallery.tahsin.us/uploads/big/879c856908411b0c89e3b5723f259740.png',
    username: '@tahsinature',
  },
  {
    platform: 'Gitlab',
    url: 'https://gitlab.com/tahsinature',
    logo: 'https://gallery.tahsin.us/uploads/medium/c5f7b622321d7bc4957c68ac6004c2f8.png',
    username: '@tahsinature',
  },
  {
    platform: 'Medium',
    url: 'https://medium.com/@tahsinature',
    logo: 'https://gallery.tahsin.us/uploads/medium/6ea4abbdedb5ab3bcf2b149ec3147f06.png',
    username: '@tahsinature',
  },
  {
    platform: 'DEV Community',
    url: 'https://dev.to/tahsinature',
    logo: 'https://gallery.tahsin.us/uploads/medium/c815895770febad83a55227747d3c83f.png',
    username: '@tahsinature',
  },
];

const FindMeElseWhere = () => {
  return (
    <Section classNames={[classes.FindMeElseWhere]}>
      <Header title="Find Me Elsewhere" icon={<PublicRounded />} />

      <div className={classes.Holder}>
        {data.map(ele => (
          <div key={ele.platform} className={classes.Single}>
            <div className={classes.LogoBox}>
              <img src={ele.logo} alt="" />
            </div>
            <div className={classes.DetailBox}>
              <p>{ele.platform}</p>
              <small style={{ color: colors.common.primaryGreenishColor }}>{ele.username}</small>
            </div>
          </div>
        ))}
      </div>
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
