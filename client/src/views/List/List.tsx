import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import _ from 'lodash';

import classes from './List.module.scss';
import { IApiResponses } from 'src/interfaces/apiResponse';
import data from 'src/api/data';

const map = {
  tools: {
    title: "Tools I'm using nowadays",
    list: data.tools,
  },
};

const List = () => {
  const location = useLocation<IApiResponses.IGetList>();

  const voidFn = () => {};

  const history = useHistory();
  // const map = {
  //   tools: {
  //     fn: () => {},
  //   },
  //   writings: {
  //     fn: (id: string) => {
  //       history.push(`/md/${id}`);
  //     },
  //   },
  // };
  const listType: any = _.last(history.location.pathname.split('/'));
  // if (!listType) throw new Error('listType is undefined');
  // const fn = _.get(map, `${listType}.fn`, voidFn);
  const { title, list } = map.tools;

  const getLiElement = (item: IApiResponses.IGetList['list'][0]) => (
    <li key={item._id}>
      <div className={classes.ItemTop}>
        <img src={item.image} alt="" />
        <h4>{item.title}</h4>
      </div>
      <p>{item.description}</p>
    </li>
  );

  return (
    <div className={classes.Root}>
      <h1 className={classes.ListTitle}>{title}</h1>
      <ul className={classes.List}>{list.map(ele => getLiElement(ele as any))}</ul>
    </div>
  );
};

export default List;
