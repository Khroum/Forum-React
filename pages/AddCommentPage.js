import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {ConfirmBtn} from '../component/ConfirmBtn';
import {
  API_URL,
  COMMENT_ADDED,
  COMMENT_ADDED_MESSAGE,
  COMMENTS_PAGE,
  OPERATION_FAILED,
  OPERATION_FAILED_MESSAGE,
} from '../utils/constants';
import {goToScreenWithObject} from '../utils/navbarHelper';
import {alert} from '../utils/infoHelper';

export default class AddCommentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  addComment = () => {
    const {content} = this.state;
    const {header, object} = this.props;
    fetch(`${API_URL}/post/comment/`, {
      method: 'POST',
      headers: {
        Authorization: `${header}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: content,
        postId: object.postId,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert(COMMENT_ADDED, COMMENT_ADDED_MESSAGE);
          this.returnToComments();
        } else {
          console.log(response);
          alert(OPERATION_FAILED, OPERATION_FAILED_MESSAGE);
        }
      })
      .catch((error) => {
        alert(OPERATION_FAILED, OPERATION_FAILED_MESSAGE);
        console.log(error);
      });
  };

  returnToComments = () => {
    goToScreenWithObject(
      this.props.componentId,
      COMMENTS_PAGE,
      this.props.header,
      this.props.object,
    );
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.dataContainer}>
          <View style={styles.dataWindow}>
            <Text style={styles.dataText}>Content:</Text>
            <TextInput
              style={styles.inputData}
              onChangeText={(text) => this.setState({content: text})}
            />
          </View>
        </View>
        <View style={styles.centered}>
          <ConfirmBtn
            onPress={() => this.addComment()}
            content={'Add a comment'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    margin: 10,
  },
  dataContainer: {
    borderWidth: 1.5,
    borderColor: '#0E7DDF',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataText: {
    fontSize: 20,
    alignSelf: 'center',
  },
  inputData: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#0E7DDF',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 18,
  },
  dataWindow: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
});
