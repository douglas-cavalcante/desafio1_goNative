import './config/ReactotronConfig';
import './config/DevToolsConfig';

import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, Platform,
} from 'react-native';

import Post from '~/components/Post';

const white = '#FFF';
const primary = 'tomato';
const title = '#333';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
  },

  header: {
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20,
      },
      android: {
        height: 56,
        paddingTop: 0,
      },
    }),
  },
  headerTitle: {
    color: title,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default class App extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React-Native',
        author: 'Henrique Douglas Cavalcante Costa',
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      },
      {
        id: 2,
        title: 'Aprendendo React-Native',
        author: 'Henrique Douglas Cavalcante Costa',
        description:
          "It is a long established fact that a reader will a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      },
      {
        id: 3,
        title: 'Aprendendo React-Native',
        author: 'Henrique Douglas Cavalcante Costa',
        description:
          "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      },
      {
        id: 4,
        title: 'Aprendendo React-Native',
        author: 'Henrique Douglas Cavalcante Costa',
        description:
          "It is a long established fact that a reader The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GoNative App</Text>
        </View>
        <ScrollView>{posts && posts.map(post => <Post key={post.id} data={post} />)}</ScrollView>
      </View>
    );
  }
}
