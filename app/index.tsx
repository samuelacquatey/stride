import React from 'react';
import { SafeAreaView } from 'react-native';
import { Booking } from '../screens/passenger/Booking';
import { Checkout } from '../screens/passenger/Checkout';
import { Ticket } from '../screens/passenger/Ticket';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView className="flex-1 bg-white">
        <Stack.Navigator initialRouteName="Booking">
          <Stack.Screen name="Booking" component={Booking} options={{ headerShown: false }} />
          <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
          <Stack.Screen name="Ticket" component={Ticket} options={{ headerShown: false }} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
