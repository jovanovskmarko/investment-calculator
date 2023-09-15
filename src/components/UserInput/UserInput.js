import React, { useState } from "react";
import classes from "./UserInput.module.css";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });

    //...
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            onChange={(e) =>
              inputChangeHandler("current-savings", e.target.value)
            }
            value={userInput["current-savings"]}
            id='current-savings'
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            onChange={(e) =>
              inputChangeHandler("yearly-contribution", e.target.value)
            }
            value={userInput["yearly-contribution"]}
            id='yearly-contribution'
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor='expected-return'>
            Expected Interest (%, per year)
          </label>
          <input
            type='number'
            onChange={(e) =>
              inputChangeHandler("expected-return", e.target.value)
            }
            value={userInput["expected-return"]}
            id='expected-return'
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            onChange={(e) => inputChangeHandler("duration", e.target.value)}
            value={userInput["duration"]}
            id='duration'
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type='reset'
          onClick={resetHandler}
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type='submit' className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
