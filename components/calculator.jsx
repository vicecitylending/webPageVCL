import React, { useState, useEffect } from "react";
import { FaDollarSign } from "react-icons/fa";
import FormInputGroup from "./group";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function MortgageCalculator() {
 
  const [homeValue, setHomeValue] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanDuration, setLoanDuration] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterestPaid, setTotalInterestPaid] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [propertyTaxValue, setPropertyTaxValue] = useState(0);
  const [homeInsuranceValue, setHomeInsuranceValue] = useState(0);
  const [privateMortgageInsuranceValue, setPrivateMortgageInsuranceValue] = useState(0);
  const [homeownersAssociationValue, setHomeownersAssociationValue] = useState(0);

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

  const handlePropertyTaxChange = (value) => {
    setPropertyTaxValue(value);
  };

  const handleHomeInsuranceValueChange = (value) => {
    setHomeInsuranceValue(value);
  }

  const handlePrivateMortgageInsuranceValueChange = (value) => {
    setPrivateMortgageInsuranceValue(value);
  }

  const handleHomeownersAssociationValueChange = (value) => {
    setHomeownersAssociationValue(value);
  }

  useEffect(() => {
    calculateLoanAmount();
  }, [homeValue, downPayment]);

  useEffect(() => {
    calculateMonthlyPayment();
  }, [interestRate, loanDuration, loanAmount, totalInterestPaid]);

  useEffect(() => {
    calculateLoanAmount();
  }, [homeValue, downPayment]);

  useEffect(() => {
    calculateTotalPayment();
    }, [monthlyPayment, loanDuration]);


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

    function calculateTotalInterestPaid() {
      if (monthlyPayment && loanDuration && loanAmount) {
        let totalInterestPaid = (monthlyPayment * loanDuration * 12) - loanAmount
        setTotalInterestPaid(totalInterestPaid)
      }
    }

    setMonthlyPayment(paymenCalculator);
    calculateTotalInterestPaid()

    return monthlyPayment;
  }

  // Función para calcular el total del pago
  function calculateTotalPayment() {
    if (monthlyPayment && loanDuration && loanAmount) {
    let totalPayment = (monthlyPayment * loanDuration * 12)
    setTotalPayment(totalPayment)
    }
    }

  return (
    <div className="bloc bg-white rounded-lg">
    <div className="flex flex-col">
      <div className="padding flex justify-between">
        <div>
          <label className="text-lg font-bold">Home Value</label>
        </div>
        <div>
          <label className="text-lg">${homeValue.toLocaleString("en")}</label>
        </div>
      </div>
      <div className="mb-8 w-full px-4">
        <Slider
          min={0}
          max={600000}
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
          {/* <span>$0</span>
          <span>$300,000</span> */}
        </div>
      </div>
    </div>
    <div className="flex flex-col">
      <div className="padding flex justify-between">
        <div>
          <label className="text-lg font-bold">Down Payment</label>
        </div>
        <div>
          <label className="text-lg">${downPayment.toLocaleString("en")}</label>
        </div>
      </div>
      <div className="w-full px-4">
        <Slider
          min={0}
          max={600000}
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
          {/* <span>$0</span>
          <span>$300,000</span> */}
        </div>
      </div>
    </div>
  <div className="flex items-center justify-center mt-8 mb-10 text-purple-500">
    <label className="text-lg font-bold flex items-center">
      Loan Amount: ${loanAmount.toLocaleString("en")}
    </label>
  </div>
    <div className="flex flex-col">
      <div className="padding flex justify-between">
        <div>
          <label className="text-lg font-bold">Interest Rate</label>
        </div>
        <div>
          <label className="text-lg">{interestRate}%</label>
        </div>
      </div>
      <div className="mb-8 w-full px-4">
        <Slider
          min={0}
          max={12.00}
          step={0.100}
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
          {/* <span>0%</span>
          <span>12%</span> */}
        </div>
      </div>
    </div>
    <div className="flex flex-col">
      <div className="padding flex justify-between">
        <div>
          <label className="text-lg font-bold">Loan Duration</label>
        </div>
        <div>
          <label className="text-lg">{loanDuration.toLocaleString("en")} Years</label>
        </div>
      </div>
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
          {/* <span>0</span>
          <span>30 Years</span> */}
        </div>
      </div>
    </div>
    <div className="flex flex-col">
      <div className="padding flex justify-between">
        <div>
          <label className="text-lg font-bold">Property Tax</label>
        </div>
        <div>
          <label className="text-lg">${propertyTaxValue}</label>
        </div>
      </div>
      <div className="w-full px-4">
        <Slider
          min={0}
          max={10000}
          step={25}
          onChange={handlePropertyTaxChange}
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
          {/* <span>0</span>
          <span>30 Years</span> */}
        </div>
      </div>
    </div>
    <div className="flex flex-col">
      <div className="padding flex justify-between">
        <div>
          <label className="text-lg font-bold">Home Insurance</label>
        </div>
        <div>
          <label className="text-lg">${homeInsuranceValue}</label>
        </div>
      </div>
      <div className="w-full px-4">
        <Slider
          min={0}
          max={10000}
          step={25}
          onChange={handleHomeInsuranceValueChange}
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
          {/* <span>0</span>
          <span>30 Years</span> */}
        </div>
      </div>
    </div>
    <div className="flex flex-col">
      <div className="padding flex justify-between">
        <div>
          <label className="text-lg font-bold">Private Mortgage Insurance (%)</label>
        </div>
        <div>
          <label className="text-lg">${privateMortgageInsuranceValue}</label>
        </div>
      </div>
      <div className="w-full px-4">
        <Slider
          min={0}
          max={10000}
          step={25}
          onChange={handlePrivateMortgageInsuranceValueChange}
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
          {/* <span>0</span>
          <span>30 Years</span> */}
        </div>
      </div>
    </div>
    <div className="flex flex-col">
      <div className="padding flex justify-between">
        <div>
          <label className="text-lg font-bold">Homeowners Association HOA</label>
        </div>
        <div>
          <label className="text-lg">${homeownersAssociationValue}</label>
        </div>
      </div>
      <div className="w-full px-4">
        <Slider
          min={0}
          max={10000}
          step={25}
          onChange={handleHomeownersAssociationValueChange}
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
          {/* <span>0</span>
          <span>30 Years</span> */}
        </div>
      </div>
    </div>
  <div className="flex items-center justify-center mt-6 text-purple-500">
    <label className="text-lg font-bold flex items-center">
      Monthly payment: ${parseFloat(monthlyPayment.toFixed(2)).toLocaleString("en")}
    </label>
  </div>
  <div className="flex items-center justify-center mt-6 text-purple-500">
    <label className="text-lg font-bold flex items-center">
      Total Interest Paid: ${parseFloat(totalInterestPaid.toFixed(2)).toLocaleString("en")}
    </label>
  </div>

  <div className="flex items-center justify-center mt-8 mb-10 text-purple-500">
  <label className="text-lg font-bold flex items-center">
    Total {loanDuration*12} Payments: ${totalPayment.toLocaleString("en")}
  </label>
  </div>
    <div className="flex flex-col items-center mt-10">
 
    </div>

  </div>
  );
}

export default MortgageCalculator;