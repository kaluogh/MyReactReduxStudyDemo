import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {SetFilter} from '../actions.js';

class Link extends Component {

    // constructor(props, context) {
    //     super(props, context);
    // }

    render() {
        const {active, children, onClick} = this.props;

        if (active) {
            return (
                <b className="filter selected">{children}</b>
            )
        } else {
            return (
                <a href='#' className="filter not-selected" onClick={
                    (ev) => { 
                        ev.preventDefault(); 
                        onClick();
                        }
                    }>
                    {children}
                </a>
            )
        }
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(SetFilter(ownProps.filter));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);