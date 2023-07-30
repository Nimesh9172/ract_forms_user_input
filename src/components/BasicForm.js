import useInput2 from "../hooks/use-input2";

const BasicForm = () => {
  const {
    value: fNameValue,
    valueIsValid: fNameValueIsValid,
    isValid: fNameIsValid,
    inputChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: fNameReset,
  } = useInput2((value) => value.trim().length !== 0);

  const {
    value: lNameValue,
    valueIsValid: lNameValueIsValid,
    isValid: lNameIsValid,
    inputChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: lNameReset,
  } = useInput2((value) => value.trim().length !== 0);

  const {
    value: emailValue,
    valueIsValid: emailValueIsValid,
    isValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput2((value) => /\S+@\S+\.\S+/.test(value));

  const formIsValid = fNameValueIsValid && lNameValueIsValid && emailValueIsValid;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    fNameReset();
    lNameReset();
    emailReset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={`${"form-control"} ${fNameIsValid && "invalid"}`}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
            value={fNameValue}
          />
        </div>
        <div className={`${"form-control"} ${lNameIsValid && "invalid"}`}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
            value={lNameValue}
          />
        </div>
      </div>
      <div className={`${"form-control"} ${emailIsValid && "invalid"}`}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
