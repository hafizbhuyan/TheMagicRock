import React, { Component } from 'react';
import {
    View,
    Pressable,
    StyleSheet,
    Text,
    Image,
    Modal,
    ActivityIndicator
} from 'react-native';

class TvShowsScreen extends Component {
    state = {
        tvShowData: [],
        isLoading: true,
        rand: Math.floor(Math.random() * 133), // change the number to the length of the array
        title: '',
        summary: '',
        cast: '',
        episodeLength: '',
        releaseYears: '',
        imdbRating: '',
        categories: '',
        seasons: 0,
        episodes: 0,
        poster: '',
        buttonText: 'Give me a TV Show!',
        moreInfoModalVisible: false,
        castModalVisible: false,
        buttonVisibility: false
    }

    componentDidMount() {
        fetch('https://www.drivense.com/the_magic_rock_files/tv_show_data.json')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ tvShowData: json.tv_shows });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            })
    }

    PickTvShow = () => {
        this.setState({
            buttonText: 'Pick another one?',
            rand: Math.floor(Math.random() * this.state.tvShowData.length),
            title: this.state.tvShowData[this.state.rand].title,
            summary: this.state.tvShowData[this.state.rand].summary,
            cast: this.state.tvShowData[this.state.rand].cast,
            episodeLength: 'Average Episode Length: ' + this.state.tvShowData[this.state.rand].episode_length,
            releaseYears: 'Release Years: ' + this.state.tvShowData[this.state.rand].release_years,
            imdbRating: 'IMDb Rating: ' + this.state.tvShowData[this.state.rand].imdb_rating,
            categories: 'Categories: ' + this.state.tvShowData[this.state.rand].categories,
            seasons: 'Total Seasons: ' + this.state.tvShowData[this.state.rand].seasons,
            episodes: 'Total Episodes: ' + this.state.tvShowData[this.state.rand].episodes,
            poster: this.state.tvShowData[this.state.rand].poster,
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

    render() {
        const { tvShowData, isLoading, moreInfoModalVisible, castModalVisible } = this.state;

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
                    </View>

                    <Modal
                        animationType={'slide'}
                        transparent={true}
                        visible={moreInfoModalVisible}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>{this.state.episodeLength}</Text>
                                <Text style={styles.modalText}>{this.state.releaseYears}</Text>
                                <Text style={styles.modalText}>{this.state.imdbRating}</Text>
                                <Text style={styles.modalText}>{this.state.categories}</Text>
                                <Text style={styles.modalText}>{this.state.seasons}</Text>
                                <Text style={styles.modalText}>{this.state.episodes}</Text>

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
                        animationType={'slide'}
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
                    onPress={this.PickTvShow}>
                    <Text style={styles.mainButtonText}>{this.state.buttonText}</Text>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        color: '#F9F7F3',
        fontSize: 25,
        textAlign: 'center'
    },
    modalText: {
        color: '#F9F7F3',
        textAlign: 'center'
    },
    modalView: {
        margin: 20,
        backgroundColor: '#628395',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
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
        color: '#F9F7F3',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    resultsSummary: {
        top: 10,
        fontSize: 15,
        textAlign: 'left',
        color: '#F9F7F3',
        padding: 5
    },
    secondaryButton: {
        backgroundColor: '#457B9D',
        borderRadius: 20,
        padding: 10,
        margin: 20
    }
})

export default TvShowsScreen;