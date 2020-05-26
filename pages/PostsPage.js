import React, {Component} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  RefreshControl,
  Text,
} from 'react-native';
import {Loader} from '../component/Loader';
import {API_URL, POSTS_PAGE, TOPICS_PAGE} from '../utils/constants';
import {formatToDateTime} from '../utils/dateFormatter';
import {PostOverview} from '../component/PostOverview';
import {goToScreenWithProps} from '../utils/navbarHelper';
import EmptyContent from '../component/EmptyContent';
import {AddNewFooter} from '../component/AddNewFooter';

export default class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      posts: [],
      header: '',
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  onRefresh() {
    this.setState({isFetching: true}, () => {
      this.getPosts();
    });
  }

  getPosts = () => {
    const {header, objectId} = this.props;
    fetch(`${API_URL}/post/topic/${objectId}`, {
      headers: {
        Authorization: `${header}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          posts: json,
          header: header,
          isFetching: false,
        });
        console.log(this.state.posts);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  goToComments = (postId) => {
    //goToScreenWithProps(this.props.componentId, POSTS_PAGE, this.state.header, postId)
  };

  render() {
    if (this.state.isFetching === true) {
      return <Loader />;
    } else {
      return (
        <View style={styles.mainContainer}>
          <EmptyContent />
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.isFetching}
                onRefresh={() => this.onRefresh()}
              />
            }>
            <View style={styles.footer}>
              <AddNewFooter
                onPress={() => this.goToScreen(TOPICS_PAGE)}
                content={'Add a new post!'}
              />
            </View>
            <FlatList
              data={this.state.posts}
              renderItem={({item}) => (
                <PostOverview
                  click={() => this.goToComments(item.postId)}
                  content={item.content}
                  author={item.authorLogin}
                  date={formatToDateTime(item.createdOn)}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              style={styles.listContainer}
            />
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 0,
  },
  listContainer: {
    marginBottom: 20,
  },
  footer: {
    marginBottom: 5,
    backgroundColor: '#0E7DDF',
    borderColor: 'transparent',
  },
});
