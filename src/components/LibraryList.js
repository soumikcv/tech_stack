import React from 'react';
import { connect } from 'react-redux';

class LibraryList extend Component {
	render(){
		return;
	}
}

const mapStateToProps = state => {
	return { libraries: state.libraries }
};

export default connect(mapStateToProps)(LibraryList);