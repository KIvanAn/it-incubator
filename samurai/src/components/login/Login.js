import {Field, reduxForm} from 'redux-form'
import {Input} from '../common/formControls/FormControls'
import {requiredField} from '../../utils/validators'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requiredField]} component={Input} name={'login'} type="text" placeholder={'Login'}/>
            </div>
            <div>
                <Field validate={[requiredField]} component={Input} name={'password'} type="text" placeholder={'Password'}/>
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
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login