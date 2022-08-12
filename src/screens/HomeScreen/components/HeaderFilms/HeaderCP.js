import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import { TextBold, TextRegular, TextSemiBold } from '../../../../components/Text';


export function FilmesHeader({name, userName}){
    return(
        <View style={styles.distance}>
            <TextBold style={styles.txt}>Olá, <Text style={styles.user}>{name || userName}</Text>!</TextBold>
            <TextRegular style={styles.info}>Reveja ou acompanhe os filmes que você assistiu...</TextRegular>
            <TextRegular style={styles.movies}>Filmes populares este mês</TextRegular>
        </View>
    )
}
