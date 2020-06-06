import React, {Component} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  RefreshControl
} from 'react-native';
import {Loader} from '../component/Loader';
import {ADD_COMMENTS_PAGE, ADD_POST_PAGE, API_URL, POSTS_PAGE, TOPICS_PAGE} from '../utils/constants';
import {formatToDateTime} from '../utils/dateFormatter';
import {PostOverview} from '../component/PostOverview';
import EmptyContent from "../component/EmptyContent";
import {AddNewFooter} from "../component/AddNewFooter";
import {goToScreenWithObject, goToScreenWithProps} from "../utils/navbarHelper";
import {CommentHeader} from "../component/CommentHeader";

export default class CommentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      comments: [],
      header: '',
      post: {
        postId: null,
        authorLogin: '',
        createdOn: '',
        content: ''
      }
    };
  }

  componentDidMount() {
    this.getComments();
  }

  onRefresh() {
    this.setState({isFetching: true}, () => {
      this.getComments();
    });
  }

  getComments = () => {
    const {header, object} = this.props;
    fetch(`${API_URL}/comment/post/${object.postId}`, {
      headers: {
        Authorization: `${header}`,
      },
    })
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            comments: json,
            header: header,
            post: object,
            isFetching: false
          });
        })
        .catch((error) => {
          console.error(error);
        });
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
                <CommentHeader content={this.state.post.content} author={this.state.post.authorLogin} date={this.state.post.createdOn}/>
              </View>
              <FlatList
                  data={this.state.comments}
                  renderItem={({item}) => (
                      <PostOverview
                          content={item.content}
                          author={item.authorLogin}
                          date={formatToDateTime(item.createdOn)}
                      />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  style={styles.listContainer}
              />
            </ScrollView>
            <View>
              <AddNewFooter onPress={() => goToScreenWithObject(this.props.componentId, ADD_COMMENTS_PAGE, this.state.header, this.state.post)}
                            content={'Add a new comment '}/>
            </View>
          </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 0,
    flex: 1
  },
  listContainer: {
    marginBottom: 20
  },
  footer: {
    marginBottom: 5,
    backgroundColor: '#0E7DDF',
    borderColor: 'transparent'
  }
});
