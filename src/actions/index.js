// author: DELL
// created:2018/4/19 13:29
import $api from '../utils/api';

export let getUserInfo = () => {
    return dispatch => {
        return $api.get('/user/userInfo')
            .then(res => {
                if (res.code == 200) {
                    let {data} = res;
                    dispatch({
                        type: 'Init',
                        status: 200,
                        ...data
                    })
                }
                else {
                    let data = {mobile: 13720057698, name: 'hkk'}
                    dispatch({
                        type: 'Init',
                        status: 401,
                        ...data

                    })
                }
                return res;
            })
    }
};
export let recharge = (amount) => {
    return dispatch => {
        dispatch({
            type: 'Recharge',
            amount
        })
    };
}

export let withdraw = (amount) => {
    return dispatch => {
        dispatch({
            type: 'Withdraw',
            amount
        })
    };
}
