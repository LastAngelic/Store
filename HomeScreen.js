import React from 'react';
import {Button, View, Text} from 'react-native';
import styles from './styles';

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Text style={styles.text}>Home</Text>
            <Button 
                title="Ir a Detalle"
                onPress={() => navigation.navigate('Details')}
            />

        </View>
    );
}

export default HomeScreen;