import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [visitedLessons, setVisitedLessons] = useState(Array(14).fill(false)); // 14 уроков всего

  const handlePress = (segment, index) => {
    const currentIndex = getIndex(segment, index);
    if (currentIndex === 0 || visitedLessons[currentIndex - 1]) {
      const updatedVisitedLessons = [...visitedLessons];
      updatedVisitedLessons[currentIndex] = true;
      setVisitedLessons(updatedVisitedLessons);

      const progressValue = calculateProgress(currentIndex);
      setProgress(progressValue);
      router.push("/details");
    } else {
      alert("Вы не можете перейти к этому уроку, не посетив предыдущий.");
    }
  };

  const calculateProgress = (currentIndex) => {
    const totalItems = 14;
    return ((currentIndex + 1) / totalItems) * 100;
  };

  const getIndex = (segment, index) => {
    const segmentOffsets = [0, 5, 9, 12];
    return segmentOffsets[segment - 1] + index;
  };

  const renderSegment = (segment, color, lessonCount) => (
    <View style={[styles.segment, { backgroundColor: color }]}>
      {Array.from({ length: lessonCount }).map((_, index) => {
        const currentIndex = getIndex(segment, index);
        const isVisited = visitedLessons[currentIndex];
        const translateX = (index - lessonCount / 2) * 20; // Смещение по оси X для создания кривой
        return (
          <TouchableOpacity
            key={`segment${segment}-${index}`}
            style={[
              styles.lesson,
              {
                transform: [{ translateX }],
              },
            ]}
            onPress={() => handlePress(segment, index)}
            disabled={
              !isVisited &&
              currentIndex !== 0 &&
              !visitedLessons[currentIndex - 1]
            }
          >
            <Image
              source={
                isVisited ||
                currentIndex === 0 ||
                visitedLessons[currentIndex - 1]
                  ? require("../assets/step.png")
                  : require("../assets/stepFalse.png")
              }
              style={styles.stepImg}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.progressContent}>
        <Text style={styles.progressText}>
          Your Progress: {progress.toFixed(2)}%
        </Text>
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {renderSegment(1, "red", 5)}
        {renderSegment(2, "blue", 4)}
        {renderSegment(3, "green", 3)}
        {renderSegment(4, "yellow", 2)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  progressContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    zIndex: 1000,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  progressText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
    marginTop: 60,
  },
  segment: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  lesson: {
    marginVertical: 20,
  },
  stepImg: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  text: {
    color: "black",
    fontSize: 20,
  },
});

export default Home;
