import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../../Header/Header';
import Section from '../../../Section/Section';
import SeeAllButton from '../../../Buttons/SeeAllButton/SeeAllButton';
import classes from './PublishedWriting.module.scss';
import { IApiResponses } from '../../../../interfaces/apiResponse';
import { DescriptionRounded } from '@material-ui/icons';

const PublishedWriting = (props: { writings: IApiResponses.IGetBasicData['writings'] }) => {
  const history = useHistory();

  const handleClick = (id: string) => {
    history.push(`/md/${id}`);
  };

  return (
    <Section classNames={[classes.PublishedWriting]}>
      <Header title="Published Writing" icon={<DescriptionRounded />} />
      <ul>
        {props.writings.map(writing => (
          <li key={writing._id}>
            <p className="fw6 green no-underline underline-hover" onClick={() => handleClick(writing._id)}>
              {writing.title}
            </p>
          </li>
        ))}
        <SeeAllButton path={'writings'} />
      </ul>
    </Section>
  );
};

export default PublishedWriting;
