import { inputOptions } from '../sign-up-form/sign-up-form.component';
import './form-input.styles.scss'

const FormInput = ({ label, inputOptions } : {label : string; inputOptions : inputOptions}) => {

  
    return (
        <div className="group">
            <input className="form-input" {...inputOptions} />
            {label ?

                <label className={`${inputOptions.value.length ? 'shrink' : ""} form-input-label`}>{label}</label>
                :
                <></>
            }
        </div>
    );
}

export default FormInput;