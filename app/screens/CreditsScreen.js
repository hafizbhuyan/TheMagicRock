import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function CreditScreen(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                The images on our app were provided by these talented individuals.
                Check out their work!
            </Text>
            <Text style={styles.credits}>
                The stone on our Logo art is provided by
                Pille Kirsi from Pexels
            </Text>
            <Text style={styles.credits}>
                Our Movie background image on the main menu was provided by
                Augusto Oazi on Unsplash.
            </Text>
            <Text style={styles.credits}>
                Our TV Show background image on the main was was provided by
                Ian Panelo from Pexels.
            </Text>
            <Text style={styles.credits}>
                Our Restaurants background image on the main menu was provided by
                Andrew Seaman on Unsplash.
            </Text>
            <Text style={styles.credits}>
                Our Music background image on the main menu was provided by
                Adrian Korte on Unsplash
            </Text>
            <Text style={styles.credits}>
                Our Vacation background image on the main menu was provided by
                Mohamed Ajufaan on Unsplash
            </Text>
            {/* <Text style={styles.credits}>
                Our Video Game background on the main menu was provided by
                Jaroslav Nymburský from Pexels
            </Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5
    },
    title: {
        textAlign: 'center',
        fontSize: 20
    },
    credits: {
        fontSize: 15
    }
})

export default CreditScreen;