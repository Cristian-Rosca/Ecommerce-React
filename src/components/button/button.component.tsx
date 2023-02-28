import './button.styles.scss'
import { ButtonHTMLAttributes } from 'react'

const BUTTON_TYPE_CLASSES : {[key : string] : string} = {
    google : 'google-sign-in',
    inverted : 'inverted',
    default : ''
} 

export type ButtonInputProps = {
    buttonType? : "google" | "inverted" | "default",
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void 
    isLoading? : boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({children, buttonType = "default", disabled, isLoading} : ButtonInputProps) => {

    return ( 
        <button disabled={disabled} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}> 
            {isLoading ? "Processing..." : children}
        </button>
     );
}
 
export default Button;