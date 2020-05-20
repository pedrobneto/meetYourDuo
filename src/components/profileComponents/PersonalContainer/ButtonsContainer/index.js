import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import {
    MaterialIcons,
    FontAwesome
} from '@expo/vector-icons';

import Button from './Button'

import colors from '../../../../util/colors'
import styles from './styles'

const ButtonsContainer = (props) => (
    <View style={styles.container}>
        <Button
            color={colors.lightGray}
            text={'CONFIGURAÇÕES'}
        >

            <MaterialIcons
                name="settings"
                size={35}
                color="gray"
            />
        </Button>
        <Button
            margin={30}
            color={colors.pink}
            text={'ADICIONAR MÍDIA'}
        >
            <FontAwesome
                name="camera"
                size={35}
                color="white"
            />
        </Button>
        <Button
            color={colors.lightGray}
            text={'EDITAR INFORMAÇÕES'}
        >
            <FontAwesome
                name="pencil"
                size={35}
                color="gray"
            />
        </Button>
    </View>
)

export default ButtonsContainer;
