//MealItemForm 에는 amout(갯수) 정보밖에 없다

import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";

import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [ amountIsValid,setAmountIsValid ] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    //무조건 string으로 나온다
    const enteredAmount = amountInputRef.current.value;
    //convert string to number
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    //여기는 amount정보밖에 없기떄문에 여기서 context 안불러온다. 대신 여기의 state를 
    //parent 에서 props로 내려온 function의 parameter로 넘겨준다!
    props.onAddToCart(enteredAmountNumber);

  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      { !amountIsValid && <p>1개에서 5개 사이의 갯수를 입력해주세요! </p>}
    </form>
  );
};

export default MealItemForm;
