import './form-input.styles.scss'

type formInputProps = {
    label: string,
} & React.InputHTMLAttributes<HTMLInputElement> 

const FormInput = ({ label, ...otherProps } : formInputProps) => {

    return (
        <div className="group">
            <input className="form-input" {...otherProps} />
            {label ?
                <label className={`${Boolean(otherProps.value && typeof otherProps.value === 'string') ? 'shrink' : ""} form-input-label`}>{label}</label>
                :
                <></>
            }
        </div>
    );
}

export default FormInput;