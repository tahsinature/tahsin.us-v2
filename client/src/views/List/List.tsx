import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';

import classes from './List.module.scss';
import PageLoader from 'src/components/PageLoader/PageLoader';
import apiCalls from 'src/api/calls';
import { IApiResponses } from 'src/interfaces/apiResponse';

const List = () => {
  const [data, setData] = useState<IApiResponses.IGetList | null>(null);

  const voidFn = () => {};

  const history = useHistory();
  const map = {
    tools: {},
    writings: {
      fn: (id: string) => {
        history.push(`/md/${id}`);
      },
    },
  };
  const listType = _.last(history.location.pathname.split('/'));
  if (!listType) throw new Error('listType is undefined');
  const fn = _.get(map, `${listType}.fn`, voidFn);

  const getLiElement = (item: IApiResponses.IGetList['list'][0]) => (
    <li key={item._id} onClick={() => fn(item._id)}>
      <div className={classes.ItemTop}>
        <img src={item.image} alt="" />
        <h4>{item.title}</h4>
      </div>
      <p>{item.description}</p>
    </li>
  );

  useEffect(() => {
    apiCalls.getList.call(listType).then(data => {
      setData(data.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.Root}>
      {!data ? (
        <PageLoader />
      ) : (
        <>
          <h1 className={classes.ListTitle}>{data.title}</h1>
          <ul className={classes.List}>{data.list.map(ele => getLiElement(ele))}</ul>
        </>
      )}
    </div>
  );
};

export default List;
