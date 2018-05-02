// author: DELL
// created:2018/4/19 11:42
const initAccount = {
    amount: 100
};
export default (state = initAccount, action = {}) => {
    let nextState = {...state};
    switch (action.type) {
        case 'Recharge':
            nextState.amount += action.amount;
            return nextState;
        case 'Withdraw':

            nextState.amount -= action.amount;
            return nextState;
        default:
            return state;
    }
}
