import React from 'react';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';

import classes from './List.module.scss';
import data from 'src/api/data';
import ResizableImage from 'src/components/ResizableImage/ResizableImage';

type KeyTypes = 'tools';
type ListType = {
  _id: string;
  image: string;
  title: string;
  display?: boolean;
  description: string;
  url?: string;
};

const map: {
  [key: string]: {
    title: string;
    list: ListType[];
  };
} = {
  tools: {
    title: "Tools I'm using nowadays",
    list: data.tools,
  },
};

const List = () => {
  const history = useHistory();

  const listType = _.last(history.location.pathname.split('/')) as KeyTypes;
  const { title, list } = map[listType];

  const getLiElement = (item: ListType) => (
    <li key={item._id}>
      <div className={classes.ItemTop}>
        {/* <img src={item.image} alt="" /> */}
        <ResizableImage src={item.image} />
        <h4>{item.title}</h4>
      </div>
      <p>{item.description}</p>
    </li>
  );

  return (
    <div className={classes.Root}>
      <h1 className={classes.ListTitle}>{title}</h1>
      <ul className={classes.List}>{list.map(ele => getLiElement(ele))}</ul>
    </div>
  );
};

export default List;
