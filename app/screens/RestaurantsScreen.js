import React, { Component } from 'react';
import {
    View,
    Text,
    Linking,
    Pressable,
    StyleSheet,
    Image
} from 'react-native';

class RestaurantsScreen extends Component {
    state = {
        restaurantData: [],
        isLoading: true,
        name: '',
        menu: '',
        link: '',
        logo: '',
        buttonText: 'Give me food!',
        rand: Math.floor(Math.random() * 40),
        buttonVisibility: false
    }

    componentDidMount() {
        fetch('https://www.drivense.com/the_magic_rock_files/restaurant_data.json')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ restaurantData: json.restaurants });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            })
    }

    PickRestaurant = () => {
        this.setState({
            buttonText: 'Pick another one?',
            rand: Math.floor(Math.random() * this.state.restaurantData.length),
            name: this.state.restaurantData[this.state.rand].name,
            menu: this.state.restaurantData[this.state.rand].menuLink,
            order: this.state.restaurantData[this.state.rand].orderLink,
            logo: this.state.restaurantData[this.state.rand].logoLink,
            buttonVisibility: true
        })
    }

    externalLink = (link) => {
        Linking.openURL(link)
    }

    render() {
        const { restaurantData, isLoading } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.results}>
                    <Image
                        style={styles.logo}
                        resizeMode={'contain'}
                        source={{
                            uri: `${this.state.logo}`
                        }}
                    />
                    <Text style={styles.resultsTitle}>{this.state.name}</Text>

                    <View style={{ flexDirection: 'row' }}>
                        {this.state.buttonVisibility ? (
                            <Pressable
                                style={styles.secondaryButton}
                                onPress={() => {
                                    this.externalLink(this.state.menu)
                                }}>
                                <Text style={styles.secondaryButtonText}>Menu</Text>
                            </Pressable>
                        ) : null}

                        {this.state.buttonVisibility ? (
                            <Pressable
                                style={styles.secondaryButton}
                                onPress={() => {
                                    this.externalLink(this.state.order)
                                }}>
                                <Text style={styles.secondaryButtonText}>Order</Text>
                            </Pressable>
                        ) : null}
                    </View>

                    <Text style={{ textAlign: 'center', fontSize: 10, color: '#FFFFFA' }}>
                        Depending on the restaurant, sometimes the menu and order links
                        lead to the same place.
                    </Text>
                </View>

                <Pressable
                    style={styles.mainButton}
                    onPress={this.PickRestaurant}>
                    <Text style={styles.mainButtonText}>{this.state.buttonText}</Text>
                </Pressable>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#141414',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainButton: {
        flex: 0.5,
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#C1292E',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainButtonText: {
        color: '#FFFFFA',
        fontSize: 25,
        textAlign: 'center'
    },
    results: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 300,
        top: 5,
        bottom: 20
    },
    resultsTitle: {
        color: '#FFFFFA',
        fontSize: 25,
        textAlign: 'center'
    },
    secondaryButton: {
        backgroundColor: '#457B9D',
        borderRadius: 20,
        padding: 10,
        margin: 20
    },
    secondaryButtonText: {
        color: '#FFFFFA',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default RestaurantsScreen;