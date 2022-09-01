import React from 'react';
import {Pressable, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GlobalStyles} from '../../constants/styles';

function IconButton({icon, size, color, onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}
      android_ripple={{color: GlobalStyles.colors.primary500}}>
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    marginHorizontal: 8,
    marginVertical: 5,
    padding: 5,
    backgroundColor: GlobalStyles.colors.gray700,
    borderWidth: 0.2,
    borderColor: GlobalStyles.colors.primary900,
  },
  pressed: {
    opacity: 0.75,
  },
});
