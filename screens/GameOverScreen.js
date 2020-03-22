import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView, SafeAreaView} from 'react-native';

import BodyText from '../components/BodyText';
import DefaultStyles from '../constants/default-styles';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';


const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text style={DefaultStyles.title}>The Game is Over!</Text>
                <View style={styles.imageContainer}>
                    <Image 
                        fadeDuration={1000}
                        style={styles.image} 
                        resizeMode="cover"
                        source={require('../assets/success.png')} 
                        //source={{uri: 'https://i.ytimg.com/vi/z0pPhTLvzu4/hqdefault.jpg'}}
                    />
                </View>
                <View style={styles.resultContainer}>
                    <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{ props.roundsNumber }</Text> rounds to guess the number <Text style={styles.highlight}>{ props.userNumber }.</Text>
                    </BodyText>
                </View>
                <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    imageContainer: {
        borderRadius: Dimensions.get('window').width * 0.6 / 2,
        borderWidth: 1,
        borderColor: 'black',
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').width * 0.6,
        overflow:'hidden',
        marginVertical: Dimensions.get('window').height / 30,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultContainer: {
        marginHorizontal: 10,
        marginVertical: Dimensions.get('window').height / 60,
    }
});

export default GameOverScreen;

//to prevent wraping example
{/*<Text numberOfLines={1} ellipsizeMode="tail">
  This text will never wrap into a new line, instead it will be cut off like this if it is too lon...
</Text>*/}