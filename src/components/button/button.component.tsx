import './button.styles.scss'

const BUTTON_TYPE_CLASSES : {[key : string] : string} = {
    google : 'google-sign-in',
    inverted : 'inverted',
    default : ''
} 

export type ButtonInputOptions = {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void 
}

const Button = ({children, buttonType, inputOptions, disabled, isLoading} : {children : any, buttonType : string, inputOptions?: ButtonInputOptions, disabled?: boolean, isLoading? : boolean}) => {

    return ( 
        <button disabled={disabled} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...inputOptions}> 
            {isLoading ? "Processing..." : children}
        </button>
     );
}
 
export default Button;