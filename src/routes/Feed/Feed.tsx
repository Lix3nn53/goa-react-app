import React, { FunctionComponent } from 'react';

import './Feed.scss';

const Feed: FunctionComponent = () => (
  <div className="grid feed">
    <h1 className="feed-top">Top</h1>
    <div className="feed-main">Main</div>
    <div className="feed-sidebar-1">Sidebar1</div>
    <div className="feed-sidebar-2">Sidebar2</div>
    <div className="feed-bottom-1">Bottom1</div>
    <div className="feed-bottom-2">Bottom2</div>
    <div className="feed-bottom-3">Bottom3</div>
  </div>
);

export default Feed;
