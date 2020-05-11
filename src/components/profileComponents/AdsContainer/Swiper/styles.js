import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center',
    }

});

export default styles;