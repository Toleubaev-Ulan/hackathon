import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const _layout = () => {
  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen name="HajjDatePicker" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="start" options={{ headerShown: false }} />
        <Stack.Screen name="preparation" options={{ headerShown: false }} />

        <Stack.Screen name="umrah" options={{ headerShown: false }} />

        <Stack.Screen name="onboard" options={{ headerShown: false }} />
        <Stack.Screen name="quiz" options={{ headerShown: false }} />

      </Stack>
    </>
  );
};

export default _layout;
