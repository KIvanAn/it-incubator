import {Field, reduxForm} from 'redux-form'
import {Input} from '../common/formControls/FormControls'
import {requiredField} from '../../utils/validators'
import {connect} from 'react-redux'
import {login} from '../../redux/auth-reducer'
import {Redirect} from 'react-router-dom'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requiredField]} component={Input} name={'email'} type="text" placeholder={'Login'}/>
            </div>
            <div>
                <Field validate={[requiredField]} component={Input} name={'password'} type="password" placeholder={'Password'}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type="checkbox"/>
                <span>Remember me</span>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        const {email, password, rememberMe} = formData
        props.login(email, password, rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login)