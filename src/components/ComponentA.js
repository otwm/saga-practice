import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {requestContent} from "../core/actions";

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

function mapStateToProps(state) {
    return {contents: state.content}
}

function mapDispatchToProps(dispatch) {
    return {requestContent: bindActionCreators(()=>{
        return {type: 'FETCH_REQUESTED'};
    }, dispatch)}
}

export default connect
(
    mapStateToProps,
    mapDispatchToProps
)(ComponentA);