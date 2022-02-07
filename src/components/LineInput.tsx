import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import theme from '../commons/theme';

type propStyle = {
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  placeholderTextColor?: string;
};

const LineInput = (props: propStyle) => {
  return (
    <TextInput
      style={[styles.inputStyle, props.style]}
      placeholder={props?.placeholder}
      placeholderTextColor={
        props?.placeholderTextColor ?? theme.colors.grayScale300
      }
    />
  );
};

export default LineInput;

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomColor: theme.colors.grayScale200,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
});
