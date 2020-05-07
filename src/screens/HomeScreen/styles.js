import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },

    pictureContainerStyle: {
        flex: 8,
        backgroundColor: 'white',
        width: windowWidth - 10,
        borderRadius: 10,
        elevation: 2,
    },

    buttonContainerStyle: {
        flex: 1,
        backgroundColor: 'transparent',
    },


})

export default styles;