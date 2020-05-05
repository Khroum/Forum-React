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
import {TopicOverview} from '../component/TopicOverview';
import {formatToDateTime} from '../utils/dateFormatter';
import {goToScreenWithHeader, goToScreenWithProps} from '../utils/navbarHelper';

export default class TopicsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      topics: [],
      header: '',
    };
  }

  componentDidMount() {
    this.getTopics();
  }

  onRefresh() {
    this.setState({isFetching: true}, () => {
      this.getTopics();
    });
  }

  getTopics = () => {
    const {header} = this.props;
    fetch(`${API_URL}/topic/`, {
      headers: {
        Authorization: `${header}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          isFetching: false,
          topics: json,
          header: header,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  goToPosts = (topicId) => {
    goToScreenWithProps(
      this.props.componentId,
      POSTS_PAGE,
      this.state.header,
      topicId,
    );
  };

  render() {
    if (this.state.isFetching === true) {
      return <Loader />;
    } else {
      return (
        <View>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.isFetching}
                onRefresh={() => this.onRefresh()}
              />
            }>
            <FlatList
              data={this.state.topics}
              renderItem={({item}) => (
                <TopicOverview
                  click={() => this.goToPosts(item.topicId)}
                  name={item.name}
                  description={item.description}
                  date={formatToDateTime(item.createdOn)}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({});
