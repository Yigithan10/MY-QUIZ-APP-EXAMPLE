import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeModules, StyleSheet, View } from 'react-native';
import { SetLanguage } from '../redux/action';
import { useDispatch } from "react-redux";
import Lottie from 'lottie-react-native';

const Splash = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    let localeLanguage;
    const localeLanguageLearn =
        Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings.AppleLocale ||
            NativeModules.SettingsManager.settings.AppleLanguages[3] //iOS 13
            : NativeModules.I18nManager.localeIdentifier;


    const SetLocaleLanguage = () => {
        if (localeLanguageLearn == 'en_US') {
            localeLanguage = 'eng';
        } else if (localeLanguageLearn == 'de_DE') {
            localeLanguage = 'deu';
        } else if (localeLanguageLearn == 'fr_FR') {
            localeLanguage = 'fra';
        } else if (localeLanguageLearn == 'tr_TR') {
            localeLanguage = 'tur';
        } else {
            localeLanguage = 'eng';
        }
    }

    const storeData = async (lang) => {
        try {
          await AsyncStorage.setItem('language', lang);
        } catch (e) {
          console.log(e);
        }
      }

    const getData = async () => {
        try {
            const language = await AsyncStorage.getItem('language');
            if (language == null || language == undefined || language == "") {
                storeData(localeLanguage);
                dispatch(SetLanguage(localeLanguage));
                navigation.navigate('Home');
            } else {
                dispatch(SetLanguage(language));
                navigation.navigate('Home');
            }
        } catch (e) {
            console.log(e);
        }
    }

    const myAnimation = () => {
        return (
            <Lottie
                source={require('../../Quiz1.json')}
                autoPlay
                loop={false}
                speed={1}
                onAnimationFinish={() => {
                    getData();
                }}
            />
        );
    };

    return (
        <View style={styles.background}>
            {SetLocaleLanguage()}
            {myAnimation()}
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
})

export default Splash;