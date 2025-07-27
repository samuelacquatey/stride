import React, { useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type DropdownInputProps = {
  label: string;
  value: string;
  options: string[];
  onSelect: (val: string) => void;
};

export default function DropdownInput({ label, value, options, onSelect }: DropdownInputProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (val: string) => {
    onSelect(val);
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity onPress={() => setOpen(true)} style={styles.dropdown}>
        <Text style={value ? styles.value : styles.placeholder}>
          {value || `Select ${label.toLowerCase()}`}
        </Text>
      </TouchableOpacity>

      <Modal visible={open} animationType="slide" transparent>
        <View style={styles.modalBackground}>
          <View style={styles.modal}>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelect(item)} style={styles.option}>
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setOpen(false)} style={styles.cancelButton}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: { fontWeight: '600', marginBottom: 4 },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  placeholder: { color: '#aaa' },
  value: { color: '#333' },

  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '50%',
  },
  option: { paddingVertical: 12 },
  optionText: { fontSize: 16 },
  cancelButton: { marginTop: 10, alignItems: 'center' },
  cancelText: { color: 'red', fontWeight: 'bold' },
});
