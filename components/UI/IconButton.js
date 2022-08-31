import React from 'react';
import {Pressable, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function IconButton({icon, size, color, onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 20,
    marginHorizontal: 8,
    marginVertical: 2,
    padding: 5,
  },
  pressed: {
    opacity: 0.75,
  },
});
