import React from 'react';
import FeedItem from './FeedItem'

const FeedList = (props) => {
  const feedItems = props.feeds.map((item) => <FeedItem key={item._id} item={item}/>);
  return(
    <ul>
      {feedItems}
    </ul>
  )
};

export default FeedList;
