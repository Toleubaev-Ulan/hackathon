import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const HajjDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isSkipping, setIsSkipping] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const handleSave = () => {
    if (isSkipping) {
      Alert.alert('Skipped', 'You have chosen to skip entering Hajj date.');
    } else {
      Alert.alert('Hajj Date', `You have chosen: ${date.toDateString()}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Hajj/Umra Date</Text>
      
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      
      <Button
        title={isSkipping ? 'Unskip' : 'Soon, skip'}
        onPress={() => setIsSkipping(!isSkipping)}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default HajjDatePicker;
