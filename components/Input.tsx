import { TextInput } from 'react-native';

export default function Input({ placeholder, value, onChangeText, className = '' }: { placeholder: string; value: string; onChangeText: (text: string) => void; className?: string }) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      className={`bg-white border border-gray-300 px-4 py-3 rounded-xl text-base ${className}`}
    />
  );
}