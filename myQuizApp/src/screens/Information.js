import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, View, Text, ImageBackground, BackHandler } from 'react-native';
import { IconButton, Icon, Button } from 'native-base';
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Languages from '../../languages.json';
import { SetQuiz } from '../redux/action';

const Information = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { MyStore } = useSelector(state => state);

    let txtCulture = Languages.languages[MyStore.lang].Home.txtCulture;
    let txtCars = Languages.languages[MyStore.lang].Home.txtCars;
    let txtCountries = Languages.languages[MyStore.lang].Home.txtCountries;
    let txtVegetable = Languages.languages[MyStore.lang].Home.txtVegetable;

    let txtInformation1 = Languages.languages[MyStore.lang].Information.txtInformation1;
    let txtInformation2 = Languages.languages[MyStore.lang].Information.txtInformation2;
    let txtInformation3 = Languages.languages[MyStore.lang].Information.txtInformation3;
    let txtInformation4 = Languages.languages[MyStore.lang].Information.txtInformation4;
    let txtAskStart = Languages.languages[MyStore.lang].Information.txtAskStart;
    let txtButtonStart = Languages.languages[MyStore.lang].Information.txtButtonStart;
    let txtButtonCancel = Languages.languages[MyStore.lang].Information.txtButtonCancel;

    const ControlHeader = () => {
        if (MyStore.quiz == 1) {
            return txtCulture;
        } else if (MyStore.quiz == 2) {
            return txtCars;
        } else if (MyStore.quiz == 3) {
            return txtCountries;
        } else if (MyStore.quiz == 4) {
            return txtVegetable;
        }
    }

    const ControlInformation = () => {
        if (MyStore.quiz == 1) {
            return txtInformation1;
        } else if (MyStore.quiz == 2) {
            return txtInformation2;
        } else if (MyStore.quiz == 3) {
            return txtInformation3;
        } else if (MyStore.quiz == 4) {
            return txtInformation4;
        }
    }

    function handleBackButton() {
        dispatch(SetQuiz(0));
        navigation.goBack();
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        return () => {
            BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
            );
        };
    }, []);

    const IconButtonsTurnBack = () => {
        return (
            <IconButton
                onPress={() => {
                    dispatch(SetQuiz(0));
                    navigation.goBack();
                }}
                icon={<Icon as={Ionicons} name="arrow-back-circle-outline" />}
                color={'black'}
                size={55}
                _icon={{
                    color: 'black',
                    size: '2xl',
                }}
                _hover={{
                    bg: 'coolGray.800:alpha.20',
                }}
                _pressed={{
                    bg: 'coolGray.800:alpha.20',
                    _icon: {
                        name: 'arrow-back-circle',
                    },
                    _ios: {
                        _icon: {
                            size: '2xl',
                        },
                    },
                }}
                _ios={{
                    _icon: {
                        size: '2xl',
                    },
                }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    {IconButtonsTurnBack()}
                </View>
                <View style={styles.headerMiddle}>
                    <Text style={styles.text1}>
                        {ControlHeader()}
                    </Text>
                </View>
                <View style={styles.headerRight}>
                </View>
            </View>
            <ImageBackground
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                source={require('../photos/home.png')}>
                <View style={styles.container}>
                    <View style={styles.myInformation}>
                        <Text style={styles.text2}>
                            {ControlInformation()}
                        </Text>
                    </View>
                    <View style={styles.myAsk}>
                        <Text style={styles.text3}>
                            {txtAskStart}
                        </Text>
                    </View>
                    <View style={styles.myButtons}>
                        <Button style={styles.myButton} leftIcon={<Icon as={AntDesign} name="playcircleo" />} onPress={() => {
                            navigation.navigate("Quiz");
                        }}>
                            {txtButtonStart}
                        </Button>
                        <Button style={styles.myButton} leftIcon={<Icon as={MaterialCommunityIcons} name="cancel" />} onPress={() => {
                            dispatch(SetQuiz(0));
                            navigation.goBack();
                        }}>
                            {txtButtonCancel}
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    header: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#F3B041'
    },
    headerLeft: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerMiddle: {
        width: '60%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerRight: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '90%',
        height: '90%',
        backgroundColor: '#F3B041',
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 25
    },
    myInformation: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    myAsk: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    myButtons: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    myButton: {
        margin: 10,
        width: '50%'
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        margin: 5
    },
    text2: {
        fontWeight: 'bold',
        fontSize: 21,
        color: 'black',
        margin: 5
    },
    text3: {
        fontStyle: 'italic',
        fontSize: 18,
        color: 'black',
        margin: 5
    },
})

export default Information;