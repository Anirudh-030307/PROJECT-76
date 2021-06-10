import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DailyPicScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>DAILY PIC SCREEN</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

