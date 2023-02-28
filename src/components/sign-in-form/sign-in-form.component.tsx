import { useState } from "react";

import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import './sign-in-form.styles.scss'

import Button from "../button/button.component";
// import { getRedirectResult } from "firebase/auth";


const SignInForm = () => {

    type SignInFormFields = {

        email: string,
        password: string,

    }

    const defaultFormFields = {
        email: "",
        password: ""
    }

    const [formFields, setFormFields] = useState<SignInFormFields>(defaultFormFields);
    const { email, password } = formFields;
 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            if (response) {
                resetFormFields();
            }
        } catch (error: any) {
            switch(error.code) {
                case "auth/user-not-found":
                    alert("User not found");
                    break
                case "auth/wrong-password":
                    alert("Wrong password for email");
                    break
                case "auth/invalid-email":
                    alert("No user associated with email");
                    break
                default:
                    console.log('error ocurred during user sign-in: ',error);
            }

            
        }

    }


    enum formInputLabel {
        email = "Email",
        password = "Password",
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }


    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label={formInputLabel.email} type="email" required={true} onChange={handleChange} name={"email"} value={email} />
                <FormInput label={formInputLabel.password} type="password" required={true} onChange={handleChange} name="password" value={password} />
                <div className="buttons-container">

                    <Button buttonType="default" type="submit" >Sign In</Button>
                    <Button buttonType="google" type="button" onClick={signInWithGoogle} >Google Sign In</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;