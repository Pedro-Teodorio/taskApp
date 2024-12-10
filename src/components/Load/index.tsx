import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

export function Load() {

  return (
    <ActivityIndicator
      color="#60a5fa"
      style={styles.indicator}
    />
  );
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
