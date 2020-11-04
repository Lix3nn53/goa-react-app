import React, { FC, useEffect } from 'react';

type Props = {
  profile: string;
};

const TwitterTimeline: FC<Props> = ({ profile }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <a
      className="twitter-timeline"
      data-height="640"
      data-dnt="true"
      data-theme="dark"
      href={`https://twitter.com/${profile}?ref_src=twsrc%5Etfw`}
    >
      Tweets by {profile}
    </a>
  );
};

export default TwitterTimeline;
