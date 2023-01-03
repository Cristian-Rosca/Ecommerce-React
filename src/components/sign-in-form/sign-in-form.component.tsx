import { ButtonHTMLAttributes, useEffect, useState } from "react";

import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import './sign-in-form.styles.scss'

import Button from "../button/button.component";
import { getRedirectResult } from "firebase/auth";


export type inputOptions = {
    type: string,
    required: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    name: string,
    value: string
}

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

    console.log(formFields);


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
            await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields();
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

    // useEffect(() => {
    //     runGetRedirectResult()
    // }, []);

    // const runGetRedirectResult = async () => { // had to create separate function to run getRedirectResult because useEffect can't be async
    //     const response = await getRedirectResult(auth);
    //     console.log(response);
    //     if (response) {
    //         await createUserDocumentFromAuth(response.user);
    //     }
    // }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        await createUserDocumentFromAuth(user);
    }


    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label={formInputLabel.email} inputOptions={{ type: "email", required: true, onChange: handleChange, name: "email", value: email }} />
                <FormInput label={formInputLabel.password} inputOptions={{ type: "password", required: true, onChange: handleChange, name: "password", value: password }} />
                <div className="buttons-container">

                    <Button buttonType="default" inputOptions={{ type: "submit" }}>Sign In</Button>
                    <Button buttonType="google" inputOptions={{ type: "button", onClick: signInWithGoogle }}>Google Sign In</Button>
                    {/* <Button buttonType="google" inputOptions={{ onClick: signInWithGoogleRedirect }}>Sign In With Google Redirect</Button> */}
                </div>
            </form>
        </div>
    );
}

export default SignInForm;