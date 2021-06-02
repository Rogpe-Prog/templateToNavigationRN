import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const DetailScreen = ({ navigation }) => {
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.title}>Go to HomeScreen...</Text>
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

export default DetailScreen
