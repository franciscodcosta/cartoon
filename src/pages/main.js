import React, { Component} from 'react';
import api from '../services/api';

import {View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default class Main extends Component {
    static navigationOptions = {
        title: "Cartoon App - Quotes"
    };

    state = {
        docs: [],
    };

    componentDidMount() {
        this.loadQuotes();
    };

    loadQuotes = async() => {
        const response = await api.get('/quotes?count=3');
        const docs = response.data;
        this.setState({ docs });
    };

    renderItem =({ item }) => (
        <View style={styles.cartoonContainer}>
            <Text style={styles.cartoonCharacter}> {item.character}</Text>
            <Text style={styles.cartoonQuote}> {item.quote}</Text>
            <TouchableOpacity
                style={styles.cartoonButton} 
                onPress={() => {
                    this.props.navigation.navigate("Photo", { cartoon: item });
                }}
            >
                <Text style={styles.cartoonButtonText}>Veja o Personagem</Text>
            </TouchableOpacity>
        </View>
    )



    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.docs}
                    keyExtractor={item => item.image}
                    renderItem={this.renderItem}
                />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa"
    },
    
    list: {
        padding: 20
    },

    cartoonContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },

    cartoonCharacter: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },

    cartoonQuote: {
        fontSize: 16,
        color: "#999",
        marginTop: 5,
        lineHeight: 24
    },

    cartoonButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552F",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },

    cartoonButtonText: {
        fontSize: 16,
        color: "#DA552F",
        fontWeight: "bold"
    }
});
