import React, { useCallback, useMemo } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  resultMessage: string;
}

export const SearchBar = ({
  searchQuery,
  setSearchQuery,
  resultMessage,
}: SearchBarProps) => {
  const handleChangeText = useCallback(
    (text: string) => {
      setSearchQuery(text);
    },
    [searchQuery]
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Rechercher des produits"
          value={searchQuery}
          onChangeText={handleChangeText}
          returnKeyType="search"
          clearButtonMode="while-editing"
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
      <Text style={styles.resultText}>{resultMessage}</Text>
    </View>
  );
};
