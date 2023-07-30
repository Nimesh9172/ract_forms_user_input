import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    enteredValue:enteredName,
    enteredValueIsValid:enteredNameIsValid,
    IsValid:nameInputIsValid,
    inputchangeHandler:nameinputHandler,
    InputBlurHandler:nameInputBlurHandler,
    reset:resetName,
  } = useInput(value => value.trim() !== '');

  const {
    enteredValue:enteredEmail,
    enteredValueIsValid:enteredEmailIsValid,
    IsValid:emailInputIsValid,
    inputchangeHandler:emailInputHandler,
    InputBlurHandler:emailInputBlurHandler,
    reset:resetEmail,
  } = useInput(value => /\S+@\S+\.\S+/.test(value));


  const formIsValid = enteredNameIsValid &&  enteredEmailIsValid ? true : false;
  
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetName()
    resetEmail()
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${"form-control"} ${nameInputIsValid && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameinputHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={`${"form-control"} ${emailInputIsValid && "invalid"}`}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsValid && <p className="error-text">Enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
