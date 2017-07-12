import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
	const { viewStyle, textStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.header}</Text>
		</View>
	);
};


const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 8,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		elevation: 2,
		position: 'relative'

	},
	textStyle: {
		fontSize: 20
	}
};

export { Header };
