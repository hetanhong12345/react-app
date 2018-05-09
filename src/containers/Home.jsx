// author: DELL
// created:2018/4/23 9:48

import React, {Component} from 'react';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'fuck me '
        };
    }

    componentDidMount() {
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps);
        console.log(prevState);
        return {
            name: prevState.name + 'prev'
        };

    }


    render() {
        return (
            <div className="login">
                home hha
                <p>{this.state.name}</p>
            </div>
        );
    }
}

export default Home;
