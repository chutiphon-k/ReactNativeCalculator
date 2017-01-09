import React from 'react'
import {
	StyleSheet,
	View,
	Text,
	TextInput
} from 'react-native'

const Input = ({ label, value, onChangeText, placeholder, autoFocus, keyboardType }) => {
	return (
		<View style={styles.containerStyle}>
			<Text style={styles.labelStyle}>{label}</Text>
			<TextInput
		        style={styles.inputStyle}
		        placeholder={placeholder}
		        onChangeText={onChangeText}
		        value={value}
		        autoFocus={autoFocus}
		        keyboardType={keyboardType}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 5
  },
  labelStyle: {
	fontSize: 18,
	paddingLeft: 20,
	flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default Input