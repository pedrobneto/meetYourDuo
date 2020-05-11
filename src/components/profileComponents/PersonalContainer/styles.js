import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({

    containerStyle: {
        flex: 7,
        backgroundColor: 'transparent',
        width: windowWidth,
        zIndex: 0,
    },

    svgContainerStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        width: windowWidth,
        height: windowHeight * 0.65,
    },

    informationContainerStyle: {
        flex: 1,
        zIndex: 2,
        width: windowWidth,
        alignItems: 'center',
    }


});

export default styles;