import React from 'react';
import Header from '../../../Header/Header';
import Section from '../../../Section/Section';
import SeeAllButton from '../../../Buttons/SeeAllButton/SeeAllButton';
import { IApiResponses } from '../../../../interfaces/apiResponse';

const ToolsIAmUsing = (props: { tools: IApiResponses.IGetBasicData['tools'] }) => {
  return (
    <Section>
      <Header>Tools I'm using nowadays</Header>
      <ul>
        {props.tools.map(
          ele =>
            ele.display && (
              <li key={ele.title}>
                <p>
                  <a className="fw6 green no-underline underline-hover" href={ele.url} target="_blank" rel="noreferrer">
                    {ele.title}
                  </a>
                  : {ele.description}
                </p>
              </li>
            ),
        )}
        <li>
          <SeeAllButton path={'tools'} />
        </li>
      </ul>
    </Section>
  );
};

export default ToolsIAmUsing;
