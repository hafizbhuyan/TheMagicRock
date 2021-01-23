import React, { Component } from 'react';
import {
    Pressable,
    View,
    StyleSheet,
    Text,
    Image,
    ActivityIndicator,
    Modal,
    Linking
} from 'react-native';

class MoviesScreen extends Component {

    state = {
        movieData: [],
        isLoading: true,
        rand: Math.floor(Math.random() * 199), // change the number to the length of the array
        title: '',
        length: '',
        summary: '',
        cast: '',
        trailer: '',
        imdbRating: '',
        releaseYear: '',
        categories: '',
        poster: '',
        buttonText: 'Give me a movie!',
        moreInfoModalVisible: false,
        castModalVisible: false,
        buttonVisibility: false
    }

    componentDidMount() {
        fetch('https://www.drivense.com/the_magic_rock_files/movie_data.json')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ movieData: json.movies });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            })
    }

    PickMovie = () => {
        this.setState({
            buttonText: 'Pick another one?',
            rand: Math.floor(Math.random() * this.state.movieData.length),
            title: this.state.movieData[this.state.rand].title,
            length: 'Length: ' + this.state.movieData[this.state.rand].length,
            summary: this.state.movieData[this.state.rand].summary,
            cast: this.state.movieData[this.state.rand].cast,
            trailer: this.state.movieData[this.state.rand].trailer,
            imdbRating: 'IMDb Rating: ' + this.state.movieData[this.state.rand].imdb_rating + '/10',
            releaseYear: 'Release Year: ' + this.state.movieData[this.state.rand].release_year,
            categories: 'Categories: ' + this.state.movieData[this.state.rand].categories,
            poster: this.state.movieData[this.state.rand].poster,
            buttonVisibility: true
        })
    }

    setMoreInfoModalVisible = (visible) => {
        this.setState({
            moreInfoModalVisible: visible
        })
    }

    setCastModalVisible = (visible) => {
        this.setState({
            castModalVisible: visible
        })
    }

    trailerLink = (link) => {
        Linking.openURL(link)
    }

    render() {
        const { movieData, isLoading, moreInfoModalVisible, castModalVisible } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.results}>
                    <Image
                        style={styles.resultsPoster}
                        resizeMode={'contain'}
                        source={{
                            uri: `${this.state.poster}`
                        }}
                    />
                    <Text style={styles.resultsTitle}>{this.state.title}</Text>
                    <Text style={styles.resultsSummary}>{this.state.summary}</Text>

                    <View style={{ flexDirection: 'row' }}>
                        {this.state.buttonVisibility ? (
                            <Pressable
                                style={styles.secondaryButton}
                                onPress={() => {
                                    this.setMoreInfoModalVisible(true);
                                }}>
                                <Text style={styles.modalText}>More Info</Text>
                            </Pressable>
                        ) : null}

                        {this.state.buttonVisibility ? (
                            <Pressable
                                style={styles.secondaryButton}
                                onPress={() => {
                                    this.setCastModalVisible(true);
                                }}>
                                <Text style={styles.modalText}>Cast</Text>
                            </Pressable>
                        ) : null}

                        {this.state.buttonVisibility ? (
                            <Pressable
                                onPress={() => {
                                    this.trailerLink(this.state.trailer)
                                }}
                                style={styles.secondaryButton}>
                                <Text style={styles.modalText}>IMDb Trailer</Text>
                            </Pressable>
                        ) : null}
                    </View>

                    <Modal
                        animationType={'slide'}
                        transparent={true}
                        visible={moreInfoModalVisible}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>{this.state.length}</Text>
                                <Text style={styles.modalText}>{this.state.imdbRating}</Text>
                                <Text style={styles.modalText}>{this.state.releaseYear}</Text>
                                <Text style={styles.modalText}>{this.state.categories}</Text>

                                <Pressable
                                    style={styles.secondaryButton}
                                    onPress={() => {
                                        this.setMoreInfoModalVisible(!moreInfoModalVisible);
                                    }}>
                                    <Text style={styles.modalText}>Close</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>

                    <Modal
                        animationType={'fade'}
                        transparent={true}
                        visible={castModalVisible}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>{this.state.cast.split(",").join("\n")}</Text>

                                <Pressable
                                    style={styles.secondaryButton}
                                    onPress={() => {
                                        this.setCastModalVisible(!castModalVisible);
                                    }}>
                                    <Text style={styles.modalText}>Close</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>

                <Pressable
                    style={styles.mainButton}
                    onPress={this.PickMovie}>
                    <Text style={styles.mainButtonText}>{this.state.buttonText}</Text>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
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
    modalText: {
        color: "#FFFFFA",
        textAlign: "center"
    },
    modalView: {
        margin: 20,
        backgroundColor: "#628395",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
    },
    results: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    resultsPoster: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 300,
        top: 5,
        bottom: 20
    },
    resultsTitle: {
        top: 10,
        color: '#FFFFFA',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    resultsSummary: {
        fontSize: 15,
        textAlign: 'left',
        color: '#FFFFFA',
        padding: 5,
        top: 10
    },
    secondaryButton: {
        backgroundColor: "#457B9D",
        borderRadius: 20,
        padding: 10,
        margin: 20
    }
})

export default MoviesScreen;