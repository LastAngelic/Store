import React from 'react';
// import PropTypes from 'prop-types';
import {Text, View, Button, Image} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

function Box ({id, titulo, description, img, stock}) {

  const navigation = useNavigation();

    return (
        <View style={styles.box}>
            <Image source={{uri:img}} style={{width:50, height:75}}/>
            <Text>{titulo}</Text>
            <Text>{description}</Text>
            <Button
            title="info"
            onPress = {()=>navigation.navigate("Desc",{
              id: id,
              description: description,
              titulo: titulo,
              img: img,
              stock: stock,
            }
            )}
            />
        </View>
    );
}
export default Box;