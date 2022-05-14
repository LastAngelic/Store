import React from 'react';
import {StyleSheet, Button, View, Text, Image} from 'react-native';

function DetailsScreen({route, navigation}) {

    const {id, description, stock, titulo, img} = route.params;

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#b2ebf2'}}>

            <View>
              <Image source={{uri: img}} style={{width:50, height:75}} />
              <Text>{titulo}</Text>
              <Text>{description}</Text>
              <Text>{stock}</Text>
            </View>
            
            <View style={styles.containerButton}>
              <Button
              title="Atras"
              onPress={() => navigation.goBack()}
              />

              <Button
              title="Home"
              onPress={() => navigation.popToTop()}
              />
            </View>
            
        </View>  
    )
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
        backgroundColor: '#e5ffff',

        position: 'absolute',
        bottom: 0,
        //margin: 20,
        padding: 5,

        width: '100%',
        height: 50,
    },

    // containerBox: {
    //     flexDirection: 'column',
    //     justifyContent: 'space-around',
    //     alignItems: 'center', 
    //     backgroundColor: '#e5ffff',

    //     margin: 10,
    //     padding: 5,

    //     width: 200,
    //     height: 200,
    // }
})

export default DetailsScreen;