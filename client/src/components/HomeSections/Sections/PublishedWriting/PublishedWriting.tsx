import React from 'react';
import { DescriptionRounded } from '@material-ui/icons';

import Header from 'src/components/Header/Header';
import Section from 'src/components/Section/Section';
import classes from './PublishedWriting.module.scss';
import { IApiResponses } from 'src/interfaces/apiResponse';

const articles = [
  {
    title: 'Why building something with what we’ve learned is important?',
    thumb: 'https://cdn-images-1.medium.com/max/1024/1*nGRZbHUHg0NIQUA5CtxOjw.png',
    url: 'https://tahsinature.medium.com/why-building-something-with-what-weve-learned-is-important-8c49e54b33?source=rss-313d040dd460------2',
  },
  {
    title: 'Tired of circular dependency in Typescript/Node.js?',
    thumb: 'https://cdn-images-1.medium.com/max/216/1*qW0jpDLSgaLw8E3Es32rtg.png',
    url: 'https://tahsinature.medium.com/tired-of-circular-dependency-in-typescript-node-js-356d499a4479?source=rss-313d040dd460------2',
  },
  {
    title: 'Secure your traefik dashboard with HTTPS and Basic Auth',
    thumb:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--WsEyl-C_--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/duuwpy7k1j292dxq0m2f.JPG',
    url: 'https://dev.to/tahsinature/secure-your-traefik-dashboard-with-https-and-basic-auth-nkh',
  },
  {
    title: 'Get lazy with lazygit',
    thumb:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--NV2CJqqD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zs30j0p9c6gtgnwhi6gz.JPG',
    url: 'https://dev.to/tahsinature/get-lazy-with-lazygit-4h37',
  },
  {
    title: 'Make Life Easier with Relational Database & Node.js with sequelize-utility',
    thumb: 'https://cdn-images-1.medium.com/max/800/1*cndbleNCmua6nXRK2K3k0w.jpeg',
    url: 'https://tahsinature.medium.com/make-life-easier-with-relational-database-node-js-with-sequelize-utility-42af652c909f?source=rss-313d040dd460------2',
  },
];

const PublishedWriting = (props: { writings: IApiResponses.IGetBasicData['writings'] }) => {
  const handleClick = (url: string) => {
    const win = window.open(url, '_blank');
    win?.focus();
  };

  return (
    <Section classNames={[classes.PublishedWriting]}>
      <Header title="Published Writing" icon={<DescriptionRounded />} />
      <div className={classes.Boxes}>
        {articles.map(writing => (
          <div key={writing.url} className={classes.Box} onClick={() => handleClick(writing.url)}>
            <div className={classes.BoxContent}>
              <div className={classes.ImageContainer}>
                <div className={classes.InnerSkew}>
                  <img src={writing.thumb} alt="article-thumb" />
                </div>
              </div>
              <div className={classes.TextContainer}>
                <div className={classes.TextBox}>
                  <p>{writing.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default PublishedWriting;
