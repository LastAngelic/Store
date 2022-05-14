import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
import Items from './Items';
import Box from './Box';

function DetailScreen({route, navigation}) {

    const {id, description, stock, img, titulo} = route.params;

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#b2ebf2'}}>

            <View style={styles.containerBox}>
            <Text>{Items.map((item,i)=>(<Box
              key={i}
              item={item.id}
              description={item.description}
              stock={item.stock}
              img={item.image}
              titulo={item.titulo}
            />))}</Text>
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

    containerBox: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center', 
        backgroundColor: '#e5ffff',

        margin: 10,
        padding: 5,

        width: 200,
        height: 200,
    }
})

export default DetailScreen;