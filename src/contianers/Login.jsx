// author: DELL
// created:2018/4/18 13:48
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import $api from '../utils/api';
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

    login() {
        let data = {
            mobile: 13720057698,
            password: 'hxx123456'
        }
        let {dispatch} = this.props
        $api.post('user/login', data)
            .then(res => {
                if (res.code == 200) {
                    dispatch({
                        type: 'Init',
                        ...res.data
                    })
                }
            });
    }

    componentWillReceiveProps(props) {

    }

    componentWillUnmount() {


    }

    render() {
        let {user, account} = this.props;
        return (
            <div className="login">
                <p>login</p>
                <p>username {user.name}</p>
                <p>account {account.amount}</p>
                <button onClick={this.getUserInfo.bind(this)}>dispath userinfo</button>
                <button onClick={this.withdraw.bind(this, 100)}>withdraw 100</button>
                <button onClick={this.recharge.bind(this, 123)}>recharge 123</button>
                <button onClick={this.login.bind(this)}>login</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Login);
