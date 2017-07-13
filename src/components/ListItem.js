import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, UIManager,LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
	componentWillUpdate() {
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
		LayoutAnimation.spring();
	}
	renderDescription(){
		const { descriptionStyle } = styles;
		const { library, expanded } = this.props;
		if(expanded){	
			return (
			<CardSection>
				<Text style={descriptionStyle}>{library.description}</Text>
			</CardSection>
			);
		}
	}

	render() {
	const { titleStyle } = styles;
	const { id, title, selectedLibraryId } = this.props.library;
	

	return (
		<TouchableWithoutFeedback onPress={()=>this.props.selectLibrary(id)}>
		<View>
			<CardSection>
				<Text style={titleStyle}>{title}</Text>
			</CardSection>
			{this.renderDescription()}
			</View>
		</TouchableWithoutFeedback>
	);
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStateToProps = (state,ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id;
	return { expanded };
};
export default connect(mapStateToProps,actions)(ListItem);