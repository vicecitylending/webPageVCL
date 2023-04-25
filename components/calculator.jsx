import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import FormInputGroup from "./group";

function Form() {
 
  const [homeValue, setHomeValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterestPaid, setTotalInterestPaid] = useState("");



  function calculateLoanAmount() {
    setLoanAmount(homeValue - downPayment);
    return loanAmount;
  }

  function calculateMonthlyPayment() {
    // Percentage conversion
    function percentageToDecimal(percent) {
      return percent / 12 / 100;
    }

    // years to month conversion
    function yearsToMonths(year) {
      return year * 12;
    }

    function paymenCalculator() {
      if (interestRate != "" && loanDuration != "" && interestRate != 0 && loanDuration != 0) {
        const mPayment = (percentageToDecimal(interestRate) * loanAmount) /(1 - Math.pow(1 + percentageToDecimal(interestRate), -yearsToMonths(loanDuration)))
        return mPayment
      }
      else {
        return 0
      }
    }

    setMonthlyPayment(paymenCalculator);

    return monthlyPayment;
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <FormInputGroup
        text="Home Value "
        icon={<FaDollarSign />}
        placeholder={"Enter the value of the home"}
        value={homeValue}
        onInput={(e) => setHomeValue(e.target.value)}
        onkeyup={calculateLoanAmount}
      />
      <FormInputGroup
        text="Down payment"
        icon={<FaDollarSign />}
        placeholder={"Enter your funds"}
        value={downPayment}
        onInput={(e) => setDownPayment(e.target.value)}
        onkeyup={calculateLoanAmount}
      />
      <FormInputGroup
        text="Loan amount"
        icon={<FaDollarSign />}
        placeholder={"Enter your funds"}
        readOnly={true}
        value={loanAmount}
      />
      <FormInputGroup
        text="Interest Rate %"
        placeholder={"Enter your interest rate"}
        value={interestRate}
        onInput={(e) => setInterestRate(e.target.value)}
        onkeyup={calculateMonthlyPayment}
      />
      <FormInputGroup
        text="Loan Duration (years)"
        placeholder={"Enter the duration of your loan in years"}
        value={loanDuration}
        onInput={(e) => setLoanDuration(e.target.value)}
        onkeyup={calculateMonthlyPayment}
      />
      <h4 className="alert alert-info fw-bold">
        Monthly payment: <FaDollarSign />
        {parseFloat(monthlyPayment.toFixed(2))}
      </h4>

      <button
        type="submit"
        onClick={calculateMonthlyPayment}
        className="bg-orange-400  hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-xs md:text-sm"
      >
        Calculate
      </button>
    </form>
  );
}

export default Form;