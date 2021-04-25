import { Component} from 'react';
import { connect } from 'react-redux';

export function callLoginApi(userName,password){
    if (userName === 'admin' && password === '123') {
        return true;
    }
    return false;
}

class login extends Component{
    state = {
        user : null
    }
    render(){
        const {userName, password} = this.props;
        if(userName === 'admin' && password === '123'){
            this.setState({user : {userId: 1, userName: userName, name: "Shady Mohsen",
                privelleges: {about: true, contact: true}}});
            this.props.addUserInfo();
            return true;
        }else
            return false;
    }
}

function mapDispatch(dispatch){
    return{
        addUserInfo : () => dispatch({type: 'addUserInfo'})
    }
}

export default connect(null,mapDispatch) (login);