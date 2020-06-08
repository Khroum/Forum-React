import {Alert} from 'react-native';

export const alert = (title, message) => {
    Alert.alert(
        title,
        message,
        [
            {
                text: 'Cancel',
                style: 'cancel',
            },
        ],
        {cancelable: true},
    );
};
