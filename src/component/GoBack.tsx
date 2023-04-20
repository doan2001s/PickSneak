import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const GoBack = ({ title, icon, titleStyle, iconStyle }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ height: 50, backgroundColor: '#000', borderBottomColor: 'silver', borderBottomWidth: 0.3 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          {icon ? (
            <Ionicons name={icon} size={24} color="black" style={iconStyle} />
          ) : (
            <Ionicons name="arrow-back-outline" size={24} color="#eee" style={iconStyle} />
          )}
        </TouchableOpacity>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#eeee',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    left: 10,
    top: 10,
  }
});