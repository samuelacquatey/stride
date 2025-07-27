import { TouchableOpacity, Text } from 'react-native';
import { cn } from '../../lib/util';

export default function Button({ label, onPress, className = '' }: { label: string; onPress: () => void; className?: string }) {
  return (
    <TouchableOpacity onPress={onPress} className={cn('bg-[#1E40AF] py-3 rounded-2xl items-center', className)}>
      <Text className="text-white font-semibold text-base">{label}</Text>
    </TouchableOpacity>
  );
}