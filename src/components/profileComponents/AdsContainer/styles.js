import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    containerStyle: {
        flex: 3,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth,
    }
});

export default styles;