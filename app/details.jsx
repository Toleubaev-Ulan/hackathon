import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Details = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Страница с деталями</Text>
      <Button title="Вернуться назад" onPress={() => router.back()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Details;
