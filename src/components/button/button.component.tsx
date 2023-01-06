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

const Button = ({children, buttonType, inputOptions} : {children : any, buttonType : string, inputOptions?: ButtonInputOptions}) => {

    return ( 
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...inputOptions}> 
            {children}
        </button>
     );
}
 
export default Button;