import React from 'react';

const Section = (props: any) => {
  return <section className={[props.classNames && [...props.classNames], 'lh-copy'].join(' ')}>{props.children}</section>;
};

export default Section;
