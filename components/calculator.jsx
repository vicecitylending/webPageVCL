import React, { useState, useEffect } from "react";
import { FaDollarSign } from "react-icons/fa";
import FormInputGroup from "./group";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function Form() {
 
  const [homeValue, setHomeValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterestPaid, setTotalInterestPaid] = useState("");

  const handleHomeValueChange = (value) => {
    setHomeValue(value);
    calculateLoanAmount();
  };

  const handleDownPaymentValueChange = (value) => {
    setDownPayment(value);
    calculateLoanAmount();
  };

  const handleInterestRateValueChange = (value) => {
    setInterestRate(value);
  };

  const handleLoanDurationChange = (value) => {
    setLoanDuration(value);
  };

  useEffect(() => {
    calculateLoanAmount();
  }, [homeValue, downPayment]);

  useEffect(() => {
    calculateMonthlyPayment();
  }, [interestRate, loanDuration, loanAmount]);


  function calculateLoanAmount() {
    if (downPayment > 0 && homeValue > 0) {
    setLoanAmount(homeValue - downPayment);
    return loanAmount;
    }
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
    <div className="block">
    <div className="flex flex-col items-center">
      <label className="mb-2 text-lg font-bold">Home Value: {homeValue}</label>
      <div className="w-full px-4">
        <Slider
          min={0}
          max={300000}
          step={2500}
          onChange={handleHomeValueChange}
          className="w-full"
          trackStyle={{ backgroundColor: 'purple', height: 5 }}
          handleStyle={{
            transition: "box-shadow 0.7s",
            boxShadow: "",
            backgroundColor: 'purple',
            height: 30,
            width: 30,
            marginTop: -13,
          }}
        />
        <div className="flex justify-between text-sm">
          <span>$0</span>
          <span>$300,000</span>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center">
      <label className="mb-2 text-lg font-bold">Down Payment: {downPayment}</label>
      <div className="w-full px-4">
        <Slider
          min={0}
          max={300000}
          step={2500}
          onChange={handleDownPaymentValueChange}
          className="w-full"
          trackStyle={{ backgroundColor: 'purple', height: 5 }}
          handleStyle={{
            transition: "box-shadow 0.7s",
            boxShadow: "",
            backgroundColor: 'purple',
            height: 30,
            width: 30,
            marginTop: -13,
          }}
        />
        <div className="flex justify-between text-sm">
          <span>$0</span>
          <span>$300,000</span>
        </div>
      </div>
    </div>
    {/* <FormInputGroup
      text="Down payment"
      icon={<FaDollarSign />}
      placeholder="Enter your funds"
      value={downPayment}
      onInput={(e) => setDownPayment(e.target.value)}
      onkeyup={calculateLoanAmount}
    /> */}

  <div className="flex items-center justify-center mt-8 mb-10 text-purple-500">
    <label className="text-lg font-bold flex items-center">
      Loan Amount: <FaDollarSign className="ml-1 mr-2" /> {loanAmount}
    </label>
  </div>
    {/* <FormInputGroup
      text="Loan amount"
      icon={<FaDollarSign />}
      placeholder="Enter your funds"
      readOnly={true}
      value={loanAmount}
    /> */}
    <div className="flex flex-col items-center">
      <label className="mb-2 text-lg font-bold">Interest Rate %: {interestRate}</label>
      <div className="w-full px-4">
        <Slider
          min={0}
          max={12.00}
          step={0.125}
          onChange={handleInterestRateValueChange}
          className="w-full"
          trackStyle={{ backgroundColor: 'purple', height: 5 }}
          handleStyle={{
            transition: "box-shadow 0.7s",
            boxShadow: "",
            backgroundColor: 'purple',
            height: 30,
            width: 30,
            marginTop: -13,
          }}
        />
        <div className="flex justify-between text-sm">
          <span>0%</span>
          <span>12%</span>
        </div>
      </div>
    </div>
    {/* <FormInputGroup
      text="Interest Rate %"
      placeholder="Enter your interest rate"
      value={interestRate}
      onInput={(e) => setInterestRate(e.target.value)}
      onkeyup={calculateMonthlyPayment}
    /> */}
    <div className="flex flex-col items-center">
      <label className="mb-2 text-lg font-bold"> Loan Duration (years): {loanDuration}</label>
      <div className="w-full px-4">
        <Slider
          min={0}
          max={30}
          step={5}
          onChange={handleLoanDurationChange}
          className="w-full"
          trackStyle={{ backgroundColor: 'purple', height: 5 }}
          handleStyle={{
            transition: "box-shadow 0.7s",
            boxShadow: "",
            backgroundColor: 'purple',
            height: 30,
            width: 30,
            marginTop: -13,
          }}
        />
        <div className="flex justify-between text-sm">
          <span>0</span>
          <span>30 Years</span>
        </div>
      </div>
    </div>
    {/* <FormInputGroup
      text="Loan Duration (years)"
      placeholder="Enter the duration of your loan in years"
      value={loanDuration}
      onInput={(e) => setLoanDuration(e.target.value)}
      onkeyup={calculateMonthlyPayment}
    /> */}
  <div className="flex items-center justify-center mt-6 text-purple-500">
    <label className="text-lg font-bold flex items-center">
      Monthly payment: <FaDollarSign className="ml-1 mr-2" /> {parseFloat(monthlyPayment.toFixed(2))}
    </label>
  </div>
    <div className="flex flex-col items-center mt-10">
    {/* <button
      type="submit"
      onClick={calculateMonthlyPayment}
      className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-xs md:text-sm"
    >
      Calculate
    </button> */}
    </div>

  </div>
  );
}

export default Form;