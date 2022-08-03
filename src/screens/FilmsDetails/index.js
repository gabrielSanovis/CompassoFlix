import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import Header from './components/Header';
import Synopsis from './components/Synopsis';
import Cast from './components/Cast';
import styles from './style';

const FilmsDetails = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Header />
            <Synopsis />
            <Cast />
        </SafeAreaView>
    );
}

export default FilmsDetails;