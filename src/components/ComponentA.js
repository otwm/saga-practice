import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {requestContent} from '../core/actions'

class ComponentA extends Component {
    componentDidMount() {
        this.props.requestContent()
    }

    render() {
        return (
            <div>{this.props.contents}</div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {contents: state.content}
}

function mapDispatchToProps(dispatch) {
    return {requestContent: bindActionCreators(requestContent, dispatch)}
}

export default connect
(
    mapStateToProps,
    mapDispatchToProps
)(ComponentA)