import React, { FunctionComponent } from 'react';

import './Feed.scss';
import Link from '../../components/Link';
import Button from '../../components/Button';

const Feed: FunctionComponent = () => (
  <div className="grid feed">
    <h1 className="feed-top">
      <Link to="/test">Take Product Tour</Link>
      <Link cta to="/test">
        Take Product Tour
      </Link>
      <Link large to="/test">
        Take Product Tour
      </Link>
      <Link cta large to="/test">
        Take Product Tour
      </Link>
      <Button type="button">Take Product Tour</Button>
      <Button primary type="button">
        Take Product Tour
      </Button>
    </h1>
    <div className="feed-main">Main</div>
    <div className="feed-sidebar-1">Sidebar1</div>
    <div className="feed-sidebar-2">Sidebar2</div>
    <div className="feed-bottom-1">Bottom1</div>
    <div className="feed-bottom-2">Bottom2</div>
    <div className="feed-bottom-3">Bottom3</div>
  </div>
);

export default Feed;
