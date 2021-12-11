import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import gfm from 'remark-gfm';
import { useParams } from 'react-router-dom';

import PageLoader from '../../components/PageLoader/PageLoader';
import classes from './Markdown.module.scss';
import apiCalls from '../../api/calls';
import { IApiResponses } from '../../interfaces/apiResponse';

const Markdown = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoadMode, toggleLoadMode] = useState(true);
  const [markdown, setMarkdown] = useState<null | IApiResponses.IGetMarkdown>(null);

  useEffect(() => {
    apiCalls.getMarkdown.call(id).then(data => {
      setMarkdown(data.data);
      toggleLoadMode(!isLoadMode);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getView = () =>
    markdown ? (
      <div className={classes.Markdown}>
        <h2>{markdown.title}</h2>
        <hr />
        <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[gfm]} children={markdown.content} />
      </div>
    ) : (
      <h2>Markdown Not Found</h2>
    );

  return isLoadMode ? <PageLoader /> : getView();
};

Markdown.propTypes = {};

export default Markdown;
