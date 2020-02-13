import React, { Fragment } from 'react';
import { newLogin, entryCheck, activeLog } from '../../actions/SessionActions';
import LoginInput from '../../components/Login/Login';
import { connect } from 'react-redux';
import usersList from '../../userJSON/userJSON.json';
import 'antd/dist/antd.css';
import { message } from 'antd';

class LoginForm extends React.Component {

    state = {
        textLogin: '',
        textPassword: '',
    }

    handleInputChangeLogin = ({target: {value}}) => {
        this.setState({
            textLogin: value,
        })
    }

    handleInputChangePassword = ({target: {value}}) => {
        this.setState({
            textPassword: value,
        })
    }

    registrCheck = () =>{
        const { textLogin, textPassword } = this.state;
        let isLogin;
        if (textLogin.length>3 && textPassword.length>3){
            usersList.map((elem) =>{
                if (elem.login === textLogin && elem.password === textPassword) {
                    isLogin = elem.login
                    message.success(`Здравствуйте, ${isLogin}`);
                } 
                return isLogin
            })
        }
        return isLogin
    }


    tokenCheck = () =>{
        const { users, entryCheck, activeLog, newLogin } = this.props
        let user = this.registrCheck()
        let done = false
        if (user){
            users.map((el) => {
                if (user === el.login){
                    entryCheck()
                    activeLog(user)
                    done = true
                }
                return el;
            })
            
            if (!done){
                newLogin((new Date()).getTime(), user, (new Date()).getTime())
                entryCheck()
                activeLog(user)
            }
        }
        else{
            message.error('Проверьте правильность написания логина и пароля');
        }
    }



    render(){
        const { textLogin, textPassword } = this.state;
        return(
            <Fragment>
                <LoginInput 
                handleInputChangePassword={this.handleInputChangePassword} 
                handleInputChangeLogin={this.handleInputChangeLogin}
                textLogin={textLogin}
                textPassword={textPassword}
                tokenCheck={this.tokenCheck}
                />
            </Fragment>
        )
    }
}

export default connect (state => 
({
    users: state.users,
    entry: state.entry,
    activeLogin: state.activeLogin
}), { newLogin, entryCheck, activeLog })(LoginForm)