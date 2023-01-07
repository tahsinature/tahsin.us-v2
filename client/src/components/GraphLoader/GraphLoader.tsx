import React from 'react';
import { ApolloError } from '@apollo/client';

import PageLoader from '../PageLoader/PageLoader';

export default function GraphLoader(props: { loading: boolean; loadingMsg?: string; error?: ApolloError; data: any; children: JSX.Element; hideOnError?: boolean }) {
  const loadingComp = <PageLoader message={props.loadingMsg} />;
  const errorComp = <h1>Error Happened</h1>;
  const noDataComp = <h1>No Data Found</h1>;

  if (props.loading) return loadingComp;
  if (props.error) {
    console.error(props.error);
    if (props.hideOnError) return null;

    return errorComp;
  }
  if (!props.data) return noDataComp;

  return React.cloneElement(props.children, { ...props.data });
}
