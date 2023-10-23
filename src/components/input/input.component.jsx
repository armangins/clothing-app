import react from "react";
import "./input.styles.jsx";
import { Input, InputContainer } from "./input.styles.jsx";

const InputField = ({label, ...props}) => {

    return (
        <InputContainer className="input-wrapper">
            <label htmlFor={label}></label>
            <Input {...props} />
        </InputContainer>
    )
}

export default InputField;