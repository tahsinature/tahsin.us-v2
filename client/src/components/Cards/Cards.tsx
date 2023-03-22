import React, { useState } from 'react';
// import MaterialCard from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';

import PreLoader from 'src/components/PreLoader/PreLoader';
import classes from './Cards.module.scss';

type Item = { name: string; image: string; clickHandler: () => void };

const Card = (props: { item: Item }) => {
  const [isReady, setReady] = useState(false);
  return (
    // <MaterialCard>
    //   <CardActionArea>
    <PreLoader isReady={isReady} className={classes.Card} onClick={() => isReady && props.item.clickHandler()}>
      <div className={classes.CardLeft}>
        <h4>{props.item.name}</h4>
      </div>
      <div className={classes.CardRight}>
        <img onLoad={() => setReady(true)} src={props.item.image} alt="" />
      </div>
    </PreLoader>
    //   </CardActionArea>
    // </MaterialCard>
  );
};

const Cards = (props: { data: Item[] }) => {
  return (
    <div className={classes.Cards}>
      {props.data.map(item => (
        <Card key={item.name} item={item} />
      ))}
    </div>
  );
};

export default Cards;
