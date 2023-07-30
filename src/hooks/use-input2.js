import { useReducer } from "react";

const initialInputSate = {value:'',isTouched:false}

const inputStateReducer = (state,action) => {
    if (action.type === 'INPUT'){
        return {value:action.value,isTouched:state.isTouched}
    }
    else if (action.type === 'BLUR'){
        return {isTouched:true,value:state.value}
    }
    else if (action.type === 'RESET'){
        return {value:'',isTouched:false}


    }
    return initialInputSate
}

const useInput2 = (validate) => {
   
    const [inputSate,dispatchInputReducer] = useReducer(inputStateReducer,initialInputSate)
  
    const valueIsValid = validate(inputSate.value)
    const isValid = !valueIsValid && inputSate.isTouched;
  
    const inputChangeHandler = (event) => {
        dispatchInputReducer({type:'INPUT',value:event.target.value})
    };
  
    const inputBlurHandler = (event) => {
        dispatchInputReducer({type:'BLUR'})
    };

    const reset = () => {
        dispatchInputReducer({type:'RESET'})
    }

  return {
    value:inputSate.value,
    valueIsValid,
    isValid,
    inputChangeHandler,
    inputBlurHandler,
    reset
  }
};

export default useInput2;
