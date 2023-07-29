import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const inputRef = useRef();

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log(enteredNameIsValid);
    }
  }, [enteredNameIsValid]);

  const inputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);

    if (enteredName.trim().length === 0) {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);
    if (enteredName.trim().length === 0) {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredName("");
    setEnteredNameIsValid(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${"form-control"} ${
          !enteredNameIsValid && enteredNameIsTouched && "invalid"
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputHandler}
          onBlur={nameInputBlurHandler}
          ref={inputRef}
          value={enteredName}
        />
        {!enteredNameIsValid && enteredNameIsTouched && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
