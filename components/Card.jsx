import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = ({ text, imgSrc }) => {
  return (
    <View style={styles.card}>
      {imgSrc ? <Image source={imgSrc} style={styles.cardImage} /> : null}
      <Text style={styles.cardText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 160,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginRight: 10
  },
  cardImage: {
    width: 73,
    height: 73,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});

export default Card;
