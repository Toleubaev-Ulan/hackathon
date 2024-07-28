import React from 'react';
import { View } from 'react-native';
import HajjDatePicker from './HajjDatePicker.jsx';
import { usePushNotifications } from "../useExpoNotifications.jsx";

const Onboard = () => {
  const { expoPushToken, notification } = usePushNotifications();
  const data = JSON.stringify(notification, undefined, 2);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HajjDatePicker />
    </View>
  );
}

export default Onboard;
