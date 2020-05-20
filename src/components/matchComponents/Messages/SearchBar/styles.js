import { StyleSheet, Dimensions } from 'react-native'

const screenHeight = Dimensions.get('screen').height

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        height: screenHeight / 22,
        marginVertical: 20,
        alignItems: 'center',
        paddingLeft: 10,
    },

    iconContainerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        marginRight: 10,
    },

    inputContainerStyle: {
        flex: 10,
        height: '100%',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'red',
    },

    inputStyle: {
        fontSize: 18,
    }
});

export default styles;