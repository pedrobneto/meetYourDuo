import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    containerStyle: {
        flex: 8,
        backgroundColor: 'white',
        width: windowWidth - 10,
        borderRadius: 10,
        elevation: 2,
        overflow: 'hidden'
    },

    imageStyle: {
        height: undefined,
        width: undefined,
        flex: 1,
    }
})

export default styles;