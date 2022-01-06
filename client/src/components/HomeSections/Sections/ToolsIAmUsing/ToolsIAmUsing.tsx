import React from 'react';
import { BuildRounded } from '@material-ui/icons';

import Header from 'src/components/Header/Header';
import Section from 'src/components/Section/Section';
import SeeAllButton from 'src/components/Buttons/SeeAllButton/SeeAllButton';
import { IApiResponses } from 'src/interfaces/apiResponse';

const ToolsIAmUsing = (props: { tools: IApiResponses.IGetBasicData['tools'] }) => {
  return (
    <Section>
      <Header title="Tools I'm using nowadays" icon={<BuildRounded />} />
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
