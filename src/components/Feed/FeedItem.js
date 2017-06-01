import React from 'react';
import PropTypes from 'prop-types';

const FeedItem = ({ item }) => (<li>{item.link}</li>);

FeedItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default FeedItem;