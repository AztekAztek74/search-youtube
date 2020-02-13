import React from 'react'
import 'antd/dist/antd.css'
import './Login.scss'
import { Form, Icon, Input, Button } from 'antd'
import PropTypes from 'prop-types'

class LoginForm extends React.Component {

  render() {
    const { tokenCheck, handleInputChangePassword, handleInputChangeLogin } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      
    <Form className="log-form">
      <div className='log-form__content'>
        <h1 className='log-form__header'>Вход</h1>
        <div className='log-form__input-container'>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Пожалуйста, введите логин' }],
              initialValue: ''
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
                onChange={handleInputChangeLogin}
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Пожалуйста, введите пароль' },],
              initialValue: ''
            })(
              <Input.Password
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
                onChange={handleInputChangePassword}
              />,
            )}
          </Form.Item>
        </div>
        <Button className='log-form__button' onClick={tokenCheck} type="primary" htmlType="submit">
          Войти
        </Button>
      </div>
    </Form>

      
      
    );
  }
}

LoginForm.propTypes = {
  handleInputChangePassword: PropTypes.func.isRequired,
  handleInputChangeLogin: PropTypes.func.isRequired,
  tokenCheck: PropTypes.func.isRequired,
}

LoginForm.defaultProps = {
  handleInputChangePassword: () => {},
  handleInputChangeLogin: () => {},
  tokenCheck: () => {},
}

const LoginInput = Form.create({ name: 'normal_login' })(LoginForm);
export default LoginInput;