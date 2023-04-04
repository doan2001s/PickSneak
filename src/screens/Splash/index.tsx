import React, { useEffect } from "react";
import { View, Text, Image } from 'react-native';
import { styles } from "./styles";
// import GifImage from '@lowkey/react-native-gif';

export const Spalsh = () => {

  return (
    <View style={styles.box_background}>
      <Image source={require('../../../asset/images/airbnb.gif')}
        resizeMode="contain"
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  )
};