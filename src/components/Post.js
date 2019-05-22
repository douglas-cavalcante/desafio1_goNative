import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const white = '#FFF';
const title = '#333';

const styles = StyleSheet.create({
  post: {
    backgroundColor: white,
    padding: 20,
    borderRadius: 5,
    marginTop: 5,
    marginHorizontal: 20,
  },
  postHeader: {
    borderBottomWidth: 1,
    borderColor: '#CCC',
    paddingBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: title,
  },
  author: {
    fontSize: 10,
  },
  content: {
    paddingVertical: 10,
  },
  description: {
    fontSize: 12,
  },
});

const Post = ({ data }) => (
  <View style={styles.post}>
    <View style={styles.postHeader}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.author}>{data.author}</Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.description}>{data.description}</Text>
    </View>
  </View>
);

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Post;
