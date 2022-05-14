import React from 'react';
import {Button, View, Text} from 'react-native';
import styles from './styles';

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button 
                title="Tienda"
                onPress={() => navigation.navigate('Tienda', {
                    id:1,
                    description: 'Aqui estan todos los productos',
                }
            )}
            />
            
        </View>
    );
}

export default HomeScreen;