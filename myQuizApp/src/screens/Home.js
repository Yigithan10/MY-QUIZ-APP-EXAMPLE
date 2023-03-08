import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Button,
    BackHandler,
    ImageBackground,
    TouchableOpacity,
    Image
} from 'react-native';
import { IconButton, Icon } from 'native-base';
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Languages from '../../languages.json';
import { SetQuiz } from '../redux/action';

const Home = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { MyStore } = useSelector(state => state);

    let txtHeader = Languages.languages[MyStore.lang].Home.txtHeader;
    let txtCulture = Languages.languages[MyStore.lang].Home.txtCulture;
    let txtCars = Languages.languages[MyStore.lang].Home.txtCars;
    let txtCountries = Languages.languages[MyStore.lang].Home.txtCountries;
    let txtVegetable = Languages.languages[MyStore.lang].Home.txtVegetable;

    const ExitApp = () => {
        BackHandler.exitApp();
    };

    function handleExitButton() {
        ExitApp();
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleExitButton);
        return () => {
            BackHandler.removeEventListener(
                'hardwareBackPress',
                handleExitButton,
            );
        };
    }, []);


    const IconButtonsSettings = () => {
        return (
            <IconButton
                onPress={() => navigation.navigate('Settings')}
                icon={<Icon as={Ionicons} name="settings-outline" />}
                color={'black'}
                size={55}
                _icon={{
                    color: 'black',
                    size: 'xl',
                }}
                _hover={{
                    bg: 'coolGray.800:alpha.20',
                }}
                _pressed={{
                    bg: 'coolGray.800:alpha.20',
                    _icon: {
                        name: 'settings',
                    },
                    _ios: {
                        _icon: {
                            size: 'xl',
                        },
                    },
                }}
                _ios={{
                    _icon: {
                        size: 'xl',
                    },
                }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                </View>
                <View style={styles.headerMiddle}>
                    <Text style={styles.text1}>
                        {txtHeader}
                    </Text>
                </View>
                <View style={styles.headerRight}>
                    {IconButtonsSettings()}
                </View>
            </View>
            <ImageBackground
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                source={require('../photos/home.png')}>
                <View style={styles.container}>
                    <View style={styles.oneRow}>
                        <TouchableOpacity style={styles.oneCard} activeOpacity={0.6} onPress={() => {
                            dispatch(SetQuiz(1));
                            navigation.navigate("Information");
                        }}>
                            <Image
                                style={styles.image}
                                source={require('../photos/culture.jpg')}
                            />
                            <Text style={styles.text3}>{txtCulture}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.oneCard} activeOpacity={0.6} onPress={() => {
                            dispatch(SetQuiz(2));
                            navigation.navigate("Information");
                        }}>
                            <Image
                                style={styles.image}
                                source={require('../photos/cars.jpg')}
                            />
                            <Text style={styles.text3}>{txtCars}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.oneRow}>
                        <TouchableOpacity style={styles.oneCard} activeOpacity={0.6} onPress={() => {
                            dispatch(SetQuiz(3));
                            navigation.navigate("Information");
                        }}>
                            <Image
                                style={styles.image}
                                source={require('../photos/countries.jpg')}
                            />
                            <Text style={styles.text3}>{txtCountries}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.oneCard} activeOpacity={0.6} onPress={() => {
                            dispatch(SetQuiz(4));
                            navigation.navigate("Information");
                        }}>
                            <Image
                                style={styles.image}
                                source={require('../photos/vegetable.jpg')}
                            />
                            <Text style={styles.text3}>{txtVegetable}</Text>
                        </TouchableOpacity>
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
        width: '95%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    oneRow: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10,
    },
    oneCard: {
        width: '45%',
        height: '80%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 25,
        backgroundColor: '#F3B041'
    },
    image: {
        width: '85%',
        height: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        margin: 5
    },
    text2: {
        color: 'black',
        fontSize: 18,
        margin: 5
    },
    text3: {
        color: 'black',
        fontSize: 15,
        margin: 5
    },
});

export default Home;