// author: DELL
// created:2018/4/18 13:48
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Login extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        this.getUserInfo();
    }

    getUserInfo() {
        let {dispatch} = this.props;
        dispatch(actions.getUserInfo());
    }

    recharge(amount) {
        let {dispatch} = this.props
        dispatch(actions.recharge(amount));
    }

    withdraw(amount) {
        let {dispatch} = this.props
        dispatch(actions.withdraw(amount));
    }

    componentWillReceiveProps(props) {

    }

    componentWillUnmount() {


    }

    render() {
        return (
            <div className="login">
                <p>login</p>
                <button onClick={this.getUserInfo.bind(this)}>dispath userinfo</button>
                <button onClick={this.withdraw.bind(this, 100)}>withdraw 100</button>
                <button onClick={this.recharge.bind(this, 123)}>recharge 123</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Login);
