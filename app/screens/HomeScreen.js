import React, { Component, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
    Image,
    Platform
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AdMobBanner, AdMobInterstitial } from 'expo-ads-admob';

{/**
    Android banner: ca-app-pub-6787584587323314/1786020503
    Android interstitial: ca-app-pub-6787584587323314/5972677526

    iOS banner: ca-app-pub-6787584587323314/1538608494
    iOS interstitial: ca-app-pub-6787584587323314/3161863111
*/}

// the below is for production, comment for testing
// const bannerAdId = Platform.OS === 'android' ? "ca-app-pub-6787584587323314/1786020503" : "ca-app-pub-6787584587323314/1538608494";

// the below is for development, remove or comment out when ready to publish
const bannerAdId = Platform.OS === 'android' ? "ca-app-pub-3940256099942544/6300978111" : "ca-app-pub-3940256099942544/2934735716";

// use this for production, comment for testing
// const interstitialAdId = Platform.OS === 'android' ? "ca-app-pub-6787584587323314/5972677526" : "ca-app-pub-6787584587323314/3161863111";

// the below is for development, remove it when ready to publish
const interstitialAdId = Platform.OS === 'android' ? "ca-app-pub-3940256099942544/1033173712" : "ca-app-pub-3940256099942544/4411468910";

function waitMilliseconds(milliseconds) {
    var counter = 0
        , start = new Date().getTime()
        , end = 0;
    while (counter < milliseconds) {
        end = new Date().getTime();
        counter = end - start;
    }
}

async function runAd() {
    await AdMobInterstitial.setAdUnitID(interstitialAdId);
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
}

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', color: '#F9F7F3', fontSize: 25, margin: 10 }}>
                What are you looking for?
            </Text>

            <ScrollView style={styles.menu}>
                <Pressable
                    onPressIn={runAd}
                    onPress={() => {
                        waitMilliseconds(2000)
                        navigation.navigate('Movies')
                    }}>
                    <ImageBackground
                        source={require('../assets/MovieBg.jpg')}
                        style={styles.menuBg}>
                        <ImageBackground style={styles.menuTextBg}>
                            <Text style={styles.menuLabel}>
                                Movies
                            </Text>
                        </ImageBackground>
                    </ImageBackground>
                </Pressable>

                <Pressable
                    onPressIn={runAd}
                    onPress={() => {
                        waitMilliseconds(2000)
                        navigation.navigate('TV Shows')
                    }}>
                    <ImageBackground
                        source={require('../assets/TVShowBg.jpg')}
                        style={styles.menuBg}>
                        <ImageBackground style={styles.menuTextBg}>
                            <Text style={styles.menuLabel}>
                                TV Shows
                            </Text>
                        </ImageBackground>
                    </ImageBackground>
                </Pressable>

                <Pressable
                    onPressIn={runAd}
                    onPress={() => {
                        waitMilliseconds(2000)
                        navigation.navigate('Restaurants')
                    }}>
                    <ImageBackground
                        source={require('../assets/RestaurantBg.jpg')}
                        style={styles.menuBg}>
                        <ImageBackground style={styles.menuTextBg}>
                            <Text style={styles.menuLabel}>
                                Food
                            </Text>
                        </ImageBackground>
                    </ImageBackground>
                </Pressable>

                <Pressable
                    disabled={true}>
                    <ImageBackground
                        source={require('../assets/MusicBg.jpg')}
                        style={styles.menuBg}>
                        <ImageBackground style={styles.menuTextBg}>
                            <Text style={styles.menuLabel}>
                                Music {'\n'} (Coming Soon)
                            </Text>
                        </ImageBackground>
                    </ImageBackground>
                </Pressable>

                <Pressable
                    disabled={true}>
                    <ImageBackground
                        source={require('../assets/VacationBg.jpg')}
                        style={styles.menuBg}>
                        <ImageBackground style={styles.menuTextBg}>
                            <Text style={styles.menuLabel}>
                                Vacation {'\n'} (Coming post-pandemic)
                            </Text>
                        </ImageBackground>
                    </ImageBackground>
                </Pressable>

                {/* <Pressable>
                    <ImageBackground
                        source={require('../assets/VideoGameBg.jpg')}
                        style={ styles.menuBg}>
                        <ImageBackground style={styles.menuTextBg}>
                            <Text style={styles.menuLabel}>
                                Video Games {'\n'} (Coming Soon)
                            </Text>
                        </ImageBackground>
                    </ImageBackground>
                </Pressable> */}

            </ScrollView>
            <View style={styles.adBanner}>
                <AdMobBanner
                    bannerSize={'banner'}
                    adUnitID={bannerAdId}
                    servePersonalizedAds={true} />
            </View>
        </View >
    );

}

const styles = StyleSheet.create({
    adBanner: {
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#141414'
    },
    menuBg: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuLabel: {
        color: '#F9F7F3',
        textAlign: 'center',
        fontSize: 20
    },
    menuTextBg: {
        backgroundColor: '#628395',
        width: '40%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.85,
        borderRadius: 15
    }
})

export default HomeScreen;