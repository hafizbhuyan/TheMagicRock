import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Text, Button, Image, ImageBackground, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key: 1,
        title: 'Movies',
        text: 'Find the perfect movie for a night out',
        image: require('../assets/MovieWelcomeBg.jpg')
    },
    {
        key: 2,
        title: 'TV Shows',
        text: 'Find the next show to binge',
        image: require('../assets/TVShowWelcomeBg.jpg')
    },
    {
        key: 3,
        title: 'Restaurants',
        text: 'Find where to eat',
        image: require('../assets/RestaurantWelcomeBg.jpg')
    },
    {
        key: 4,
        title: 'Music',
        text: 'Find your next music obsession',
        image: require('../assets/MusicWelcomeBg.jpg')
    }
]

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class WelcomeScreen extends Component {
    state = {
        showRealApp: false
    }

    _renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <Image source={item.image} style={styles.bgImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        );
    }

    _onDone = (navigation) => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        navigation.navigate('Home');
    }

    render() {
        if (this.state.showRealApp) {
            return <App />;
        } else {
            return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone} />;
        }
    }
}

const styles = StyleSheet.create({
    bgImage: {
        width: windowWidth,
        height: windowHeight - 50
    },
    title: {
        color: '#F9F7F3',
        fontSize: 30,
        textAlign: 'center'
    },
    text: {
        color: '#F9F7F3',
        fontSize: 20,
        textAlign: 'center'
    },
    textContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default WelcomeScreen;