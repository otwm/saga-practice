import React, {Component} from "react";
import {connect} from "react-redux";

class ComponentA extends Component {
    componentDidMount() {
        this.props.requestContent();
    }

    render() {
        return (
            <div>{this.props.content}</div>
        );
    }
}

function mapStateToProps({content}) {
    return {content: content}
}

function mapDispatchToProps(dispatch) {
    return {
        requestContent: () => {
            return dispatch({type: 'FETCH_REQUESTED'});
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ComponentA);