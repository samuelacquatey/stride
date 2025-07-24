import { Clock3 } from 'lucide-react-native';
import { Text, View } from 'react-native';

export default function BusCard({ departure, destination, time, price }: { departure: string; destination: string; time: string; price: string }) {
  return (
    <View className="bg-white p-4 rounded-2xl shadow-md mb-4">
      <Text className="text-lg font-semibold text-gray-800">{departure} ➝ {destination}</Text>
      <View className="flex-row justify-between items-center mt-2">
        <View className="flex-row items-center gap-2">
          <Clock3 size={18} color="#1E3A8A" />
          <Text className="text-gray-600">{time}</Text>
        </View>
        <Text className="text-blue-700 font-bold">GHS {price}</Text>
      </View>
    </View>
  );
}
