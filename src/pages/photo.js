import React from "react";

import { WebView } from "react-native-webview";

const Photo = ({ navigation }) => (
    <WebView source={{ uri: navigation.state.params.cartoon.image}} />
);

Photo.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.cartoon.character
});

export default Photo;