import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
    },

    textStyle: {
        fontSize: 14,
        color: 'red',
        fontWeight: '700',
    },

    numberContainer: {
        height: 16,
        width: 16,
        borderRadius: 7,
        marginLeft: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },

    numberTextStyle: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
    }
})

export default styles;