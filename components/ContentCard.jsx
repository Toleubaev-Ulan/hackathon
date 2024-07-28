import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ContentCard = ({ img, title, description }) => {
  return (
    <View style={styles.card}>
      <Image source={img} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  image: {
    width: 89,
    height: 89,
    marginRight: 10,
    borderRadius: 25,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 16,
    color: '#777',
  },
});

export default ContentCard;
