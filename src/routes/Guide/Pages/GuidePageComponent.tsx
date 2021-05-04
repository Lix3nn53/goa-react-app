import React, { FunctionComponent, ReactNode } from 'react';

export type Props = JSX.IntrinsicElements['div'] & {
  right?: ReactNode;
};

const GuidePageComponent: FunctionComponent<Props> = ({ children, right }) => {
  const renderCard = () => {
    if (!right) return <div />;

    return <div style={{ flex: '1' }}>{right}</div>;
  };

  return (
    <div className="guide-page flex-container">
      <div style={{ flex: '2' }}>{children}</div>
      {renderCard()}
    </div>
  );
};

export default GuidePageComponent;
