import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import Swiper from 'react-native-swiper'
import { Fontisto, FontAwesome } from '@expo/vector-icons';

import colors from '../../../../util/colors'
import styles from './styles'
import Slide from "./Slide";

const descriptionText = 'Veja quem curtiu você e mais!'

const SwiperComp = (props) => (
    <Swiper autoplay={true} activeDotColor={colors.pink}>
        <Slide text={'ASSINE O TINDER GOLD'} descriptionText={descriptionText}>
            <Fontisto name="fire" size={24} color={colors.pink} />
        </Slide>
        <Slide text={'Faça Matches mais rápido'} >
            <FontAwesome name="bolt" size={30} color={colors.purple} />
        </Slide>
    </Swiper>
)
export default SwiperComp;