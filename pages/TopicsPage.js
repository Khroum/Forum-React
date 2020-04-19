import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, FlatList, RefreshControl, Text} from 'react-native';
import {Loader} from "../component/Loader";
import {API_URL, AUTH_HEADER} from "../utils/constants";
import {TopicOverview} from "../component/TopicOverview";
import {formatToDateTime} from "../utils/dateFormatter";

export default class TopicsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      topics: []
    };
  }

  componentDidMount() {
    this.getTopics();
  }

  onRefresh() {
    this.setState({ isFetching: true}, () => {
      this.getTopics()
    });
  }

  getTopics = () => {
    const {header} = this.props;
    console.log('topics header: ', header);
    fetch(`${API_URL}/topic/`, {
      headers: {
        'Authorization': `${header}`
      }
    })
        .then(response => response.json())
        .then(json => {
          this.setState({
            isFetching: false,
            topics: json
          });
          console.log(this.state.topics);
        })
        .catch(error => {
          console.error(error);
        });
  };

  render() {
    if (this.state.isFetching === true) {
      return (
          <Loader/>
      );
    } else {
      return (
          <View>
            <ScrollView refreshControl={
              <RefreshControl refreshing={this.state.isFetching} onRefresh={() => this.onRefresh()}/>
            }>
              <FlatList data={this.state.topics}
                        renderItem={({item}) =>
                            <TopicOverview name={item.name}
                                           description={item.description}
                                           date={formatToDateTime(item.createdOn)} />
                        }
                        keyExtractor={(item, index) => index.toString()}
              />
            </ScrollView>
          </View>
      );
    }
  }
}

const styles = StyleSheet.create({
});
