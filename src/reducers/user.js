// author: DELL
// created:2018/4/19 11:29

const initUser = {
    uuid: '',
    name: '',
    mobile: '',
    status: ''
}

export default (state = initUser, action = {}) => {
    let nextState = {...state};
    switch (action.type) {
        case 'Init':

            Object.keys(initUser).forEach(key => {
                if (action[key]) {
                    nextState[key] = action[key]
                }
            })
            return nextState;
        case 'Update':
            Object.keys(initUser).forEach(key => {
                if (action[key]) {
                    nextState[key] = action[key]
                }
            })
            return nextState;
        default:
            return nextState;
    }
}
