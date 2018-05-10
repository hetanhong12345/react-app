// author: DELL
// created:2018/4/18 13:48
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Link} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

import $api from '../utils/api';

class Login extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            title: 111
        };
        this.changeTitle = this.changeTitle.bind(this);
    }

    componentDidMount() {
        this.getUserInfo();
    }

    changeTitle() {
        this.setState({
            title: 222
        });
        console.log(this.state.title);
        setTimeout(() => {
            this.setState({
                title: 333
            });
            let otherTitle = this.state.title + 4;
            console.log(otherTitle);
        })
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
        let {dispatch} = this.props;
        dispatch(actions.withdraw(amount));
    }

    login() {
        let data = {
            mobile: 13720057698,
            password: 'hxx123456'
        };
        let {dispatch} = this.props;
        $api.post('user/login', data)
            .then(res => {
                if (res.code === 200) {
                    dispatch({
                        type: 'Init',
                        ...res.data
                    })
                }
            });
    }

    render() {
        let {user, account, route} = this.props;
        console.log(route.routes);
        return (
            <div className="login">
                <p>login</p>
                <p>username {user.name}</p>
                <p>account {account.amount}</p>
                <button onClick={this.getUserInfo.bind(this)}>dispatch userInfo</button>
                <button onClick={this.withdraw.bind(this, 100)}>withdraw 100</button>
                <button onClick={this.recharge.bind(this, 123)}>recharge 123</button>
                <button onClick={this.login.bind(this)}>login</button>
                <button onClick={this.changeTitle}>changeTitle</button>
                <p> routes</p>
                <Link to={'/login/user'} replace={true}>user</Link>
                <span style={{width: '50px', display: 'inline-block'}}>{}</span>
                <Link to={'/login/info'} replace={true}>info</Link>
                <div>
                    {renderRoutes(route.routes)}
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Login);
