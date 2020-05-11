import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: screenWidth,
        flex: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
    }
});

export default styles;