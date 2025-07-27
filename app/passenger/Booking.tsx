// app/passenger/booking.tsx

import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DropdownInput from '../components/DropdownInput';

export default function Booking() {
  const router = useRouter();

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleContinue = () => {
    if (!pickup || !destination || !date) return;
    router.push({
      pathname: '/passenger/Checkout',
      params: { pickup, destination, date: date.toISOString() },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book a Trip</Text>

      <DropdownInput label="Pickup Location" value={pickup} onSelect={setPickup} options={['Accra', 'Tema', 'Kasoa']} />
      <DropdownInput label="Destination" value={destination} onSelect={setDestination} options={['Cape Coast', 'Takoradi', 'Kumasi']} />

      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
        <Text>{date.toDateString()}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}

      <TouchableOpacity onPress={handleContinue} style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { padding: 16, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 16 },
  button: { backgroundColor: '#2e86de', padding: 16, borderRadius: 8 },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});
