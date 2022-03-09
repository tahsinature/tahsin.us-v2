import React, { useEffect, useState } from 'react';
import { Code } from '@material-ui/icons';
import { useQuery, gql } from '@apollo/client';

import classes from './ProgrammingLanguages.module.scss';
import colors from 'src/constants/colors';
import Header from 'src/components/Header/Header';
import Section from 'src/components/Section/Section';
import Terminal from 'src/components/Terminal/Terminal';
import GraphLoder from 'src/components/GraphLoader/GraphLoader';

interface Response {
  programmingLanguages: {
    id: string;
    name: string;
    code: string;
    logo: string;
  }[];
}

const ProgrammingLanguages = () => {
  const [languages, setLanguages] = useState<Response['programmingLanguages']>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<Response['programmingLanguages'][0]>(languages[0]);
  const [show, setShow] = useState(true);

  const activeStyle = {
    borderColor: colors.common.primaryGreenishColor,
    color: colors.common.primaryGreenishColor,
  };

  const terminalHeight = 250;

  const { loading, error, data } = useQuery<Response>(gql`
    query {
      programmingLanguages {
        id
        name
        code
        logo
      }
    }
  `);

  useEffect(() => {
    if (data) {
      setLanguages(data.programmingLanguages);
      setSelectedLanguage(data.programmingLanguages[0]);
    }
  }, [data]);

  return (
    <Section classNames={[classes.ProgrammingLanguages]}>
      <Header title="Programming Languages I Work With" icon={<Code />} />
      <p>All the technologies, frameworks and tools I use mostly are based on the following languages:</p>
      <br />

      <GraphLoder loading={loading} data={data} error={error}>
        <div className={classes.Main}>
          <div className={classes.Holder}>
            {data?.programmingLanguages.map(language => (
              <div
                onClick={() => {
                  setShow(false);
                  setTimeout(() => {
                    setSelectedLanguage(language);
                    setShow(true);
                  }, 1);
                }}
                key={language.id}
                style={language === selectedLanguage ? activeStyle : {}}
                className={classes.Single}>
                <div className={classes.LogoBox}>
                  <img src={language.logo} alt="" />
                </div>
                <div className={classes.DetailBox}>
                  <p>{language.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ height: `${terminalHeight + 2}px` }} className={classes.Monitor}>
            {show && selectedLanguage && (
              <Terminal
                height={terminalHeight}
                lines={[
                  {
                    cmd: true,
                    delay: 2,
                    text: selectedLanguage.code,
                  },
                  { cmd: false, text: '> hi mom!' },
                ]}
              />
            )}
          </div>
        </div>
      </GraphLoder>
    </Section>
  );
};

export default ProgrammingLanguages;
