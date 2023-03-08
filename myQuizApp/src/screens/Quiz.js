import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, View, Text, BackHandler, Alert, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Icon, Button, Progress, Avatar } from 'native-base';
import { SetQuiz } from '../redux/action';
import Languages from '../../languages.json';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Lottie from 'lottie-react-native';

const Quiz = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { MyStore } = useSelector(state => state);

    const [isSplash, setIsSplash] = useState(false);
    const [isQuizStart, setIsQuizStart] = useState(false);
    const [isAgainQuiz, setIsAgainQuiz] = useState(false);
    const [isQuizFinish, setIsQuizFinish] = useState(false);

    const [isAnswerTrue, setIsAnswerTrue] = useState(false);
    const [isAnswerFalse, setIsAnswerFalse] = useState(false);

    const [isQuestion, setIsQuestion] = useState(1);
    const [timer1, setTimer1] = useState(25);
    const [timer2, setTimer2] = useState(25);
    const [timer3, setTimer3] = useState(25);
    const [isProgress1, setIsProgress1] = useState(100);
    const [isProgress2, setIsProgress2] = useState(100);
    const [isProgress3, setIsProgress3] = useState(100);

    const [questionAnswer1_a, setQuestionAnswer1_a] = useState("");
    const [questionAnswer1_b, setQuestionAnswer1_b] = useState("");
    const [questionAnswer1_c, setQuestionAnswer1_c] = useState("");
    const [questionAnswer1_d, setQuestionAnswer1_d] = useState("");

    const [questionAnswer2_a, setQuestionAnswer2_a] = useState("");
    const [questionAnswer2_b, setQuestionAnswer2_b] = useState("");
    const [questionAnswer2_c, setQuestionAnswer2_c] = useState("");
    const [questionAnswer2_d, setQuestionAnswer2_d] = useState("");

    const [questionAnswer3_a, setQuestionAnswer3_a] = useState("");
    const [questionAnswer3_b, setQuestionAnswer3_b] = useState("");
    const [questionAnswer3_c, setQuestionAnswer3_c] = useState("");
    const [questionAnswer3_d, setQuestionAnswer3_d] = useState("");

    const [isPressQuestionAnswer_a, setIsPressQuestionAnswer_a] = useState(false);
    const [isPressQuestionAnswer_b, setIsPressQuestionAnswer_b] = useState(false);
    const [isPressQuestionAnswer_c, setIsPressQuestionAnswer_c] = useState(false);
    const [isPressQuestionAnswer_d, setIsPressQuestionAnswer_d] = useState(false);

    const [questionAnswer_a_black, setQuestionAnswer_a_black] = useState(false);
    const [questionAnswer_b_black, setQuestionAnswer_b_black] = useState(false);
    const [questionAnswer_c_black, setQuestionAnswer_c_black] = useState(false);
    const [questionAnswer_d_black, setQuestionAnswer_d_black] = useState(false);

    const [questionAnswer_a_yellow, setQuestionAnswer_a_yellow] = useState(false);
    const [questionAnswer_b_yellow, setQuestionAnswer_b_yellow] = useState(false);
    const [questionAnswer_c_yellow, setQuestionAnswer_c_yellow] = useState(false);
    const [questionAnswer_d_yellow, setQuestionAnswer_d_yellow] = useState(false);

    const [questionAnswer_a_red, setQuestionAnswer_a_red] = useState(false);
    const [questionAnswer_b_red, setQuestionAnswer_b_red] = useState(false);
    const [questionAnswer_c_red, setQuestionAnswer_c_red] = useState(false);
    const [questionAnswer_d_red, setQuestionAnswer_d_red] = useState(false);

    const [questionAnswer_a_green, setQuestionAnswer_a_green] = useState(false);
    const [questionAnswer_b_green, setQuestionAnswer_b_green] = useState(false);
    const [questionAnswer_c_green, setQuestionAnswer_c_green] = useState(false);
    const [questionAnswer_d_green, setQuestionAnswer_d_green] = useState(false);

    const [questionAnswer1_true, setQuestionAnswer1_true] = useState("");
    const [questionAnswer2_true, setQuestionAnswer2_true] = useState("");
    const [questionAnswer3_true, setQuestionAnswer3_true] = useState("");

    const [isAnswer, setIsAnswer] = useState(false);

    const [randomQuestionNumber1, setRandomQuestionNumber1] = useState(randomNumberInRange(1, 3));
    const [randomQuestionNumber2, setRandomQuestionNumber2] = useState(randomNumberInRange(1, 3));
    const [randomQuestionNumber3, setRandomQuestionNumber3] = useState(randomNumberInRange(1, 3));

    let txtCulture = Languages.languages[MyStore.lang].Home.txtCulture;
    let txtCars = Languages.languages[MyStore.lang].Home.txtCars;
    let txtCountries = Languages.languages[MyStore.lang].Home.txtCountries;
    let txtVegetable = Languages.languages[MyStore.lang].Home.txtVegetable;

    let txtAlertQuestion1 = Languages.languages[MyStore.lang].Alerts.txtAlertQuestion1;
    let txtAlertText1 = Languages.languages[MyStore.lang].Alerts.txtAlertText1;
    let txtAlertNo = Languages.languages[MyStore.lang].Alerts.txtAlertNo;
    let txtAlertYes = Languages.languages[MyStore.lang].Alerts.txtAlertYes;
    let txtAlertText2 = Languages.languages[MyStore.lang].Alerts.txtAlertText2;
    let txtAlertQuestion2 = Languages.languages[MyStore.lang].Alerts.txtAlertQuestion2;
    let txtAlertGoToMenü = Languages.languages[MyStore.lang].Alerts.txtAlertGoToMenü;
    let txtAlertAgain = Languages.languages[MyStore.lang].Alerts.txtAlertAgain;
    let txtAlertText3 = Languages.languages[MyStore.lang].Alerts.txtAlertText3;

    let txtQuestionCulture1_1 = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture1_1;
    let txtQuestionCulture1_2 = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture1_2;
    let txtQuestionCulture1_3 = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture1_3;
    let txtQuestionCulture1_3_a = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture1_3_a;
    let txtQuestionCulture1_3_b = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture1_3_b;
    let txtQuestionCulture1_3_c = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture1_3_c;
    let txtQuestionCulture1_3_d = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture1_3_d;
    let txtQuestionCulture2_1 = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture2_1;
    let txtQuestionCulture2_1_a = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture2_1_a;
    let txtQuestionCulture2_1_b = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture2_1_b;
    let txtQuestionCulture2_1_c = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture2_1_c;
    let txtQuestionCulture2_1_d = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture2_1_d;
    let txtQuestionCulture2_2 = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture2_2;
    let txtQuestionCulture2_2_a = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture2_2_a;
    let txtQuestionCulture2_2_b = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture2_2_b;
    let txtQuestionCulture2_2_c = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture2_2_c;
    let txtQuestionCulture2_2_d = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture2_2_d;
    let txtQuestionCulture2_3 = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture2_3;
    let txtQuestionCulture3_1 = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture3_1;
    let txtQuestionCulture3_2 = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture3_2;
    let txtQuestionCulture3_3 = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture3_3;
    let txtQuestionCulture3_3_a = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture3_3_a;
    let txtQuestionCulture3_3_b = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture3_3_b;
    let txtQuestionCulture3_3_c = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture3_3_c;
    let txtQuestionCulture3_3_d = Languages.languages[MyStore.lang].Quiz.txtQuestionCulture3_3_d;
    let txtQuestionCars = Languages.languages[MyStore.lang].Quiz.txtQuestionCars;
    let txtQuestionFlags = Languages.languages[MyStore.lang].Quiz.txtQuestionFlags;
    let txtQuestionFlagsGermany = Languages.languages[MyStore.lang].Quiz.txtQuestionFlagsGermany;
    let txtQuestionFlagsFrance = Languages.languages[MyStore.lang].Quiz.txtQuestionFlagsFrance;
    let txtQuestionFlagsSpain = Languages.languages[MyStore.lang].Quiz.txtQuestionFlagsSpain;
    let txtQuestionFlagsPortugal = Languages.languages[MyStore.lang].Quiz.txtQuestionFlagsPortugal;
    let txtQuestionFlagsArgentina = Languages.languages[MyStore.lang].Quiz.txtQuestionFlagsArgentina;
    let txtQuestionFlagsUkraine = Languages.languages[MyStore.lang].Quiz.txtQuestionFlagsUkraine;
    let txtQuestionFlagsNetherlands = Languages.languages[MyStore.lang].Quiz.txtQuestionFlagsNetherlands;
    let txtQuestionFlagsAustria = Languages.languages[MyStore.lang].Quiz.txtQuestionFlagsAustria;
    let txtQuestionFlagsColombia = Languages.languages[MyStore.lang].Quiz.txtQuestionFlagsColombia;
    let txtQuestionVegetable = Languages.languages[MyStore.lang].Quiz.txtQuestionVegetable;
    let txtQuestionVegetableTomatoes = Languages.languages[MyStore.lang].Quiz.txtQuestionVegetableTomatoes;
    let txtQuestionVegetableCarrot = Languages.languages[MyStore.lang].Quiz.txtQuestionVegetableCarrot;
    let txtQuestionVegetablePea = Languages.languages[MyStore.lang].Quiz.txtQuestionVegetablePea;
    let txtQuestionVegetableSweetcorn = Languages.languages[MyStore.lang].Quiz.txtQuestionVegetableSweetcorn;
    let txtQuestionVegetablePotatoes = Languages.languages[MyStore.lang].Quiz.txtQuestionVegetablePotatoes;
    let txtQuestionVegetableParsley = Languages.languages[MyStore.lang].Quiz.txtQuestionVegetableParsley;
    let txtQuestionVegetableLettuce = Languages.languages[MyStore.lang].Quiz.txtQuestionVegetableLettuce;
    let txtQuestionVegetableCucumber = Languages.languages[MyStore.lang].Quiz.txtQuestionVegetableCucumber;
    let txtQuestionVegetablePlum = Languages.languages[MyStore.lang].Quiz.txtQuestionVegetablePlum;

    let txtQuestionFinishText1 = Languages.languages[MyStore.lang].Quiz.txtQuestionFinishText1;
    let txtQuestionFinishText2 = Languages.languages[MyStore.lang].Quiz.txtQuestionFinishText2;
    let txtQuestionFinishText3 = Languages.languages[MyStore.lang].Quiz.txtQuestionFinishText3;
    let txtQuestionFinishText4 = Languages.languages[MyStore.lang].Quiz.txtQuestionFinishText4;

    let txtFalse = Languages.languages[MyStore.lang].Quiz.txtFalse;
    let txtTrue = Languages.languages[MyStore.lang].Quiz.txtTrue;

    const quiz_culture_1 = {
        question1: {
            question: txtQuestionCulture1_1,
            answer_a: "UNICEF",
            answer_b: "UHW",
            answer_c: "WHO",
            answer_d: "FIFA",
            answer_true: "c"
        },
        question2: {
            question: txtQuestionCulture1_2,
            answer_a: "0",
            answer_b: "10",
            answer_c: "100",
            answer_d: "1.000",
            answer_true: "a"
        },
        question3: {
            question: txtQuestionCulture1_3,
            answer_a: txtQuestionCulture1_3_a,
            answer_b: txtQuestionCulture1_3_b,
            answer_c: txtQuestionCulture1_3_c,
            answer_d: txtQuestionCulture1_3_d,
            answer_true: "b"
        }
    }

    const quiz_culture_2 = {
        question1: {
            question: txtQuestionCulture2_1,
            answer_a: txtQuestionCulture2_1_a,
            answer_b: txtQuestionCulture2_1_b,
            answer_c: txtQuestionCulture2_1_c,
            answer_d: txtQuestionCulture2_1_d,
            answer_true: "c"
        },
        question2: {
            question: txtQuestionCulture2_2,
            answer_a: txtQuestionCulture2_2_a,
            answer_b: txtQuestionCulture2_2_b,
            answer_c: txtQuestionCulture2_2_c,
            answer_d: txtQuestionCulture2_2_d,
            answer_true: "c"
        },
        question3: {
            question: txtQuestionCulture2_3,
            answer_a: "Barcelona",
            answer_b: "PSG",
            answer_c: "Bayern Munich",
            answer_d: "Real Madrid",
            answer_true: "b"
        }
    }

    const quiz_culture_3 = {
        question1: {
            question: txtQuestionCulture3_1,
            answer_a: "A",
            answer_b: "R",
            answer_c: "D",
            answer_d: "C",
            answer_true: "b"
        },
        question2: {
            question: txtQuestionCulture3_2,
            answer_a: "10 mm",
            answer_b: "100 mm",
            answer_c: "1.000 mm",
            answer_d: "10.000 mm",
            answer_true: "c"
        },
        question3: {
            question: txtQuestionCulture3_3,
            answer_a: txtQuestionCulture3_3_a,
            answer_b: txtQuestionCulture3_3_b,
            answer_c: txtQuestionCulture3_3_c,
            answer_d: txtQuestionCulture3_3_d,
            answer_true: "c"
        }
    }

    const quiz_cars_1 = {
        question1: {
            question: txtQuestionCars,
            url: require("../photos/mercedes.jpg"),
            answer_a: "Mercedes",
            answer_b: "Bmw",
            answer_c: "Volkswagen",
            answer_d: "Audi",
            answer_true: "a"
        },
        question2: {
            question: txtQuestionCars,
            url: require("../photos/bmw.jpg"),
            answer_a: "Skoda",
            answer_b: "Mercedes",
            answer_c: "Volkswagen",
            answer_d: "Bmw",
            answer_true: "d"
        },
        question3: {
            question: txtQuestionCars,
            url: require("../photos/vw.jpg"),
            answer_a: "Volkswagen",
            answer_b: "Mercedes",
            answer_c: "Bmw",
            answer_d: "Seat",
            answer_true: "a"
        }
    }

    const quiz_cars_2 = {
        question1: {
            question: txtQuestionCars,
            url: require("../photos/audi.jpg"),
            answer_a: "Mercedes",
            answer_b: "Bmw",
            answer_c: "Volkswagen",
            answer_d: "Audi",
            answer_true: "d"
        },
        question2: {
            question: txtQuestionCars,
            url: require("../photos/seat.jpg"),
            answer_a: "Seat",
            answer_b: "Bmw",
            answer_c: "Skoda",
            answer_d: "Audi",
            answer_true: "a"
        },
        question3: {
            question: txtQuestionCars,
            url: require("../photos/pejo.jpg"),
            answer_a: "Seat",
            answer_b: "Bmw",
            answer_c: "Peugeot",
            answer_d: "Skoda",
            answer_true: "c"
        }
    }

    const quiz_cars_3 = {
        question1: {
            question: txtQuestionCars,
            url: require("../photos/skoda.jpg"),
            answer_a: "Seat",
            answer_b: "Bmw",
            answer_c: "Peugeot",
            answer_d: "Skoda",
            answer_true: "d"
        },
        question2: {
            question: txtQuestionCars,
            url: require("../photos/lexus.jpg"),
            answer_a: "Seat",
            answer_b: "Bmw",
            answer_c: "Peugeot",
            answer_d: "Lexus",
            answer_true: "d"
        },
        question3: {
            question: txtQuestionCars,
            url: require("../photos/ds.jpg"),
            answer_a: "Audi",
            answer_b: "DS",
            answer_c: "Peugeot",
            answer_d: "Skoda",
            answer_true: "b"
        }
    }

    const quiz_flags_1 = {
        question1: {
            question: txtQuestionFlags,
            url: require("../photos/germany.png"),
            answer_a: txtQuestionFlagsGermany,
            answer_b: txtQuestionFlagsFrance,
            answer_c: txtQuestionFlagsSpain,
            answer_d: txtQuestionFlagsPortugal,
            answer_true: "a"
        },
        question2: {
            question: txtQuestionFlags,
            url: require("../photos/france.png"),
            answer_a: txtQuestionFlagsArgentina,
            answer_b: txtQuestionFlagsFrance,
            answer_c: txtQuestionFlagsGermany,
            answer_d: txtQuestionFlagsNetherlands,
            answer_true: "b"
        },
        question3: {
            question: txtQuestionFlags,
            url: require("../photos/netherlands.png"),
            answer_a: txtQuestionFlagsArgentina,
            answer_b: txtQuestionFlagsFrance,
            answer_c: txtQuestionFlagsGermany,
            answer_d: txtQuestionFlagsNetherlands,
            answer_true: "d"
        }
    }

    const quiz_flags_2 = {
        question1: {
            question: txtQuestionFlags,
            url: require("../photos/austria.png"),
            answer_a: txtQuestionFlagsArgentina,
            answer_b: txtQuestionFlagsColombia,
            answer_c: txtQuestionFlagsAustria,
            answer_d: txtQuestionFlagsNetherlands,
            answer_true: "c"
        },
        question2: {
            question: txtQuestionFlags,
            url: require("../photos/spain.png"),
            answer_a: txtQuestionFlagsUkraine,
            answer_b: txtQuestionFlagsFrance,
            answer_c: txtQuestionFlagsAustria,
            answer_d: txtQuestionFlagsSpain,
            answer_true: "d"
        },
        question3: {
            question: txtQuestionFlags,
            url: require("../photos/portugal.png"),
            answer_a: txtQuestionFlagsAustria,
            answer_b: txtQuestionFlagsPortugal,
            answer_c: txtQuestionFlagsAustria,
            answer_d: txtQuestionFlagsArgentina,
            answer_true: "b"
        }
    }

    const quiz_flags_3 = {
        question1: {
            question: txtQuestionFlags,
            url: require("../photos/colombia.png"),
            answer_a: txtQuestionFlagsFrance,
            answer_b: txtQuestionFlagsPortugal,
            answer_c: txtQuestionFlagsAustria,
            answer_d: txtQuestionFlagsColombia,
            answer_true: "d"
        },
        question2: {
            question: txtQuestionFlags,
            url: require("../photos/argentina.png"),
            answer_a: txtQuestionFlagsFrance,
            answer_b: txtQuestionFlagsArgentina,
            answer_c: txtQuestionFlagsAustria,
            answer_d: txtQuestionFlagsGermany,
            answer_true: "b"
        },
        question3: {
            question: txtQuestionFlags,
            url: require("../photos/ukraine.png"),
            answer_a: txtQuestionFlagsFrance,
            answer_b: txtQuestionFlagsUkraine,
            answer_c: txtQuestionFlagsAustria,
            answer_d: txtQuestionFlagsGermany,
            answer_true: "b"
        }
    }

    const quiz_vegetable_1 = {
        question1: {
            question: txtQuestionVegetable,
            url: require("../photos/tomatoes.jpg"),
            answer_a: txtQuestionVegetablePlum,
            answer_b: txtQuestionVegetableCucumber,
            answer_c: txtQuestionVegetableTomatoes,
            answer_d: txtQuestionVegetablePea,
            answer_true: "c"
        },
        question2: {
            question: txtQuestionVegetable,
            url: require("../photos/carrots.jpg"),
            answer_a: txtQuestionVegetableCucumber,
            answer_b: txtQuestionVegetableCarrot,
            answer_c: txtQuestionVegetablePlum,
            answer_d: txtQuestionVegetableTomatoes,
            answer_true: "b"
        },
        question3: {
            question: txtQuestionVegetable,
            url: require("../photos/peas.jpg"),
            answer_a: txtQuestionVegetableTomatoes,
            answer_b: txtQuestionVegetableCucumber,
            answer_c: txtQuestionVegetableSweetcorn,
            answer_d: txtQuestionVegetablePea,
            answer_true: "d"
        }
    }

    const quiz_vegetable_2 = {
        question1: {
            question: txtQuestionVegetable,
            url: require("../photos/sweetcorn.jpg"),
            answer_a: txtQuestionVegetablePotatoes,
            answer_b: txtQuestionVegetablePlum,
            answer_c: txtQuestionVegetableSweetcorn,
            answer_d: txtQuestionVegetableCucumber,
            answer_true: "c"
        },
        question2: {
            question: txtQuestionVegetable,
            url: require("../photos/potatoes.jpg"),
            answer_a: txtQuestionVegetablePotatoes,
            answer_b: txtQuestionVegetableSweetcorn,
            answer_c: txtQuestionVegetableCucumber,
            answer_d: txtQuestionVegetableTomatoes,
            answer_true: "a"
        },
        question3: {
            question: txtQuestionVegetable,
            url: require("../photos/parsley.jpg"),
            answer_a: txtQuestionVegetableTomatoes,
            answer_b: txtQuestionVegetableCarrot,
            answer_c: txtQuestionVegetableParsley,
            answer_d: txtQuestionVegetablePotatoes,
            answer_true: "c"
        }
    }

    const quiz_vegetable_3 = {
        question1: {
            question: txtQuestionVegetable,
            url: require("../photos/lettuce.jpg"),
            answer_a: txtQuestionVegetableSweetcorn,
            answer_b: txtQuestionVegetableLettuce,
            answer_c: txtQuestionVegetablePlum,
            answer_d: txtQuestionVegetableCarrot,
            answer_true: "b"
        },
        question2: {
            question: txtQuestionVegetable,
            url: require("../photos/cucumbers.jpg"),
            answer_a: txtQuestionVegetablePea,
            answer_b: txtQuestionVegetablePlum,
            answer_c: txtQuestionVegetableCarrot,
            answer_d: txtQuestionVegetableCucumber,
            answer_true: "d"
        },
        question3: {
            question: txtQuestionVegetable,
            url: require("../photos/plums.jpg"),
            answer_a: txtQuestionVegetableCarrot,
            answer_b: txtQuestionVegetableSweetcorn,
            answer_c: txtQuestionVegetablePea,
            answer_d: txtQuestionVegetablePlum,
            answer_true: "d"
        }
    }

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    useEffect(() => {
        setIsQuestion(1);
        setQuestionAnswer_a_black(true);
        setQuestionAnswer_b_black(true);
        setQuestionAnswer_c_black(true);
        setQuestionAnswer_d_black(true);
        setIsSplash(true);
        if (isQuestion == 1) {
            setTimer1(timer1 - 1);
        } else if (isQuestion == 2) {
            setTimer2(timer2 - 1);
        } else if (isQuestion == 3) {
            setTimer3(timer3 - 1);
        }
    }, [])

    useEffect(() => {
        if (isSplash == false && isQuizStart == true && (timer1 != 0 && timer2 != 0 && timer3 != 0)) {
            setIsQuizStart(true);
        }
    }, [isSplash])

    useEffect(() => {
        if (isSplash == false && isQuizStart == true && (timer1 != 0 && timer2 != 0 && timer3 != 0) && isPressQuestionAnswer_a == false && isPressQuestionAnswer_b == false && isPressQuestionAnswer_c == false && isPressQuestionAnswer_d == false) {
            setTimeout(() => {
                if (isQuestion == 1) {
                    setTimer1(timer1 - 1);
                    setIsProgress1(isProgress1 - 4);
                } else if (isQuestion == 2) {
                    setTimer2(timer2 - 1);
                    setIsProgress2(isProgress2 - 4);
                } else if (isQuestion == 3) {
                    setTimer3(timer3 - 1);
                    setIsProgress3(isProgress3 - 4);
                }
            }, 1000);
        }
    }, [isQuizStart, timer1, isProgress1, timer2, isProgress2, timer3, isProgress3])

    useEffect(() => {
        if (isSplash == false && isQuizStart == true && timer1 == 0) {
            setIsQuizStart(false);
            setTimeout(() => {
                HandleAlertAgain();
            }, 1000);
        }
    }, [timer1])

    useEffect(() => {
        if (isSplash == false && isQuizStart == true && timer2 == 0) {
            setIsQuizStart(false);
            setTimeout(() => {
                HandleAlertAgain();
            }, 1000);
        }
    }, [timer2])

    useEffect(() => {
        if (isSplash == false && isQuizStart == true && timer3 == 0) {
            setIsQuizStart(false);
            setTimeout(() => {
                HandleAlertAgain();
            }, 1000);
        }
    }, [timer3])

    useEffect(() => {
        ControlAnswers();
    }, [isSplash])

    useEffect(() => {
        if (isPressQuestionAnswer_a == true) {
            setQuestionAnswer_a_black(false);
            setQuestionAnswer_a_yellow(true);
            setQuestionAnswer_a_red(false);
            setQuestionAnswer_a_green(false);
            setTimeout(() => {
                if (isQuestion == 1) {
                    if (questionAnswer1_true == "a") {
                        setQuestionAnswer_a_black(false);
                        setQuestionAnswer_a_yellow(false);
                        setQuestionAnswer_a_red(false);
                        setQuestionAnswer_a_green(true);
                        setTimeout(() => {
                            setIsAnswerTrue(true);
                            setIsAnswerFalse(false);
                        }, 1000);
                    } else {
                        setQuestionAnswer_a_black(false);
                        setQuestionAnswer_a_yellow(false);
                        setQuestionAnswer_a_red(true);
                        setQuestionAnswer_a_green(false);
                        if (questionAnswer1_true == "b") {
                            setQuestionAnswer_b_black(false);
                            setQuestionAnswer_b_yellow(false);
                            setQuestionAnswer_b_red(false);
                            setQuestionAnswer_b_green(true);
                        } else if (questionAnswer1_true == "c") {
                            setQuestionAnswer_c_black(false);
                            setQuestionAnswer_c_yellow(false);
                            setQuestionAnswer_c_red(false);
                            setQuestionAnswer_c_green(true);
                        } else if (questionAnswer1_true == "d") {
                            setQuestionAnswer_d_black(false);
                            setQuestionAnswer_d_yellow(false);
                            setQuestionAnswer_d_red(false);
                            setQuestionAnswer_d_green(true);
                        }
                        setTimeout(() => {
                            setIsAnswerFalse(true);
                            setIsAnswerTrue(false);
                        }, 1000);
                    }
                } else if (isQuestion == 2) {
                    if (questionAnswer2_true == "a") {
                        setQuestionAnswer_a_black(false);
                        setQuestionAnswer_a_yellow(false);
                        setQuestionAnswer_a_red(false);
                        setQuestionAnswer_a_green(true);
                        setTimeout(() => {
                            setIsAnswerTrue(true);
                            setIsAnswerFalse(false);
                        }, 1000);
                    } else {
                        setQuestionAnswer_a_black(false);
                        setQuestionAnswer_a_yellow(false);
                        setQuestionAnswer_a_red(true);
                        setQuestionAnswer_a_green(false);
                        if (questionAnswer2_true == "b") {
                            setQuestionAnswer_b_black(false);
                            setQuestionAnswer_b_yellow(false);
                            setQuestionAnswer_b_red(false);
                            setQuestionAnswer_b_green(true);
                        } else if (questionAnswer2_true == "c") {
                            setQuestionAnswer_c_black(false);
                            setQuestionAnswer_c_yellow(false);
                            setQuestionAnswer_c_red(false);
                            setQuestionAnswer_c_green(true);
                        } else if (questionAnswer2_true == "d") {
                            setQuestionAnswer_d_black(false);
                            setQuestionAnswer_d_yellow(false);
                            setQuestionAnswer_d_red(false);
                            setQuestionAnswer_d_green(true);
                        }
                        setTimeout(() => {
                            setIsAnswerFalse(true);
                            setIsAnswerTrue(false);
                        }, 1000);
                    }
                } else if (isQuestion == 3) {
                    if (questionAnswer3_true == "a") {
                        setQuestionAnswer_a_black(false);
                        setQuestionAnswer_a_yellow(false);
                        setQuestionAnswer_a_red(false);
                        setQuestionAnswer_a_green(true);
                        setTimeout(() => {
                            setIsAnswerTrue(true);
                            setIsAnswerFalse(false);
                        }, 1000);
                    } else {
                        setQuestionAnswer_a_black(false);
                        setQuestionAnswer_a_yellow(false);
                        setQuestionAnswer_a_red(true);
                        setQuestionAnswer_a_green(false);
                        if (questionAnswer3_true == "b") {
                            setQuestionAnswer_b_black(false);
                            setQuestionAnswer_b_yellow(false);
                            setQuestionAnswer_b_red(false);
                            setQuestionAnswer_b_green(true);
                        } else if (questionAnswer3_true == "c") {
                            setQuestionAnswer_c_black(false);
                            setQuestionAnswer_c_yellow(false);
                            setQuestionAnswer_c_red(false);
                            setQuestionAnswer_c_green(true);
                        } else if (questionAnswer3_true == "d") {
                            setQuestionAnswer_d_black(false);
                            setQuestionAnswer_d_yellow(false);
                            setQuestionAnswer_d_red(false);
                            setQuestionAnswer_d_green(true);
                        }
                        setTimeout(() => {
                            setIsAnswerFalse(true);
                            setIsAnswerTrue(false);
                        }, 1000);
                    }
                }
            }, 2000);
        }
    }, [isPressQuestionAnswer_a])

    useEffect(() => {
        if (isPressQuestionAnswer_b == true) {
            setQuestionAnswer_b_black(false);
            setQuestionAnswer_b_yellow(true);
            setQuestionAnswer_b_red(false);
            setQuestionAnswer_b_green(false);
            setTimeout(() => {
                if (isQuestion == 1) {
                    if (questionAnswer1_true == "b") {
                        setQuestionAnswer_b_black(false);
                        setQuestionAnswer_b_yellow(false);
                        setQuestionAnswer_b_red(false);
                        setQuestionAnswer_b_green(true);
                        setTimeout(() => {
                            setIsAnswerTrue(true);
                            setIsAnswerFalse(false);
                        }, 1000);
                    } else {
                        setQuestionAnswer_b_black(false);
                        setQuestionAnswer_b_yellow(false);
                        setQuestionAnswer_b_red(true);
                        setQuestionAnswer_b_green(false);
                        if (questionAnswer1_true == "a") {
                            setQuestionAnswer_a_black(false);
                            setQuestionAnswer_a_yellow(false);
                            setQuestionAnswer_a_red(false);
                            setQuestionAnswer_a_green(true);
                        } else if (questionAnswer1_true == "c") {
                            setQuestionAnswer_c_black(false);
                            setQuestionAnswer_c_yellow(false);
                            setQuestionAnswer_c_red(false);
                            setQuestionAnswer_c_green(true);
                        } else if (questionAnswer1_true == "d") {
                            setQuestionAnswer_d_black(false);
                            setQuestionAnswer_d_yellow(false);
                            setQuestionAnswer_d_red(false);
                            setQuestionAnswer_d_green(true);
                        }
                        setTimeout(() => {
                            setIsAnswerFalse(true);
                            setIsAnswerTrue(false);
                        }, 1000);
                    }
                } else if (isQuestion == 2) {
                    if (questionAnswer2_true == "b") {
                        setQuestionAnswer_b_black(false);
                        setQuestionAnswer_b_yellow(false);
                        setQuestionAnswer_b_red(false);
                        setQuestionAnswer_b_green(true);
                        setTimeout(() => {
                            setIsAnswerTrue(true);
                            setIsAnswerFalse(false);
                        }, 1000);
                    } else {
                        setQuestionAnswer_b_black(false);
                        setQuestionAnswer_b_yellow(false);
                        setQuestionAnswer_b_red(true);
                        setQuestionAnswer_b_green(false);
                        if (questionAnswer2_true == "a") {
                            setQuestionAnswer_a_black(false);
                            setQuestionAnswer_a_yellow(false);
                            setQuestionAnswer_a_red(false);
                            setQuestionAnswer_a_green(true);
                        } else if (questionAnswer2_true == "c") {
                            setQuestionAnswer_c_black(false);
                            setQuestionAnswer_c_yellow(false);
                            setQuestionAnswer_c_red(false);
                            setQuestionAnswer_c_green(true);
                        } else if (questionAnswer2_true == "d") {
                            setQuestionAnswer_d_black(false);
                            setQuestionAnswer_d_yellow(false);
                            setQuestionAnswer_d_red(false);
                            setQuestionAnswer_d_green(true);
                        }
                        setTimeout(() => {
                            setIsAnswerFalse(true);
                            setIsAnswerTrue(false);
                        }, 1000);
                    }
                } else if (isQuestion == 3) {
                    if (questionAnswer3_true == "b") {
                        setQuestionAnswer_b_black(false);
                        setQuestionAnswer_b_yellow(false);
                        setQuestionAnswer_b_red(false);
                        setQuestionAnswer_b_green(true);
                        setTimeout(() => {
                            setIsAnswerTrue(true);
                            setIsAnswerFalse(false);
                        }, 1000);
                    } else {
                        setQuestionAnswer_b_black(false);
                        setQuestionAnswer_b_yellow(false);
                        setQuestionAnswer_b_red(true);
                        setQuestionAnswer_b_green(false);
                        if (questionAnswer3_true == "a") {
                            setQuestionAnswer_a_black(false);
                            setQuestionAnswer_a_yellow(false);
                            setQuestionAnswer_a_red(false);
                            setQuestionAnswer_a_green(true);
                        } else if (questionAnswer3_true == "c") {
                            setQuestionAnswer_c_black(false);
                            setQuestionAnswer_c_yellow(false);
                            setQuestionAnswer_c_red(false);
                            setQuestionAnswer_c_green(true);
                        } else if (questionAnswer3_true == "d") {
                            setQuestionAnswer_d_black(false);
                            setQuestionAnswer_d_yellow(false);
                            setQuestionAnswer_d_red(false);
                            setQuestionAnswer_d_green(true);
                        }
                        setTimeout(() => {
                            setIsAnswerFalse(true);
                            setIsAnswerTrue(false);
                        }, 1000);
                    }
                }
            }, 2000);
        }
    }, [isPressQuestionAnswer_b])

    useEffect(() => {
        if (isPressQuestionAnswer_c == true) {
            setQuestionAnswer_c_black(false);
            setQuestionAnswer_c_yellow(true);
            setQuestionAnswer_c_red(false);
            setQuestionAnswer_c_green(false);
            setTimeout(() => {
                if (isQuestion == 1) {
                    if (questionAnswer1_true == "c") {
                        setQuestionAnswer_c_black(false);
                        setQuestionAnswer_c_yellow(false);
                        setQuestionAnswer_c_red(false);
                        setQuestionAnswer_c_green(true);
                        setTimeout(() => {
                            setIsAnswerTrue(true);
                            setIsAnswerFalse(false);
                        }, 1000);
                    } else {
                        setQuestionAnswer_c_black(false);
                        setQuestionAnswer_c_yellow(false);
                        setQuestionAnswer_c_red(true);
                        setQuestionAnswer_c_green(false);
                        if (questionAnswer1_true == "a") {
                            setQuestionAnswer_a_black(false);
                            setQuestionAnswer_a_yellow(false);
                            setQuestionAnswer_a_red(false);
                            setQuestionAnswer_a_green(true);
                        } else if (questionAnswer1_true == "b") {
                            setQuestionAnswer_b_black(false);
                            setQuestionAnswer_b_yellow(false);
                            setQuestionAnswer_b_red(false);
                            setQuestionAnswer_b_green(true);
                        } else if (questionAnswer1_true == "d") {
                            setQuestionAnswer_d_black(false);
                            setQuestionAnswer_d_yellow(false);
                            setQuestionAnswer_d_red(false);
                            setQuestionAnswer_d_green(true);
                        }
                        setTimeout(() => {
                            setIsAnswerFalse(true);
                            setIsAnswerTrue(false);
                        }, 1000);
                    }
                } else if (isQuestion == 2) {
                    if (questionAnswer2_true == "c") {
                        setQuestionAnswer_c_black(false);
                        setQuestionAnswer_c_yellow(false);
                        setQuestionAnswer_c_red(false);
                        setQuestionAnswer_c_green(true);
                        setTimeout(() => {
                            setIsAnswerTrue(true);
                            setIsAnswerFalse(false);
                        }, 1000);
                    } else {
                        setQuestionAnswer_c_black(false);
                        setQuestionAnswer_c_yellow(false);
                        setQuestionAnswer_c_red(true);
                        setQuestionAnswer_c_green(false);
                        if (questionAnswer2_true == "a") {
                            setQuestionAnswer_a_black(false);
                            setQuestionAnswer_a_yellow(false);
                            setQuestionAnswer_a_red(false);
                            setQuestionAnswer_a_green(true);
                        } else if (questionAnswer2_true == "b") {
                            setQuestionAnswer_b_black(false);
                            setQuestionAnswer_b_yellow(false);
                            setQuestionAnswer_b_red(false);
                            setQuestionAnswer_b_green(true);
                        } else if (questionAnswer2_true == "d") {
                            setQuestionAnswer_d_black(false);
                            setQuestionAnswer_d_yellow(false);
                            setQuestionAnswer_d_red(false);
                            setQuestionAnswer_d_green(true);
                        }
                        setTimeout(() => {
                            setIsAnswerFalse(true);
                            setIsAnswerTrue(false);
                        }, 1000);
                    }
                } else if (isQuestion == 3) {
                    if (questionAnswer3_true == "c") {
                        setQuestionAnswer_c_black(false);
                        setQuestionAnswer_c_yellow(false);
                        setQuestionAnswer_c_red(false);
                        setQuestionAnswer_c_green(true);
                        setTimeout(() => {
                            setIsAnswerTrue(true);
                            setIsAnswerFalse(false);
                        }, 1000);
                    } else {
                        setQuestionAnswer_c_black(false);
                        setQuestionAnswer_c_yellow(false);
                        setQuestionAnswer_c_red(true);
                        setQuestionAnswer_c_green(false);
                        if (questionAnswer3_true == "a") {
                            setQuestionAnswer_a_black(false);
                            setQuestionAnswer_a_yellow(false);
                            setQuestionAnswer_a_red(false);
                            setQuestionAnswer_a_green(true);
                        } else if (questionAnswer3_true == "b") {
                            setQuestionAnswer_b_black(false);
                            setQuestionAnswer_b_yellow(false);
                            setQuestionAnswer_b_red(false);
                            setQuestionAnswer_b_green(true);
                        } else if (questionAnswer3_true == "d") {
                            setQuestionAnswer_d_black(false);
                            setQuestionAnswer_d_yellow(false);
                            setQuestionAnswer_d_red(false);
                            setQuestionAnswer_d_green(true);
                        }
                        setTimeout(() => {
                            setIsAnswerFalse(true);
                            setIsAnswerTrue(false);
                        }, 1000);
                    }
                }
            }, 2000);
        }
    }, [isPressQuestionAnswer_c])

    useEffect(() => {
        if (isPressQuestionAnswer_d == true) {
            setQuestionAnswer_d_black(false);
            setQuestionAnswer_d_yellow(true);
            setQuestionAnswer_d_red(false);
            setQuestionAnswer_d_green(false);
            setTimeout(() => {
                if (isQuestion == 1) {
                    if (questionAnswer1_true == "d") {
                        setQuestionAnswer_d_black(false);
                        setQuestionAnswer_d_yellow(false);
                        setQuestionAnswer_d_red(false);
                        setQuestionAnswer_d_green(true);
                        setTimeout(() => {
                            setIsAnswerTrue(true);
                            setIsAnswerFalse(false);
                        }, 1000);
                    } else {
                        setQuestionAnswer_d_black(false);
                        setQuestionAnswer_d_yellow(false);
                        setQuestionAnswer_d_red(true);
                        setQuestionAnswer_d_green(false);
                        if (questionAnswer1_true == "a") {
                            setQuestionAnswer_a_black(false);
                            setQuestionAnswer_a_yellow(false);
                            setQuestionAnswer_a_red(false);
                            setQuestionAnswer_a_green(true);
                        } else if (questionAnswer1_true == "b") {
                            setQuestionAnswer_b_black(false);
                            setQuestionAnswer_b_yellow(false);
                            setQuestionAnswer_b_red(false);
                            setQuestionAnswer_b_green(true);
                        } else if (questionAnswer1_true == "c") {
                            setQuestionAnswer_c_black(false);
                            setQuestionAnswer_c_yellow(false);
                            setQuestionAnswer_c_red(false);
                            setQuestionAnswer_c_green(true);
                        }
                        setTimeout(() => {
                            setIsAnswerFalse(true);
                            setIsAnswerTrue(false);
                        }, 1000);
                    }
                } else if (isQuestion == 2) {
                    if (questionAnswer2_true == "d") {
                        setQuestionAnswer_d_black(false);
                        setQuestionAnswer_d_yellow(false);
                        setQuestionAnswer_d_red(false);
                        setQuestionAnswer_d_green(true);
                        setTimeout(() => {
                            setIsAnswerTrue(true);
                            setIsAnswerFalse(false);
                        }, 1000);
                    } else {
                        setQuestionAnswer_d_black(false);
                        setQuestionAnswer_d_yellow(false);
                        setQuestionAnswer_d_red(true);
                        setQuestionAnswer_d_green(false);
                        if (questionAnswer2_true == "a") {
                            setQuestionAnswer_a_black(false);
                            setQuestionAnswer_a_yellow(false);
                            setQuestionAnswer_a_red(false);
                            setQuestionAnswer_a_green(true);
                        } else if (questionAnswer2_true == "b") {
                            setQuestionAnswer_b_black(false);
                            setQuestionAnswer_b_yellow(false);
                            setQuestionAnswer_b_red(false);
                            setQuestionAnswer_b_green(true);
                        } else if (questionAnswer2_true == "c") {
                            setQuestionAnswer_c_black(false);
                            setQuestionAnswer_c_yellow(false);
                            setQuestionAnswer_c_red(false);
                            setQuestionAnswer_c_green(true);
                        }
                        setTimeout(() => {
                            setIsAnswerFalse(true);
                            setIsAnswerTrue(false);
                        }, 1000);
                    }
                } else if (isQuestion == 3) {
                    if (questionAnswer3_true == "d") {
                        setQuestionAnswer_d_black(false);
                        setQuestionAnswer_d_yellow(false);
                        setQuestionAnswer_d_red(false);
                        setQuestionAnswer_d_green(true);
                        setTimeout(() => {
                            setIsAnswerTrue(true);
                            setIsAnswerFalse(false);
                        }, 1000);
                    } else {
                        setQuestionAnswer_d_black(false);
                        setQuestionAnswer_d_yellow(false);
                        setQuestionAnswer_d_red(true);
                        setQuestionAnswer_d_green(false);
                        if (questionAnswer3_true == "a") {
                            setQuestionAnswer_a_black(false);
                            setQuestionAnswer_a_yellow(false);
                            setQuestionAnswer_a_red(false);
                            setQuestionAnswer_a_green(true);
                        } else if (questionAnswer3_true == "b") {
                            setQuestionAnswer_b_black(false);
                            setQuestionAnswer_b_yellow(false);
                            setQuestionAnswer_b_red(false);
                            setQuestionAnswer_b_green(true);
                        } else if (questionAnswer3_true == "c") {
                            setQuestionAnswer_c_black(false);
                            setQuestionAnswer_c_yellow(false);
                            setQuestionAnswer_c_red(false);
                            setQuestionAnswer_c_green(true);
                        }
                        setTimeout(() => {
                            setIsAnswerFalse(true);
                            setIsAnswerTrue(false);
                        }, 1000);
                    }
                }
            }, 2000);
        }
    }, [isPressQuestionAnswer_d])


    useEffect(() => {
        DefaultSettings();
        ControlAnswers();
        if (isQuestion == 1) {
            setTimer1(timer1 - 1);
        } else if (isQuestion == 2) {
            setTimer2(timer2 - 1);
        } else if (isQuestion == 3) {
            setTimer3(timer3 - 1);
        }
    }, [isQuestion])

    useEffect(() => {
        if (isAnswerFalse == true) {
            setTimeout(() => {
                HandleAlertWrongAnswer();
            }, 1000);
        }
    }, [isAnswerFalse])

    useEffect(() => {
        if (isAnswerTrue == true) {
            setTimeout(() => {
                if (isQuestion != 3) {
                    setIsQuestion(isQuestion + 1);
                } else {
                    setIsAnswerFalse(false);
                    setIsAnswerTrue(false);
                    setIsQuizFinish(true);
                }
            }, 1000);
        }
    }, [isAnswerTrue])





    function HandleAlert() {
        Alert.alert(txtAlertQuestion1, txtAlertText1, [
            {
                text: txtAlertNo,
            },
            {
                text: txtAlertYes,
                onPress: () => {
                    dispatch(SetQuiz(0));
                    navigation.navigate("Home");
                },
            },
        ]);
        return true;
    }

    function HandleAlertAgain() {
        Alert.alert(txtAlertText2, txtAlertQuestion2, [
            {
                text: txtAlertGoToMenü,
                onPress: () => {
                    dispatch(SetQuiz(0));
                    navigation.navigate("Home");
                },
            },
            {
                text: txtAlertAgain,
                onPress: () => {
                    setTimeout(() => {
                        setIsSplash(true);
                        setIsAgainQuiz(true);
                        setIsAnswerTrue(false);
                        setIsAnswerFalse(false);
                    }, 1000);
                },
            },
        ]);
        return true;
    }

    function HandleAlertWrongAnswer() {
        Alert.alert(txtAlertText3, txtAlertQuestion2, [
            {
                text: txtAlertGoToMenü,
                onPress: () => {
                    dispatch(SetQuiz(0));
                    navigation.navigate("Home");
                },
            },
            {
                text: txtAlertAgain,
                onPress: () => {
                    setTimeout(() => {
                        setIsSplash(true);
                        setIsAgainQuiz(true);
                        setIsAnswerTrue(false);
                        setIsAnswerFalse(false);
                    }, 1000);
                },
            },
        ]);
        return true;
    }

    function handleBackButton() {
        HandleAlert()
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

    const IconButtonsExit = () => {
        if (isQuizFinish == false) {
            return (
                <IconButton
                    onPress={() => {
                        HandleAlert();
                    }}
                    icon={<Icon as={Ionicons} name="exit-outline" />}
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
                            name: 'exit',
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
        } else {
            return (
                <Text>

                </Text>
            );
        }
    };

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

    const QuestionAsk1 = () => {
        if (MyStore.quiz == 1) {
            if (randomQuestionNumber1 == 1) {
                return (
                    <Text style={styles.answerText2}>
                        {quiz_culture_1.question1.question}
                    </Text>
                );
            } else if (randomQuestionNumber1 == 2) {
                return (
                    <Text style={styles.answerText2}>
                        {quiz_culture_1.question2.question}
                    </Text>
                );
            } else if (randomQuestionNumber1 == 3) {
                return (
                    <Text style={styles.answerText2}>
                        {quiz_culture_1.question3.question}
                    </Text>
                );
            }
        } else if (MyStore.quiz == 2) {
            if (randomQuestionNumber1 == 1) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <View style={{
                            width: '100%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_cars_1.question1.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_cars_1.question1.question}
                            </Text>
                        </View>
                    </View>
                );
            } else if (randomQuestionNumber1 == 2) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '100%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_cars_1.question2.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_cars_1.question2.question}
                            </Text>
                        </View>
                    </View>
                );
            } else if (randomQuestionNumber1 == 3) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '100%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_cars_1.question3.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_cars_1.question3.question}
                            </Text>
                        </View>
                    </View>
                );
            }
        } else if (MyStore.quiz == 3) {
            if (randomQuestionNumber1 == 1) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '75%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_flags_1.question1.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_flags_1.question1.question}
                            </Text>
                        </View>
                    </View>
                );
            } else if (randomQuestionNumber1 == 2) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '75%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_flags_1.question2.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_flags_1.question2.question}
                            </Text>
                        </View>
                    </View>
                );
            } else if (randomQuestionNumber1 == 3) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '75%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_flags_1.question3.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_flags_1.question3.question}
                            </Text>
                        </View>
                    </View>
                );
            }
        } else if (MyStore.quiz == 4) {
            if (randomQuestionNumber1 == 1) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '100%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_vegetable_1.question1.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_vegetable_1.question1.question}
                            </Text>
                        </View>
                    </View>
                );
            } else if (randomQuestionNumber1 == 2) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '100%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_vegetable_1.question2.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_vegetable_1.question2.question}
                            </Text>
                        </View>
                    </View>
                );
            } else if (randomQuestionNumber1 == 3) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '100%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_vegetable_1.question3.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_vegetable_1.question3.question}
                            </Text>
                        </View>
                    </View>
                );
            }
        }
    }

    const QuestionAsk2 = () => {
        if (MyStore.quiz == 1) {
            if (randomQuestionNumber2 == 1) {
                return (
                    <Text style={styles.answerText2}>
                        {quiz_culture_2.question1.question}
                    </Text>
                );
            } else if (randomQuestionNumber2 == 2) {
                return (
                    <Text style={styles.answerText2}>
                        {quiz_culture_2.question2.question}
                    </Text>
                );
            } else if (randomQuestionNumber2 == 3) {
                return (
                    <Text style={styles.answerText2}>
                        {quiz_culture_2.question3.question}
                    </Text>
                );
            }
        } else if (MyStore.quiz == 2) {
            if (randomQuestionNumber2 == 1) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <View style={{
                            width: '75%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_cars_2.question1.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_cars_2.question1.question}
                            </Text>
                        </View>
                    </View>
                );
            } else if (randomQuestionNumber2 == 2) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '75%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_cars_2.question2.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_cars_2.question2.question}
                            </Text>
                        </View>
                    </View>
                );
            } else if (randomQuestionNumber2 == 3) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '75%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_cars_2.question3.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_cars_2.question3.question}
                            </Text>
                        </View>
                    </View>
                );
            }
        } else if (MyStore.quiz == 3) {
            if (randomQuestionNumber2 == 1) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '75%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_flags_2.question1.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_flags_2.question1.question}
                            </Text>
                        </View>
                    </View>
                );
            } else if (randomQuestionNumber2 == 2) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '75%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_flags_2.question2.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_flags_2.question2.question}
                            </Text>
                        </View>
                    </View>
                );
            } else if (randomQuestionNumber2 == 3) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '75%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_flags_2.question3.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_flags_2.question3.question}
                            </Text>
                        </View>
                    </View>
                );
            }
        } else if (MyStore.quiz == 4) {
            if (randomQuestionNumber2 == 1) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '100%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_vegetable_2.question1.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_vegetable_2.question1.question}
                            </Text>
                        </View>
                    </View>
                );
            } else if (randomQuestionNumber2 == 2) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '100%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_vegetable_2.question2.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_vegetable_2.question2.question}
                            </Text>
                        </View>
                    </View>
                );
            } else if (randomQuestionNumber2 == 3) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '100%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_vegetable_2.question3.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_vegetable_2.question3.question}
                            </Text>
                        </View>
                    </View>
                );
            }
        }
    }

    const QuestionAsk3 = () => {
        if (MyStore.quiz == 1) {
            if (randomQuestionNumber3 == 1) {
                return (
                    <Text style={styles.answerText2}>
                        {quiz_culture_3.question1.question}
                    </Text>
                );
            } else if (randomQuestionNumber3 == 2) {
                return (
                    <Text style={styles.answerText2}>
                        {quiz_culture_3.question2.question}
                    </Text>
                );
            } else if (randomQuestionNumber3 == 3) {
                return (
                    <Text style={styles.answerText2}>
                        {quiz_culture_3.question3.question}
                    </Text>
                );
            }
        } else if (MyStore.quiz == 2) {
            if (randomQuestionNumber3 == 1) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <View style={{
                            width: '100%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_cars_3.question1.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_cars_3.question1.question}
                            </Text>
                        </View>
                    </View>
                );
            } else if (randomQuestionNumber3 == 2) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '100%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_cars_3.question2.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_cars_3.question2.question}
                            </Text>
                        </View>
                    </View>
                );
            } else if (randomQuestionNumber3 == 3) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '100%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_cars_3.question3.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_cars_3.question3.question}
                            </Text>
                        </View>
                    </View>
                );
            }
        } else if (MyStore.quiz == 3) {
            if (randomQuestionNumber3 == 1) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '75%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_flags_3.question1.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_flags_3.question1.question}
                            </Text>
                        </View>
                    </View>
                );
            } else if (randomQuestionNumber3 == 2) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '75%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_flags_3.question2.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_flags_3.question2.question}
                            </Text>
                        </View>
                    </View>
                );
            } else if (randomQuestionNumber3 == 3) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '75%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_flags_3.question3.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_flags_3.question3.question}
                            </Text>
                        </View>
                    </View>
                );
            }
        } else if (MyStore.quiz == 4) {
            if (randomQuestionNumber3 == 1) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '100%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_vegetable_3.question1.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_vegetable_3.question1.question}
                            </Text>
                        </View>
                    </View>
                );
            } else if (randomQuestionNumber3 == 2) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '100%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_vegetable_3.question2.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_vegetable_3.question2.question}
                            </Text>
                        </View>
                    </View>
                );
            } else if (randomQuestionNumber3 == 3) {
                return (
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '100%',
                            height: '75%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                                maxHeight: '100%',
                                borderRadius: 15,
                            }} source={quiz_vegetable_3.question3.url}>

                            </Image>
                        </View>

                        <View style={{
                            width: '100%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.answerText2}>
                                {quiz_vegetable_3.question3.question}
                            </Text>
                        </View>
                    </View>
                );
            }
        }
    }

    const MySituation = () => {
        if (isQuestion == 1) {
            return (
                <View style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <View style={{
                        width: '15%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Text style={{
                            width: '25%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'yellow',
                            borderRadius: 180
                        }}>
                            {"   "}
                        </Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 25,
                        }}>
                            -
                        </Text>
                    </View>
                    <View style={{
                        width: '15%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Text style={{
                            width: '25%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'yellow',
                            borderRadius: 180
                        }}>
                            {"   "}
                        </Text>
                    </View>
                    <View style={{
                        width: '15%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Text style={{
                            width: '25%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'yellow',
                            borderRadius: 180
                        }}>
                            {"   "}
                        </Text>
                    </View>
                </View>
            );
        } else if (isQuestion == 2) {
            return (
                <View style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <View style={{
                        width: '15%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Text style={{
                            width: '25%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'green',
                            borderRadius: 180
                        }}>
                            {"   "}
                        </Text>
                    </View>
                    <View style={{
                        width: '15%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Text style={{
                            width: '25%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'yellow',
                            borderRadius: 180
                        }}>
                            {"   "}
                        </Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 25,
                        }}>
                            -
                        </Text>
                    </View>
                    <View style={{
                        width: '15%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Text style={{
                            width: '25%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'yellow',
                            borderRadius: 180
                        }}>
                            {"   "}
                        </Text>
                    </View>
                </View>
            );
        } else if (isQuestion == 3 && isQuizFinish == false) {
            return (
                <View style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <View style={{
                        width: '15%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Text style={{
                            width: '25%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'green',
                            borderRadius: 180
                        }}>
                            {"   "}
                        </Text>
                    </View>
                    <View style={{
                        width: '15%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Text style={{
                            width: '25%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'green',
                            borderRadius: 180
                        }}>
                            {"   "}
                        </Text>
                    </View>
                    <View style={{
                        width: '15%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Text style={{
                            width: '25%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'yellow',
                            borderRadius: 180
                        }}>
                            {"   "}
                        </Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 25,
                        }}>
                            -
                        </Text>
                    </View>
                </View>
            );
        } else if (isQuizFinish == true && isQuestion == 3) {
            return (
                <View style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <View style={{
                        width: '15%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Text style={{
                            width: '25%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'green',
                            borderRadius: 180
                        }}>
                            {"   "}
                        </Text>
                    </View>
                    <View style={{
                        width: '15%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Text style={{
                            width: '25%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'green',
                            borderRadius: 180
                        }}>
                            {"   "}
                        </Text>
                    </View>
                    <View style={{
                        width: '15%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Text style={{
                            width: '25%',
                            height: '25%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'green',
                            borderRadius: 180
                        }}>
                            {"   "}
                        </Text>
                    </View>
                </View>
            );
        }
    }

    const MyProgress = () => {
        if (isQuestion == 1) {
            return (
                <Progress colorScheme={isProgress1 < 25 ? "error" : isProgress1 < 50 && isProgress1 > 25 ? "warning" : "primary"} value={isProgress1} style={{
                    height: '20%',
                    width: '100%',
                }} />
            );
        } else if (isQuestion == 2) {
            return (
                <Progress colorScheme={isProgress2 < 25 ? "error" : isProgress2 < 50 && isProgress2 > 25 ? "warning" : "primary"} value={isProgress2} style={{
                    height: '20%',
                    width: '100%',
                }} />
            );
        } else if (isQuestion == 3) {
            return (
                <Progress colorScheme={isProgress3 < 25 ? "error" : isProgress3 < 50 && isProgress3 > 25 ? "warning" : "primary"} value={isProgress3} style={{
                    height: '20%',
                    width: '100%',
                }} />
            );
        }
    }

    const MyTimerAnim = () => {
        return (
            <Lottie
                style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                source={require('../../Timer.json')}
                autoPlay
                loop={isQuizStart}
                speed={1}
            />
        );
    }

    const MyTimer = () => {
        if (isQuestion == 1) {
            return (
                <View style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <View style={{
                        width: '15%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {MyTimerAnim()}
                    </View>
                    <View style={{
                        width: '15%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={styles.answerTextTimer}>
                            {timer1}
                        </Text>
                    </View>
                </View>
            );
        } else if (isQuestion == 2) {
            return (
                <View style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <View style={{
                        width: '15%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {MyTimerAnim()}
                    </View>
                    <View style={{
                        width: '15%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={styles.answerTextTimer}>
                            {timer2}
                        </Text>
                    </View>
                </View>
            );
        } else if (isQuestion == 3) {
            return (
                <View style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <View style={{
                        width: '15%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {MyTimerAnim()}
                    </View>
                    <View style={{
                        width: '15%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={styles.answerTextTimer}>
                            {timer3}
                        </Text>
                    </View>
                </View>
            );
        }
    }

    const ControlQuestion = () => {
        if (isQuestion == 1) {
            return QuestionAsk1();
        } else if (isQuestion == 2) {
            return QuestionAsk2();
        } else if (isQuestion == 3) {
            return QuestionAsk3();
        }
    }

    const ControlAnswers = () => {
        if (MyStore.quiz == 1) {
            if (isQuestion == 1) {
                if (randomQuestionNumber1 == 1) {
                    setQuestionAnswer1_a(quiz_culture_1.question1.answer_a);
                    setQuestionAnswer1_b(quiz_culture_1.question1.answer_b);
                    setQuestionAnswer1_c(quiz_culture_1.question1.answer_c);
                    setQuestionAnswer1_d(quiz_culture_1.question1.answer_d);
                    setQuestionAnswer1_true(quiz_culture_1.question1.answer_true);
                } else if (randomQuestionNumber1 == 2) {
                    setQuestionAnswer1_a(quiz_culture_1.question2.answer_a);
                    setQuestionAnswer1_b(quiz_culture_1.question2.answer_b);
                    setQuestionAnswer1_c(quiz_culture_1.question2.answer_c);
                    setQuestionAnswer1_d(quiz_culture_1.question2.answer_d);
                    setQuestionAnswer1_true(quiz_culture_1.question2.answer_true);
                } else if (randomQuestionNumber1 == 3) {
                    setQuestionAnswer1_a(quiz_culture_1.question3.answer_a);
                    setQuestionAnswer1_b(quiz_culture_1.question3.answer_b);
                    setQuestionAnswer1_c(quiz_culture_1.question3.answer_c);
                    setQuestionAnswer1_d(quiz_culture_1.question3.answer_d);
                    setQuestionAnswer1_true(quiz_culture_1.question3.answer_true);
                }
            } else if (isQuestion == 2) {
                if (randomQuestionNumber2 == 1) {
                    setQuestionAnswer2_a(quiz_culture_2.question1.answer_a);
                    setQuestionAnswer2_b(quiz_culture_2.question1.answer_b);
                    setQuestionAnswer2_c(quiz_culture_2.question1.answer_c);
                    setQuestionAnswer2_d(quiz_culture_2.question1.answer_d);
                    setQuestionAnswer2_true(quiz_culture_2.question1.answer_true);
                } else if (randomQuestionNumber2 == 2) {
                    setQuestionAnswer2_a(quiz_culture_2.question2.answer_a);
                    setQuestionAnswer2_b(quiz_culture_2.question2.answer_b);
                    setQuestionAnswer2_c(quiz_culture_2.question2.answer_c);
                    setQuestionAnswer2_d(quiz_culture_2.question2.answer_d);
                    setQuestionAnswer2_true(quiz_culture_2.question2.answer_true);
                } else if (randomQuestionNumber2 == 3) {
                    setQuestionAnswer2_a(quiz_culture_2.question3.answer_a);
                    setQuestionAnswer2_b(quiz_culture_2.question3.answer_b);
                    setQuestionAnswer2_c(quiz_culture_2.question3.answer_c);
                    setQuestionAnswer2_d(quiz_culture_2.question3.answer_d);
                    setQuestionAnswer2_true(quiz_culture_2.question3.answer_true);
                }
            } else if (isQuestion == 3) {
                if (randomQuestionNumber3 == 1) {
                    setQuestionAnswer3_a(quiz_culture_3.question1.answer_a);
                    setQuestionAnswer3_b(quiz_culture_3.question1.answer_b);
                    setQuestionAnswer3_c(quiz_culture_3.question1.answer_c);
                    setQuestionAnswer3_d(quiz_culture_3.question1.answer_d);
                    setQuestionAnswer3_true(quiz_culture_3.question1.answer_true);
                } else if (randomQuestionNumber3 == 2) {
                    setQuestionAnswer3_a(quiz_culture_3.question2.answer_a);
                    setQuestionAnswer3_b(quiz_culture_3.question2.answer_b);
                    setQuestionAnswer3_c(quiz_culture_3.question2.answer_c);
                    setQuestionAnswer3_d(quiz_culture_3.question2.answer_d);
                    setQuestionAnswer3_true(quiz_culture_3.question2.answer_true);
                } else if (randomQuestionNumber3 == 3) {
                    setQuestionAnswer3_a(quiz_culture_3.question3.answer_a);
                    setQuestionAnswer3_b(quiz_culture_3.question3.answer_b);
                    setQuestionAnswer3_c(quiz_culture_3.question3.answer_c);
                    setQuestionAnswer3_d(quiz_culture_3.question3.answer_d);
                    setQuestionAnswer3_true(quiz_culture_3.question3.answer_true);
                }
            }
        } else if (MyStore.quiz == 2) {
            if (isQuestion == 1) {
                if (randomQuestionNumber1 == 1) {
                    setQuestionAnswer1_a(quiz_cars_1.question1.answer_a);
                    setQuestionAnswer1_b(quiz_cars_1.question1.answer_b);
                    setQuestionAnswer1_c(quiz_cars_1.question1.answer_c);
                    setQuestionAnswer1_d(quiz_cars_1.question1.answer_d);
                    setQuestionAnswer1_true(quiz_cars_1.question1.answer_true);
                } else if (randomQuestionNumber1 == 2) {
                    setQuestionAnswer1_a(quiz_cars_1.question2.answer_a);
                    setQuestionAnswer1_b(quiz_cars_1.question2.answer_b);
                    setQuestionAnswer1_c(quiz_cars_1.question2.answer_c);
                    setQuestionAnswer1_d(quiz_cars_1.question2.answer_d);
                    setQuestionAnswer1_true(quiz_cars_1.question2.answer_true);
                } else if (randomQuestionNumber1 == 3) {
                    setQuestionAnswer1_a(quiz_cars_1.question3.answer_a);
                    setQuestionAnswer1_b(quiz_cars_1.question3.answer_b);
                    setQuestionAnswer1_c(quiz_cars_1.question3.answer_c);
                    setQuestionAnswer1_d(quiz_cars_1.question3.answer_d);
                    setQuestionAnswer1_true(quiz_cars_1.question3.answer_true);
                }
            } else if (isQuestion == 2) {
                if (randomQuestionNumber2 == 1) {
                    setQuestionAnswer2_a(quiz_cars_2.question1.answer_a);
                    setQuestionAnswer2_b(quiz_cars_2.question1.answer_b);
                    setQuestionAnswer2_c(quiz_cars_2.question1.answer_c);
                    setQuestionAnswer2_d(quiz_cars_2.question1.answer_d);
                    setQuestionAnswer2_true(quiz_cars_2.question1.answer_true);
                } else if (randomQuestionNumber2 == 2) {
                    setQuestionAnswer2_a(quiz_cars_2.question2.answer_a);
                    setQuestionAnswer2_b(quiz_cars_2.question2.answer_b);
                    setQuestionAnswer2_c(quiz_cars_2.question2.answer_c);
                    setQuestionAnswer2_d(quiz_cars_2.question2.answer_d);
                    setQuestionAnswer2_true(quiz_cars_2.question2.answer_true);
                } else if (randomQuestionNumber2 == 3) {
                    setQuestionAnswer2_a(quiz_cars_2.question3.answer_a);
                    setQuestionAnswer2_b(quiz_cars_2.question3.answer_b);
                    setQuestionAnswer2_c(quiz_cars_2.question3.answer_c);
                    setQuestionAnswer2_d(quiz_cars_2.question3.answer_d);
                    setQuestionAnswer2_true(quiz_cars_2.question3.answer_true);
                }
            } else if (isQuestion == 3) {
                if (randomQuestionNumber3 == 1) {
                    setQuestionAnswer3_a(quiz_cars_3.question1.answer_a);
                    setQuestionAnswer3_b(quiz_cars_3.question1.answer_b);
                    setQuestionAnswer3_c(quiz_cars_3.question1.answer_c);
                    setQuestionAnswer3_d(quiz_cars_3.question1.answer_d);
                    setQuestionAnswer3_true(quiz_cars_3.question1.answer_true);
                } else if (randomQuestionNumber3 == 2) {
                    setQuestionAnswer3_a(quiz_cars_3.question2.answer_a);
                    setQuestionAnswer3_b(quiz_cars_3.question2.answer_b);
                    setQuestionAnswer3_c(quiz_cars_3.question2.answer_c);
                    setQuestionAnswer3_d(quiz_cars_3.question2.answer_d);
                    setQuestionAnswer3_true(quiz_cars_3.question2.answer_true);
                } else if (randomQuestionNumber3 == 3) {
                    setQuestionAnswer3_a(quiz_cars_3.question3.answer_a);
                    setQuestionAnswer3_b(quiz_cars_3.question3.answer_b);
                    setQuestionAnswer3_c(quiz_cars_3.question3.answer_c);
                    setQuestionAnswer3_d(quiz_cars_3.question3.answer_d);
                    setQuestionAnswer3_true(quiz_cars_3.question3.answer_true);
                }
            }
        } else if (MyStore.quiz == 3) {
            if (isQuestion == 1) {
                if (randomQuestionNumber1 == 1) {
                    setQuestionAnswer1_a(quiz_flags_1.question1.answer_a);
                    setQuestionAnswer1_b(quiz_flags_1.question1.answer_b);
                    setQuestionAnswer1_c(quiz_flags_1.question1.answer_c);
                    setQuestionAnswer1_d(quiz_flags_1.question1.answer_d);
                    setQuestionAnswer1_true(quiz_flags_1.question1.answer_true);
                } else if (randomQuestionNumber1 == 2) {
                    setQuestionAnswer1_a(quiz_flags_1.question2.answer_a);
                    setQuestionAnswer1_b(quiz_flags_1.question2.answer_b);
                    setQuestionAnswer1_c(quiz_flags_1.question2.answer_c);
                    setQuestionAnswer1_d(quiz_flags_1.question2.answer_d);
                    setQuestionAnswer1_true(quiz_flags_1.question2.answer_true);
                } else if (randomQuestionNumber1 == 3) {
                    setQuestionAnswer1_a(quiz_flags_1.question3.answer_a);
                    setQuestionAnswer1_b(quiz_flags_1.question3.answer_b);
                    setQuestionAnswer1_c(quiz_flags_1.question3.answer_c);
                    setQuestionAnswer1_d(quiz_flags_1.question3.answer_d);
                    setQuestionAnswer1_true(quiz_flags_1.question3.answer_true);
                }
            } else if (isQuestion == 2) {
                if (randomQuestionNumber2 == 1) {
                    setQuestionAnswer2_a(quiz_flags_2.question1.answer_a);
                    setQuestionAnswer2_b(quiz_flags_2.question1.answer_b);
                    setQuestionAnswer2_c(quiz_flags_2.question1.answer_c);
                    setQuestionAnswer2_d(quiz_flags_2.question1.answer_d);
                    setQuestionAnswer2_true(quiz_flags_2.question1.answer_true);
                } else if (randomQuestionNumber2 == 2) {
                    setQuestionAnswer2_a(quiz_flags_2.question2.answer_a);
                    setQuestionAnswer2_b(quiz_flags_2.question2.answer_b);
                    setQuestionAnswer2_c(quiz_flags_2.question2.answer_c);
                    setQuestionAnswer2_d(quiz_flags_2.question2.answer_d);
                    setQuestionAnswer2_true(quiz_flags_2.question2.answer_true);
                } else if (randomQuestionNumber2 == 3) {
                    setQuestionAnswer2_a(quiz_flags_2.question3.answer_a);
                    setQuestionAnswer2_b(quiz_flags_2.question3.answer_b);
                    setQuestionAnswer2_c(quiz_flags_2.question3.answer_c);
                    setQuestionAnswer2_d(quiz_flags_2.question3.answer_d);
                    setQuestionAnswer2_true(quiz_flags_2.question3.answer_true);
                }
            } else if (isQuestion == 3) {
                if (randomQuestionNumber3 == 1) {
                    setQuestionAnswer3_a(quiz_flags_3.question1.answer_a);
                    setQuestionAnswer3_b(quiz_flags_3.question1.answer_b);
                    setQuestionAnswer3_c(quiz_flags_3.question1.answer_c);
                    setQuestionAnswer3_d(quiz_flags_3.question1.answer_d);
                    setQuestionAnswer3_true(quiz_flags_3.question1.answer_true);
                } else if (randomQuestionNumber3 == 2) {
                    setQuestionAnswer3_a(quiz_flags_3.question2.answer_a);
                    setQuestionAnswer3_b(quiz_flags_3.question2.answer_b);
                    setQuestionAnswer3_c(quiz_flags_3.question2.answer_c);
                    setQuestionAnswer3_d(quiz_flags_3.question2.answer_d);
                    setQuestionAnswer3_true(quiz_flags_3.question2.answer_true);
                } else if (randomQuestionNumber3 == 3) {
                    setQuestionAnswer3_a(quiz_flags_3.question3.answer_a);
                    setQuestionAnswer3_b(quiz_flags_3.question3.answer_b);
                    setQuestionAnswer3_c(quiz_flags_3.question3.answer_c);
                    setQuestionAnswer3_d(quiz_flags_3.question3.answer_d);
                    setQuestionAnswer3_true(quiz_flags_3.question3.answer_true);
                }
            }
        } else if (MyStore.quiz == 4) {
            if (isQuestion == 1) {
                if (randomQuestionNumber1 == 1) {
                    setQuestionAnswer1_a(quiz_vegetable_1.question1.answer_a);
                    setQuestionAnswer1_b(quiz_vegetable_1.question1.answer_b);
                    setQuestionAnswer1_c(quiz_vegetable_1.question1.answer_c);
                    setQuestionAnswer1_d(quiz_vegetable_1.question1.answer_d);
                    setQuestionAnswer1_true(quiz_vegetable_1.question1.answer_true);
                } else if (randomQuestionNumber1 == 2) {
                    setQuestionAnswer1_a(quiz_vegetable_1.question2.answer_a);
                    setQuestionAnswer1_b(quiz_vegetable_1.question2.answer_b);
                    setQuestionAnswer1_c(quiz_vegetable_1.question2.answer_c);
                    setQuestionAnswer1_d(quiz_vegetable_1.question2.answer_d);
                    setQuestionAnswer1_true(quiz_vegetable_1.question2.answer_true);
                } else if (randomQuestionNumber1 == 3) {
                    setQuestionAnswer1_a(quiz_vegetable_1.question3.answer_a);
                    setQuestionAnswer1_b(quiz_vegetable_1.question3.answer_b);
                    setQuestionAnswer1_c(quiz_vegetable_1.question3.answer_c);
                    setQuestionAnswer1_d(quiz_vegetable_1.question3.answer_d);
                    setQuestionAnswer1_true(quiz_vegetable_1.question3.answer_true);
                }
            } else if (isQuestion == 2) {
                if (randomQuestionNumber2 == 1) {
                    setQuestionAnswer2_a(quiz_vegetable_2.question1.answer_a);
                    setQuestionAnswer2_b(quiz_vegetable_2.question1.answer_b);
                    setQuestionAnswer2_c(quiz_vegetable_2.question1.answer_c);
                    setQuestionAnswer2_d(quiz_vegetable_2.question1.answer_d);
                    setQuestionAnswer2_true(quiz_vegetable_2.question1.answer_true);
                } else if (randomQuestionNumber2 == 2) {
                    setQuestionAnswer2_a(quiz_vegetable_2.question2.answer_a);
                    setQuestionAnswer2_b(quiz_vegetable_2.question2.answer_b);
                    setQuestionAnswer2_c(quiz_vegetable_2.question2.answer_c);
                    setQuestionAnswer2_d(quiz_vegetable_2.question2.answer_d);
                    setQuestionAnswer2_true(quiz_vegetable_2.question2.answer_true);
                } else if (randomQuestionNumber2 == 3) {
                    setQuestionAnswer2_a(quiz_vegetable_2.question3.answer_a);
                    setQuestionAnswer2_b(quiz_vegetable_2.question3.answer_b);
                    setQuestionAnswer2_c(quiz_vegetable_2.question3.answer_c);
                    setQuestionAnswer2_d(quiz_vegetable_2.question3.answer_d);
                    setQuestionAnswer2_true(quiz_vegetable_2.question3.answer_true);
                }
            } else if (isQuestion == 3) {
                if (randomQuestionNumber3 == 1) {
                    setQuestionAnswer3_a(quiz_vegetable_3.question1.answer_a);
                    setQuestionAnswer3_b(quiz_vegetable_3.question1.answer_b);
                    setQuestionAnswer3_c(quiz_vegetable_3.question1.answer_c);
                    setQuestionAnswer3_d(quiz_vegetable_3.question1.answer_d);
                    setQuestionAnswer3_true(quiz_vegetable_3.question1.answer_true);
                } else if (randomQuestionNumber3 == 2) {
                    setQuestionAnswer3_a(quiz_vegetable_3.question2.answer_a);
                    setQuestionAnswer3_b(quiz_vegetable_3.question2.answer_b);
                    setQuestionAnswer3_c(quiz_vegetable_3.question2.answer_c);
                    setQuestionAnswer3_d(quiz_vegetable_3.question2.answer_d);
                    setQuestionAnswer3_true(quiz_vegetable_3.question2.answer_true);
                } else if (randomQuestionNumber3 == 3) {
                    setQuestionAnswer3_a(quiz_vegetable_3.question3.answer_a);
                    setQuestionAnswer3_b(quiz_vegetable_3.question3.answer_b);
                    setQuestionAnswer3_c(quiz_vegetable_3.question3.answer_c);
                    setQuestionAnswer3_d(quiz_vegetable_3.question3.answer_d);
                    setQuestionAnswer3_true(quiz_vegetable_3.question3.answer_true);
                }
            }
        }
    }

    const ReturnAnswerA = () => {
        if (isQuestion == 1) {
            return questionAnswer1_a;
        } else if (isQuestion == 2) {
            return questionAnswer2_a;
        } else if (isQuestion == 3) {
            return questionAnswer3_a;
        }
    }

    const ReturnAnswerB = () => {
        if (isQuestion == 1) {
            return questionAnswer1_b;
        } else if (isQuestion == 2) {
            return questionAnswer2_b;
        } else if (isQuestion == 3) {
            return questionAnswer3_b;
        }
    }

    const ReturnAnswerC = () => {
        if (isQuestion == 1) {
            return questionAnswer1_c;
        } else if (isQuestion == 2) {
            return questionAnswer2_c;
        } else if (isQuestion == 3) {
            return questionAnswer3_c;
        }
    }

    const ReturnAnswerD = () => {
        if (isQuestion == 1) {
            return questionAnswer1_d;
        } else if (isQuestion == 2) {
            return questionAnswer2_d;
        } else if (isQuestion == 3) {
            return questionAnswer3_d;
        }
    }

    const ControlAnswer_A = () => {
        if (questionAnswer_a_black == true && questionAnswer_a_yellow == false && questionAnswer_a_red == false && questionAnswer_a_green == false) {
            return (
                <TouchableOpacity style={styles.oneAnswerA_black} activeOpacity={isAnswer == false ? 0.2 : 1.0} onPress={() => {
                    if (isPressQuestionAnswer_a == false && isPressQuestionAnswer_b == false && isPressQuestionAnswer_c == false && isPressQuestionAnswer_d == false) {
                        setIsQuizStart(false);
                        setIsAnswer(true);
                        setIsPressQuestionAnswer_a(true);
                    }
                }}>
                    <Text style={styles.answerA_black}>
                        {"A-) " + ReturnAnswerA()}
                    </Text>
                </TouchableOpacity>
            );
        } else if (questionAnswer_a_black == false && questionAnswer_a_yellow == true && questionAnswer_a_red == false && questionAnswer_a_green == false) {
            return (
                <TouchableOpacity style={styles.oneAnswerA_yellow} activeOpacity={isAnswer == false ? 0.2 : 1.0}>
                    <Text style={styles.answerA_yellow}>
                        {"A-) " + ReturnAnswerA()}
                    </Text>
                </TouchableOpacity>
            );
        } else if (questionAnswer_a_black == false && questionAnswer_a_yellow == false && questionAnswer_a_red == true && questionAnswer_a_green == false) {
            return (
                <TouchableOpacity style={styles.oneAnswerA_red} activeOpacity={isAnswer == false ? 0.2 : 1.0}>
                    <Text style={styles.answerA_red}>
                        {"A-) " + ReturnAnswerA()}
                    </Text>
                </TouchableOpacity>
            );
        } else if (questionAnswer_a_black == false && questionAnswer_a_yellow == false && questionAnswer_a_red == false && questionAnswer_a_green == true) {
            return (
                <TouchableOpacity style={styles.oneAnswerA_green} activeOpacity={isAnswer == false ? 0.2 : 1.0}>
                    <Text style={styles.answerA_green}>
                        {"A-) " + ReturnAnswerA()}
                    </Text>
                </TouchableOpacity>
            );
        }
    }

    const ControlAnswer_B = () => {
        if (questionAnswer_b_black == true && questionAnswer_b_yellow == false && questionAnswer_b_red == false && questionAnswer_b_green == false) {
            return (
                <TouchableOpacity style={styles.oneAnswerB_black} activeOpacity={isAnswer == false ? 0.2 : 1.0} onPress={() => {
                    if (isPressQuestionAnswer_a == false && isPressQuestionAnswer_b == false && isPressQuestionAnswer_c == false && isPressQuestionAnswer_d == false) {
                        setIsQuizStart(false);
                        setIsAnswer(true);
                        setIsPressQuestionAnswer_b(true);
                    }
                }}>
                    <Text style={styles.answerB_black}>
                        {"B-) " + ReturnAnswerB()}
                    </Text>
                </TouchableOpacity>
            );
        } else if (questionAnswer_b_black == false && questionAnswer_b_yellow == true && questionAnswer_b_red == false && questionAnswer_b_green == false) {
            return (
                <TouchableOpacity style={styles.oneAnswerB_yellow} activeOpacity={isAnswer == false ? 0.2 : 1.0}>
                    <Text style={styles.answerB_yellow}>
                        {"B-) " + ReturnAnswerB()}
                    </Text>
                </TouchableOpacity>
            );
        } else if (questionAnswer_b_black == false && questionAnswer_b_yellow == false && questionAnswer_b_red == true && questionAnswer_b_green == false) {
            return (
                <TouchableOpacity style={styles.oneAnswerB_red} activeOpacity={isAnswer == false ? 0.2 : 1.0}>
                    <Text style={styles.answerB_red}>
                        {"B-) " + ReturnAnswerB()}
                    </Text>
                </TouchableOpacity>
            );
        } else if (questionAnswer_b_black == false && questionAnswer_b_yellow == false && questionAnswer_b_red == false && questionAnswer_b_green == true) {
            return (
                <TouchableOpacity style={styles.oneAnswerB_green} activeOpacity={isAnswer == false ? 0.2 : 1.0}>
                    <Text style={styles.answerB_green}>
                        {"B-) " + ReturnAnswerB()}
                    </Text>
                </TouchableOpacity>
            );
        }
    }

    const ControlAnswer_C = () => {
        if (questionAnswer_c_black == true && questionAnswer_c_yellow == false && questionAnswer_c_red == false && questionAnswer_c_green == false) {
            return (
                <TouchableOpacity style={styles.oneAnswerC_black} activeOpacity={isAnswer == false ? 0.2 : 1.0} onPress={() => {
                    if (isPressQuestionAnswer_a == false && isPressQuestionAnswer_b == false && isPressQuestionAnswer_c == false && isPressQuestionAnswer_d == false) {
                        setIsQuizStart(false);
                        setIsAnswer(true);
                        setIsPressQuestionAnswer_c(true);
                    }
                }}>
                    <Text style={styles.answerC_black}>
                        {"C-) " + ReturnAnswerC()}
                    </Text>
                </TouchableOpacity>
            );
        } else if (questionAnswer_c_black == false && questionAnswer_c_yellow == true && questionAnswer_c_red == false && questionAnswer_c_green == false) {
            return (
                <TouchableOpacity style={styles.oneAnswerC_yellow} activeOpacity={isAnswer == false ? 0.2 : 1.0}>
                    <Text style={styles.answerC_yellow}>
                        {"C-) " + ReturnAnswerC()}
                    </Text>
                </TouchableOpacity>
            );
        } else if (questionAnswer_c_black == false && questionAnswer_c_yellow == false && questionAnswer_c_red == true && questionAnswer_c_green == false) {
            return (
                <TouchableOpacity style={styles.oneAnswerC_red} activeOpacity={isAnswer == false ? 0.2 : 1.0}>
                    <Text style={styles.answerC_red}>
                        {"C-) " + ReturnAnswerC()}
                    </Text>
                </TouchableOpacity>
            );
        } else if (questionAnswer_c_black == false && questionAnswer_c_yellow == false && questionAnswer_c_red == false && questionAnswer_c_green == true) {
            return (
                <TouchableOpacity style={styles.oneAnswerC_green} activeOpacity={isAnswer == false ? 0.2 : 1.0}>
                    <Text style={styles.answerC_green}>
                        {"C-) " + ReturnAnswerC()}
                    </Text>
                </TouchableOpacity>
            );
        }
    }

    const ControlAnswer_D = () => {
        if (questionAnswer_d_black == true && questionAnswer_d_yellow == false && questionAnswer_d_red == false && questionAnswer_d_green == false) {
            return (
                <TouchableOpacity style={styles.oneAnswerD_black} activeOpacity={isAnswer == false ? 0.2 : 1.0} onPress={() => {
                    if (isPressQuestionAnswer_a == false && isPressQuestionAnswer_b == false && isPressQuestionAnswer_c == false && isPressQuestionAnswer_d == false) {
                        setIsQuizStart(false);
                        setIsAnswer(true);
                        setIsPressQuestionAnswer_d(true);
                    }
                }}>
                    <Text style={styles.answerD_black}>
                        {"D-) " + ReturnAnswerD()}
                    </Text>
                </TouchableOpacity>
            );
        } else if (questionAnswer_d_black == false && questionAnswer_d_yellow == true && questionAnswer_d_red == false && questionAnswer_d_green == false) {
            return (
                <TouchableOpacity style={styles.oneAnswerD_yellow} activeOpacity={isAnswer == false ? 0.2 : 1.0}>
                    <Text style={styles.answerD_yellow}>
                        {"D-) " + ReturnAnswerD()}
                    </Text>
                </TouchableOpacity>
            );
        } else if (questionAnswer_d_black == false && questionAnswer_d_yellow == false && questionAnswer_d_red == true && questionAnswer_d_green == false) {
            return (
                <TouchableOpacity style={styles.oneAnswerD_red} activeOpacity={isAnswer == false ? 0.2 : 1.0}>
                    <Text style={styles.answerD_red}>
                        {"D-) " + ReturnAnswerD()}
                    </Text>
                </TouchableOpacity>
            );
        } else if (questionAnswer_d_black == false && questionAnswer_d_yellow == false && questionAnswer_d_red == false && questionAnswer_d_green == true) {
            return (
                <TouchableOpacity style={styles.oneAnswerD_green} activeOpacity={isAnswer == false ? 0.2 : 1.0}>
                    <Text style={styles.answerD_green}>
                        {"D-) " + ReturnAnswerD()}
                    </Text>
                </TouchableOpacity>
            );
        }
    }

    const DefaultSettings = () => {
        setIsQuizFinish(false);

        setIsAnswer(false);

        setIsQuizStart(true);
        setIsAgainQuiz(false);
        setTimer1(25);
        setTimer2(25);
        setTimer3(25);
        setIsProgress1(100);
        setIsProgress2(100);
        setIsProgress3(100);

        setIsPressQuestionAnswer_a(false);
        setIsPressQuestionAnswer_b(false);
        setIsPressQuestionAnswer_c(false);
        setIsPressQuestionAnswer_d(false);

        setQuestionAnswer_a_black(true);
        setQuestionAnswer_b_black(true);
        setQuestionAnswer_c_black(true);
        setQuestionAnswer_d_black(true);

        setQuestionAnswer_a_yellow(false);
        setQuestionAnswer_b_yellow(false);
        setQuestionAnswer_c_yellow(false);
        setQuestionAnswer_d_yellow(false);

        setQuestionAnswer_a_red(false);
        setQuestionAnswer_b_red(false);
        setQuestionAnswer_c_red(false);
        setQuestionAnswer_d_red(false);

        setQuestionAnswer_a_green(false);
        setQuestionAnswer_b_green(false);
        setQuestionAnswer_c_green(false);
        setQuestionAnswer_d_green(false);

        setIsAnswerTrue(false);
        setIsAnswerFalse(false);
    }

    const ControlFinishText = () => {
        if (MyStore.quiz == 1) {
            return (
                <Text style={styles.finishText}>
                    {txtQuestionFinishText1}
                </Text>
            );
        } else if (MyStore.quiz == 2) {
            return (
                <Text style={styles.finishText}>
                    {txtQuestionFinishText2}
                </Text>
            );
        } else if (MyStore.quiz == 3) {
            return (
                <Text style={styles.finishText}>
                    {txtQuestionFinishText3}
                </Text>
            );
        } else if (MyStore.quiz == 4) {
            return (
                <Text style={styles.finishText}>
                    {txtQuestionFinishText4}
                </Text>
            );
        }
    }

    const SplashOrQuiz = () => {
        if (isSplash == true && isQuizFinish == false) {
            return (
                <View style={styles.quizContainer}>
                    <View style={styles.quizCard}>
                        <Lottie
                            source={require('../../Quiz2.json')}
                            autoPlay
                            loop={false}
                            speed={1}
                            onAnimationFinish={() => {
                                setRandomQuestionNumber1(randomNumberInRange(1, 3));
                                setRandomQuestionNumber2(randomNumberInRange(1, 3));
                                setRandomQuestionNumber3(randomNumberInRange(1, 3));
                                setIsQuestion(1),
                                    DefaultSettings();
                                setIsSplash(false);
                            }}
                        />
                    </View>
                </View>
            );
        } else if (isQuizFinish == false && isAnswerTrue == false && isAnswerFalse == false) {
            return (
                <View style={styles.quizContainer}>
                    <View style={styles.quizCard}>
                        <View style={styles.mySituation}>
                            {MySituation()}
                        </View>
                        <View style={styles.myTimer}>
                            {MyTimer()}
                        </View>
                        <View style={styles.myProgress}>
                            {MyProgress()}
                        </View>
                        <View style={styles.askContainer}>
                            <View style={styles.myAsk}>
                                {ControlQuestion()}
                            </View>
                            <View style={styles.myAnswers}>
                                <View style={styles.myAnswersRow1}>
                                    {ControlAnswer_A()}
                                    {ControlAnswer_B()}
                                </View>
                                <View style={styles.myAnswersRow2}>
                                    {ControlAnswer_C()}
                                    {ControlAnswer_D()}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            );
        } else if (isQuizFinish == false && isAnswerFalse == true) {
            return (
                <View style={styles.quizContainer}>
                    <View style={{
                        width: '90%',
                        height: '90%',
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#BDC3C7'
                    }}>
                        <Text style={styles.textFalse}>
                            {txtFalse}
                        </Text>
                    </View>
                </View>
            );
        } else if (isQuizFinish == false && isAnswerTrue == true) {
            return (
                <View style={styles.quizContainer}>
                    <View style={{
                        width: '90%',
                        height: '90%',
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#BDC3C7'
                    }}>
                        <Text style={styles.textTrue}>
                            {txtTrue}
                        </Text>
                    </View>
                </View>
            );
        } else if (isQuizFinish == true) {
            return (
                <View style={styles.quizContainer}>
                    <View style={styles.quizCard}>
                        <View style={styles.mySituation}>
                            {MySituation()}
                        </View>
                        <View style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            paddingLeft: 5,
                            paddingRight: 5,
                        }}>
                            <View style={styles.myFinishText}>
                                {ControlFinishText()}
                            </View>
                            <View style={styles.myButtons}>
                                <Button style={styles.myButton} leftIcon={<Icon as={FontAwesome} name="home" />} onPress={() => {
                                    dispatch(SetQuiz(0));
                                    navigation.navigate("Home");
                                }}>
                                    {txtAlertGoToMenü}
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>
            );
        }
    }

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                </View>
                <View style={styles.headerMiddle}>
                    <Text style={styles.text1}>
                        {ControlHeader()}
                    </Text>
                </View>
                <View style={styles.headerRight}>
                    {IconButtonsExit()}
                </View>
            </View>
            <ImageBackground style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
                source={require('../photos/home.png')}>
                {SplashOrQuiz()}
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
    quizContainer: {
        width: '100%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    quizCard: {
        width: '90%',
        height: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#BDC3C7',
        borderRadius: 25,
        paddingRight: 15,
        paddingLeft: 15,
    },
    mySituation: {
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderRadius: 15,
    },
    myTimer: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderRadius: 15,
    },
    myProgress: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    askContainer: {
        width: '100%',
        height: '65%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    myAsk: {
        width: '100%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 15,
    },
    myAnswers: {
        width: '100%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    myAnswersRow1: {
        width: '100%',
        height: '50%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    myAnswersRow2: {
        width: '100%',
        height: '50%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
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
    myFinishText: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    myButtons: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    myButton: {
        margin: 10,
        width: '50%'
    },
    answerText1: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        margin: 5
    },
    answerText2: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black',
        margin: 5
    },
    answerTextTimer: {
        fontSize: 22,
        color: 'black',
        margin: 5
    },
    finishText: {
        fontWeight: 'bold',
        fontSize: 21,
        color: 'black',
        margin: 5
    },
    oneAnswerA_black: {
        width: '45%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: 'black',
        borderBottomWidth: 1,
        borderRadius: 15,
    },
    oneAnswerA_yellow: {
        width: '45%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: 'yellow',
        borderBottomWidth: 1,
        borderRadius: 15,
    },
    oneAnswerA_red: {
        width: '45%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: 'red',
        borderBottomWidth: 1,
        borderRadius: 15,
    },
    oneAnswerA_green: {
        width: '45%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: 'green',
        borderBottomWidth: 1,
        borderRadius: 15,
    },
    oneAnswerB_black: {
        width: '45%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: 'black',
        borderBottomWidth: 1,
        borderRadius: 15,
    },
    oneAnswerB_yellow: {
        width: '45%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: 'yellow',
        borderBottomWidth: 1,
        borderRadius: 15,
    },
    oneAnswerB_red: {
        width: '45%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: 'red',
        borderBottomWidth: 1,
        borderRadius: 15,
    },
    oneAnswerB_green: {
        width: '45%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: 'green',
        borderBottomWidth: 1,
        borderRadius: 15,
    },
    oneAnswerC_black: {
        width: '45%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: 'black',
        borderBottomWidth: 1,
        borderRadius: 15,
    },
    oneAnswerC_yellow: {
        width: '45%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: 'yellow',
        borderBottomWidth: 1,
        borderRadius: 15,
    },
    oneAnswerC_red: {
        width: '45%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: 'red',
        borderBottomWidth: 1,
        borderRadius: 15,
    },
    oneAnswerC_green: {
        width: '45%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: 'green',
        borderBottomWidth: 1,
        borderRadius: 15,
    },
    oneAnswerD_black: {
        width: '45%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: 'black',
        borderBottomWidth: 1,
        borderRadius: 15,
    },
    oneAnswerD_yellow: {
        width: '45%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: 'yellow',
        borderBottomWidth: 1,
        borderRadius: 15,
    },
    oneAnswerD_red: {
        width: '45%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: 'red',
        borderBottomWidth: 1,
        borderRadius: 15,
    },
    oneAnswerD_green: {
        width: '45%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: 'green',
        borderBottomWidth: 1,
        borderRadius: 15,
    },
    answerA_black: {
        fontSize: 12,
        color: 'black',
        margin: 5
    },
    answerA_yellow: {
        fontSize: 12,
        color: 'yellow',
        margin: 5
    },
    answerA_red: {
        fontSize: 12,
        color: 'red',
        margin: 5
    },
    answerA_green: {
        fontSize: 12,
        color: 'green',
        margin: 5
    },
    answerB_black: {
        fontSize: 12,
        color: 'black',
        margin: 5
    },
    answerB_yellow: {
        fontSize: 12,
        color: 'yellow',
        margin: 5
    },
    answerB_red: {
        fontSize: 12,
        color: 'red',
        margin: 5
    },
    answerB_green: {
        fontSize: 12,
        color: 'green',
        margin: 5
    },
    answerC_black: {
        fontSize: 12,
        color: 'black',
        margin: 5
    },
    answerC_yellow: {
        fontSize: 12,
        color: 'yellow',
        margin: 5
    },
    answerC_red: {
        fontSize: 12,
        color: 'red',
        margin: 5
    },
    answerC_green: {
        fontSize: 12,
        color: 'green',
        margin: 5
    },
    answerD_black: {
        fontSize: 12,
        color: 'black',
        margin: 5
    },
    answerD_yellow: {
        fontSize: 12,
        color: 'yellow',
        margin: 5
    },
    answerD_red: {
        fontSize: 12,
        color: 'red',
        margin: 5
    },
    answerD_green: {
        fontSize: 12,
        color: 'green',
        margin: 5
    },
    textFalse: {
        fontWeight: 'bold',
        fontSize: 21,
        color: 'red',
        margin: 5
    },
    textTrue: {
        fontWeight: 'bold',
        fontSize: 21,
        color: 'green',
        margin: 5
    },
})

export default Quiz;