import React, { Component } from 'react'
import { connect } from 'react-redux';

import { callAPI } from '../actions';

// This will be an imported component from the React front end
class ExampleComponent extends Component {
    componentWillMount() {
        // This method will take care of calling the API and storing the result into the Redux store
        this.props.callAPI();
    }

    render() {
        return (
            <div>
                <h1>If you see 'true' below, Redux is working!</h1>
                { this.props.isDummy + '' }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDummy: state.dummy
    }
};

// Here we can put our async Redux actions, so that we can call them directly as props

const mapDispatchToProps = {
    callAPI
}

const ExampleContainer = connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);

export default ExampleContainer;