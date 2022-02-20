import React from 'react';
import { SettingsEthernetRounded } from '@material-ui/icons';

import Header from 'src/components/Header/Header';
import data from 'src/api/data';

const FrameworksAndLibraries = () => {
  return (
    <section className="lh-copy">
      <Header title="Frameworks & Libraries" icon={<SettingsEthernetRounded />} />
      <ul>
        {data.frameworkAndLib.map(ele => (
          <li key={ele.title}>
            <p>
              <a className="fw6 green no-underline underline-hover" href={ele.url} target="_blank" rel="noreferrer">
                {ele.title}
              </a>
              : {ele.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FrameworksAndLibraries;
