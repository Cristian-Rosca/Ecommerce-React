import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../../utils/firebase/firebase.utils";

import SignUpForm from '../../sign-up-form/sign-up-form.component';

const SignIn = () => {
    
    useEffect( () => { 
        runGetRedirectResult()
    }, []);

    const runGetRedirectResult = async () => { // had to create separate function to run getRedirectResult because useEffect can't be async
        const response = await getRedirectResult(auth);
        console.log(response);
        if (response){
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    }
    
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    
    return ( 
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign In With Google</button>
            <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button>
            <SignUpForm/>
        </div>
     );
}
 
export default SignIn;