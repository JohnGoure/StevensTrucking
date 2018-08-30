import React, { Component } from "react";

class SignUpForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handleEmailConfirmation = this.handleEmailConfirmation.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handlePasswordConfirmation = this.handlePasswordConfirmation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    handleEmailConfirmation(event) {
        let error = document.querySelector("#email-confirmation-error");
        if (event.target.value != this.state.email) {
            error.innerHTML = "Email does not match.";
        } else {
            error.innerHTML = "";
        }
    }

    handlePassword(event) {
        this.setState({password: event.target.value})
    }
    handlePasswordConfirmation(event) {
        let error = document.querySelector("#password-confirmation-error");
        if (event.target.value != this.state.password) {
            error.innerHTML = "Passwords do not match.";
        } else {
            error.innerHTML = "";
        }
    }

    handleSubmit(event) {

    }

    render() {
        return (
            <section className="generic-sign-up">
                <h1>Sign Up</h1>
                <form className="sign-up-form">
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input id="email" type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleEmail} required/>
                    <span id="email-error"></span>

                    <label htmlFor="email-confirmation">
                        Email Confirmation:
                    </label>
                    <input id="email-confirmation" type="email" name="email-confirmation" placeholder="Email" required/>
                    <span id="email-confirmation-error"></span>

                    <label htmlFor="password">
                        Password:
                    </label>
                    <input id="password" type="password" name="password" placeholder="Password" required minLength="8" />
                    <span id="password-error"></span>

                    <label htmlFor="password-confirmation">
                        Password Confirmation:
                    </label>
                    <input id="password-confirmation" type="password" name="password-confirmation" placeholder="Password" minLength="8"/>
                    <span id="password-confirmation-error"></span>

                    <input type="submit" value="sumbit" onClick={this.handleSubmit}/>
                </form>
        </section>
        )
    }
}

export default SignUpForm;