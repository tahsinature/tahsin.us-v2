import React from 'react';
import { AssessmentRounded } from '@material-ui/icons';
import { gql, useQuery } from '@apollo/client';

import Header from 'src/components/Header/Header';
import Section from 'src/components/Section/Section';
import Cards from 'src/components/Cards/Cards';
import GraphLoader from 'src/components/GraphLoader/GraphLoader';

const GET_PROJECTS = gql`
  query {
    projects {
      id
      name
      image
      url
    }
  }
`;

interface Response {
  projects: {
    id: string;
    name: string;
    image: string;
    url: string;
  }[];
}

const MyContributions = () => {
  const { loading, data, error } = useQuery<Response>(GET_PROJECTS);
  if (!data) return null;

  return (
    <GraphLoader hideOnError loading={loading} data={data.projects} error={error} loadingMsg="Fetching articles from different platforms...">
      <Section>
        <Header title="Personal & Open Source Contributions" icon={<AssessmentRounded />} />
        <Cards
          data={data.projects.map(ele => ({
            name: ele.name,
            image: ele.image,
            clickHandler: () => window.open(ele.url, '_blank'),
          }))}
        />
      </Section>
    </GraphLoader>
  );
};

export default MyContributions;
