import { StyleSheet } from "react-native-web";
import { View, Text } from "react-native";
import React from "react";

export default function Profile() {
    return (
        <View style={styles.container}>
        <Text>Profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});