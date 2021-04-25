import {callLoginApi} from '../APIs/LoginAPI';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({forceRefresh:true});

export function isPageAuthorized(pageName){
    if(!isLogged())
        return false;
    else{
        
    }
    return true;
}

export function isLogged(){
    if(sessionStorage.getItem('userID') && sessionStorage.getItem('userID') !== null){
        return true;
    }else{
        return false;
    }
}

export function handleLogOut(){
    localStorage.clear();
    sessionStorage.clear();
    history.push('/login');
}

export function loginhandler(userName, password){
    if (callLoginApi(userName,password)){
        sessionStorage.setItem("userID",userName);
        history.push('/');
        return true;
    } else {
        sessionStorage.setItem("userID",null);
        return false;
    }
}