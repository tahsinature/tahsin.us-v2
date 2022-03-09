import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';
import { Translate } from '@material-ui/icons';
import { useQuery, gql } from '@apollo/client';

import Header from 'src/components/Header/Header';
import Section from 'src/components/Section/Section';
import classes from './HumanLanguages.module.scss';
import GraphLoader from 'src/components/GraphLoader/GraphLoader';

interface Response {
  humanLanguages: {
    id: string;
    name: string;
    subOnLang: string;
    subOnEng: string;
  }[];
}

const HumanLanguages = () => {
  const [languages, setLanguages] = useState<Response['humanLanguages']>([]);
  const [activeLangIndex, setLang] = useState(0);
  const [show, toggle] = useState(true);
  const nextLang = activeLangIndex === languages.length - 1 ? 0 : activeLangIndex + 1;
  let currentTimeout: NodeJS.Timeout;

  const { loading, error, data } = useQuery<Response>(gql`
    query {
      humanLanguages {
        id
        name
        subOnLang
        subOnEng
      }
    }
  `);

  useEffect(() => {
    if (data) setLanguages(data.humanLanguages);

    return () => {
      if (currentTimeout) {
        clearTimeout(currentTimeout);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Section classNames={[classes.HumanLanguages]}>
      <Header title="Human Languages I Can Speak" icon={<Translate />} />
      <GraphLoader loading={loading} error={error} data={data}>
        <>
          <div className={classes.Display}>
            {show && languages[activeLangIndex] && (
              <Typist
                avgTypingDelay={30}
                cursor={{ show: false }}
                onTypingDone={() => {
                  currentTimeout = setTimeout(() => {
                    toggle(false);
                    setLang(nextLang);
                    toggle(true);
                  }, 2000);
                }}>
                <h2>{languages[activeLangIndex].subOnLang}</h2>
                <Typist.Delay ms={1000} />
                <p>
                  <i>{languages[activeLangIndex].subOnEng}</i>
                </p>
              </Typist>
            )}
          </div>

          <div className={classes.Line}>
            {languages.map((ele, index) => (
              <div
                className={classes.LineSingleLang}
                key={ele.id}
                onClick={() => {
                  clearTimeout(currentTimeout);

                  toggle(false);
                  setLang(index);
                  setTimeout(() => toggle(true), 1);
                }}>
                <p className={activeLangIndex === index ? classes.Active : ''}>{ele.name}</p>
                {index === languages.length - 1 ? null : <span>/</span>}
              </div>
            ))}
          </div>
        </>
      </GraphLoader>
    </Section>
  );
};

export default HumanLanguages;
