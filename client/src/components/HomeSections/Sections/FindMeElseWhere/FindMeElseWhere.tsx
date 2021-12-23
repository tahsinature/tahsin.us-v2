import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

// import GotoChatButton from '../../../Buttons/GotoChatButton/GotoChatButton';
import NpxTahsin from '../../../NpxTahsin/NpxTahsin';
import Toy from '../../../Fun/GravityPoints/GravityPoints';
import Header from '../../../Header/Header';
import classes from './FindMeElseWhere.module.scss';
import Section from '../../../Section/Section';

const FindMeElseWhere = () => {
  return (
    <Section classNames={[classes.FindMeElseWhere]}>
      <Header>Find Me Elsewhere</Header>
      <ul>
        <li>
          <p>
            On Facebook:{' '}
            <a className="fw6 green no-underline underline-hover" href="https://www.facebook.com/t4h51n">
              @t4h51n
            </a>
          </p>
        </li>
        <li>
          <p>
            On Instagram:{' '}
            <a className="fw6 green no-underline underline-hover" href="https://www.instagram.com/t4h51n">
              @t4h51n
            </a>
          </p>
        </li>
        <li>
          <p>
            On Twitter:{' '}
            <a className="fw6 green no-underline underline-hover" href="https://twitter.com/t4h51n">
              @t4h51n
            </a>
          </p>
        </li>
        <li>
          <p>
            On LinkedIn:{' '}
            <a className="fw6 green no-underline underline-hover" href="https://www.linkedin.com/in/t4h51n">
              @t4h51n
            </a>
          </p>
        </li>
        <li>
          <p>
            On Keybase:{' '}
            <a className="fw6 green no-underline underline-hover" href="https://keybase.io/t4h51n">
              @t4h51n
            </a>
          </p>
        </li>
        <li>
          <p>
            On Telegram:{' '}
            <a className="fw6 green no-underline underline-hover" href="https://t.me/t4h51n">
              @t4h51n
            </a>
          </p>
        </li>
        <li>
          <p>
            On Discord:{' '}
            <a className="fw6 green no-underline underline-hover" href="https://discord.com/users/t4h51n">
              @t4h51n
            </a>
          </p>
        </li>
        <li>
          <p>
            On npm:{' '}
            <a className="fw6 green no-underline underline-hover" href="https://www.npmjs.com/~tahsin">
              @tahsin
            </a>
          </p>
        </li>
        <li>
          <p>
            On PyPI:{' '}
            <a className="fw6 green no-underline underline-hover" href="https://pypi.org/user/tahsinature">
              @tahsinature
            </a>
          </p>
        </li>
        <li>
          <p>
            On GitHub:{' '}
            <a className="fw6 green no-underline underline-hover" href="https://github.com/tahsinature">
              @tahsinature
            </a>
          </p>
        </li>
        <li>
          <p>
            On Gitlab:{' '}
            <a className="fw6 green no-underline underline-hover" href="https://gitlab.com/tahsinature">
              @tahsinature
            </a>
          </p>
        </li>
        <li>
          <p>
            On Medium:{' '}
            <a className="fw6 green no-underline underline-hover" href="https://medium.com/@tahsinature">
              @tahsinature
            </a>
          </p>
        </li>
        {/* <li style={{ display: 'flex', alignItems: 'center' }}>
          <p>Or, let's do a live chat:</p>
          <GotoChatButton />
        </li> */}
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
