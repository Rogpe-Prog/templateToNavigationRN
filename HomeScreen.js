import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const HomeScreen = ({ navigation }) => {

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('DetailScreen')}>
            <Text style={styles.title}>Go to DetailScreen...</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    title: {
        color: '#FFF',
        fontSize: 28,
    },
})

export default HomeScreen
