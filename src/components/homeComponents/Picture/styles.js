import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    containerStyle: {
        flex: 8,
        backgroundColor: 'white',
        width: windowWidth - 10,
        borderRadius: 5,
        elevation: 2,
    },
})

export default styles;