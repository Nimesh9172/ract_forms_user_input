import { useState } from "react";

const useInput2 = (validate) => {
    const [value, setValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);
  
    const valueIsValid = validate(value)
    const isValid = !valueIsValid && isTouched;
  
    const inputChangeHandler = (event) => {
        setValue(event.target.value);
    };
  
    const inputBlurHandler = (event) => {
      setIsTouched(true);
    };

    const reset = () => {
        setValue('')
        setIsTouched(false)
    }

  return {
    value,
    valueIsValid,
    isValid,
    inputChangeHandler,
    inputBlurHandler,
    reset
  }
};

export default useInput2;
