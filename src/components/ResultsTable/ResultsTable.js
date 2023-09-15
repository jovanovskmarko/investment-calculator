import React, { useState } from "react";
import classes from "./ResultsTable.module.css";

const ResultsTable = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.yearData.map((el) => {
          return (
            <tr>
              <td>{formatter.format(el.year)}</td>
              <td>{formatter.format(el.savingsEndOfYear)}</td>
              <td>{formatter.format(el.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  el.savingsEndOfYear -
                    props.initialInvestment -
                    el.yearlyContribution * el.year
                )}
              </td>
              <td>
                {formatter.format(
                  props.initialInvestment + el.yearlyContribution * el.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;
