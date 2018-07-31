import React,{ Component } from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
class Message extends Component {
    render(){
        var {message} = this.props;
        return (
            <h3>
                <span className="badge amber darken-2">
                    {message}
                </span>
            </h3>
        )
    }
}
Message.propTypes = {
    message: PropTypes.string.isRequired
}
const mapStateToProps = (state) =>{
    return{
        message: state.message
    }
}
export default connect(mapStateToProps,null)(Message);