import React from "react"
import userAPI from '../services/users'


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.state = {
            user:'',
            password:'',
            formErrors:{user:'',password:''},
            userValid: false,
            passWordValid: false,
            formValid: false
        }
    }


    componentDidMount() {

    }

    componentWillUnmount() {

    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let userValid = this.state.userValid;
        let passwordValid = this.state.passwordValid;
        switch (fieldName) {
            case 'user':
                userValid = value.length <= 20;
                fieldValidationErrors.user = userValid ? '' : ' is invalid user';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            userValid: userValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.userValid && this.state.passwordValid });
    }
    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }


    handleLogin() {
        let user = { userName: this.state.user, passWord: this.state.password }
        let isValid = this.state.formValid


        if (isValid) {
            let response = userAPI.login(user)
            if (response) {
                this.setState({ user:'',password:'',})
                localStorage.setItem('username', this.state.user);
                localStorage.setItem('password', this.state.password);
                alert('Successful login!')
                this.props.handleCloseModal()
            } else {
                alert('Failed login!')
                this.setState({user:'',password:'',})
            }
        }
    }

    render() {
        if (this.props.renderLogin) {
            return (
                <div className="loginPage">

                    <div className="App">
                        <div className="close"><button onClick={this.props.handleCloseModal}>X</button>
                        </div>
                        <h1>Login</h1>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <div className="input-group">
                                <label htmlFor="user">User Name</label>
                                <input type="text" name="user" placeholder="User Name" value={this.state.user} onChange={this.handleUserInput}/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleUserInput} />
                            </div>
                            <div className="question">
                                Forgot your password?
                            </div>
                            <button onClick={this.handleLogin}>Login</button>
                        </form>
                    </div>
                </div>
            )
        }

        return null
    }
}

export default Login