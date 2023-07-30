import { useState } from "react";

const useInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);

  const enteredValueIsValid = validate(enteredValue);
  const IsValid = !enteredValueIsValid && enteredValueIsTouched;

  const inputchangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const InputBlurHandler = (event) => {
    setEnteredValueIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('')
    setEnteredValueIsTouched(false)
  }

  return {
    enteredValue,
    enteredValueIsValid,
    IsValid,
    inputchangeHandler,
    InputBlurHandler,
    reset
  };
};
export default useInput;
