import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import './sign-up-form.styles.scss'

import Button from "../button/button.component";
import { AuthError, AuthErrorCodes } from "firebase/auth";


const SignUpForm = () => {

    type FormFields = {
        displayName: string,
        email: string,
        password: string,
        confirmPassword: string
    }

    const defaultFormFields = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const response = await createAuthUserWithEmailAndPassword(email, password)
            if (response) {
                await createUserDocumentFromAuth(response.user, { displayName });
                resetFormFields();
                alert("User created successfully");
            }
        } catch (error) {
            if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
                alert("Email already in use");
            }
            else {
                console.log('user creation encountered an error: ', error);
            }
        }
    }

    enum formInputLabel {
        displayName = "Display Name",
        email = "Email",
        password = "Password",
        confirmPassword = "Confirm Password"
    }


    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label={formInputLabel.displayName} type={"text"} required={true} onChange={handleChange} name={"displayName"} value={displayName}/>
                <FormInput label={formInputLabel.email} type={"email"} required={true} onChange={handleChange} name={"email"} value={email}/>
                <FormInput label={formInputLabel.password} type={"password"} required={true} onChange={handleChange} name={"password"} value={password}/>
                <FormInput label={formInputLabel.confirmPassword} type={"password"} required={true} onChange={handleChange} name={"confirmPassword"} value={confirmPassword}/>
                <Button buttonType="default" type={"submit"}>Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;