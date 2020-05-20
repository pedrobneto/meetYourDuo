import { StyleSheet, Dimensions } from 'react-native'

const screenHeight = Dimensions.get('screen').height

const styles = StyleSheet.create({
    containerStyle: {
        height: screenHeight / 7,
        marginVertical: 10,
        zIndex: 100,
        paddingVertical: 5,
    },
});

export default styles;