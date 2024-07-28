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

  const renderSegment = (segment, lessonCount, extraImageSide) => (
    <View style={styles.segmentContainer}>
      {extraImageSide === "left" && (
        <View style={styles.extraImgContainer}>
          <Image
            source={require("../assets/image.png")}
            style={styles.extraImg}
          />
        </View>
      )}
      <View style={styles.lessonsContainer}>
        {Array.from({ length: lessonCount }).map((_, index) => {
          const currentIndex = getIndex(segment, index);
          const isVisited = visitedLessons[currentIndex];
          const translateX = 20 * Math.sin(index);
          const rotate = `rotate(${index * 10}deg)`;
          return (
            <TouchableOpacity
              key={`segment${segment}-${index}`}
              style={[
                styles.lesson,
                {
                  transform: [{ translateX }, { rotate }],
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
      {extraImageSide === "right" && (
        <View style={styles.extraImgContainer}>
          <Image
            source={require("../assets/image.png")}
            style={styles.extraImg}
          />
        </View>
      )}
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
        {renderSegment(1, 5, "right")}
        <View style={styles.divider} />
        {renderSegment(2, 4, "left")}
        <View style={styles.divider} />
        {renderSegment(3, 3, "right")}
        <View style={styles.divider} />
        {renderSegment(4, 2, "left")}
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
  segmentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  extraImgContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  lessonsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  lesson: {
    marginVertical: 20,
  },
  stepImg: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  extraImg: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginHorizontal: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "gray",
    width: "80%",
    alignSelf: "center",
    marginVertical: 20,
  },
  text: {
    color: "black",
    fontSize: 20,
  },
});

export default Home;
