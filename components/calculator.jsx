import React, { useState, useEffect, useRef } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { NumericFormat, NumberFormatBase } from 'react-number-format';
import InfoCirclePopup from '../components/atoms/infoCirclePopup'

function MortgageCalculator() {

  const [homeValue, setHomeValue] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [downPaymentPercentage, setDownPaymentPercentage] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanDuration, setLoanDuration] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterestPaid, setTotalInterestPaid] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [propertyTaxValue, setPropertyTaxValue] = useState(0);
  const [homeInsuranceValue, setHomeInsuranceValue] = useState(0);
  const [homeownersAssociationValue, setHomeownersAssociationValue] = useState(0);
  const [monthlyTaxPayment, setMonthlyTaxPayment] = useState(0);
  const [monthlyHomeInsurance, setMonthlyHomeInsurance] = useState(0);
  const [totalMonthly, setTotalMonthly] = useState(0);
  const [loanPayOffDate, setLoanPayOffDate] = useState("");


  //useRef Section
  // const sliderRef = useRef(null);


  // Handlers Section //
  const handleHomeValueChange = (value) => {
    if (value === null || value === undefined || value === '') setHomeValue(0)
    // const formattedValue = value > 1000000 ? 1000000 : value;
    setHomeValue(value);
    calculateLoanAmount();
    // if (sliderRef.current) {
    //   sliderRef.current.value = value;
    // }
  };

  const handleDownPaymentValueChange = (value) => {
    const downPaymentAmount = (value / 100) * homeValue;
    if (homeValue > 0) {
      setDownPaymentPercentage(value)
      setDownPayment(downPaymentAmount);
      calculateLoanAmount();
    }
    setDownPaymentPercentage(value)
    setDownPayment(0);
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

  const handleHomeownersAssociationValueChange = (value) => {
    setHomeownersAssociationValue(value);
  }
// End Handlers Section //


// UseEffects Section //
  useEffect(() => {
    calculateLoanAmount();
  }, [homeValue, downPayment, downPaymentPercentage]);

  useEffect(() => {
    calculateMonthlyPayment();
  }, [interestRate, loanDuration, loanAmount, totalInterestPaid]);

  useEffect(() => {
    calculateTotalPayment();
    }, [monthlyPayment, loanDuration]);

  useEffect(() => {
    calculateMonthlyTaxPayment();
  }, [propertyTaxValue]);

  useEffect(() => {
    calculateMonthlyHomeInsurance();
  }, [homeInsuranceValue]);

  useEffect(() => {
    calculateMonthlyHOA();
  }, [homeownersAssociationValue]);

  useEffect(() => {
    calculateMonthlyPayment();
  }, [monthlyPayment, monthlyTaxPayment, monthlyHomeInsurance, homeownersAssociationValue]);

  useEffect(() => {
    calculateLoanPayOffDate();
  }, [loanDuration]);
// End UseEffects Section //

  function calculateLoanAmount() {
    if(homeValue == 0 || downPaymentPercentage == 0) {
      setDownPayment(0)
      setLoanAmount(0)
      return
    }

    if (downPaymentPercentage > 0 && homeValue > 0) {
    setLoanAmount(homeValue - downPayment);
    const downPaymentAmount = (downPaymentPercentage / 100) * homeValue;
    setDownPayment(downPaymentAmount)

    return loanAmount;
    }
  }

  // Monthly Payment Calculator Function
  function calculateMonthlyPayment() {
    // Percentage conversion
    function percentageToDecimal(percent) {
      return percent / 12 / 100;
    }

    // Years to month conversion
    function yearsToMonths(year) {
      return year * 12;
    }

    function paymentCalculator() {
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
    setMonthlyPayment(paymentCalculator);
    calculateTotalInterestPaid()
    const totalMonthly = monthlyPayment + monthlyTaxPayment + monthlyHomeInsurance + homeownersAssociationValue;
    setTotalMonthly(totalMonthly);
    return monthlyPayment;
  }
  //End Monthly Payment Calculator Function

  // Función para calcular el total del pago con otros impuestos
  function calculateTotalPayment() {
    if (monthlyPayment && loanDuration && loanAmount) {
    let totalPayment = (monthlyPayment * loanDuration * 12)
    setTotalPayment(totalPayment)
    }
    }

    // Función para calcular Monthly Tax Payment
    function calculateMonthlyTaxPayment() {
      const monthlyTaxPayment = propertyTaxValue / 12;
      setMonthlyTaxPayment(monthlyTaxPayment);
    }

    // Función para calcular Monthly Home Insurance
    function calculateMonthlyHomeInsurance() {
      const monthlyHomeInsurance = homeInsuranceValue / 12;
      setMonthlyHomeInsurance(monthlyHomeInsurance);
    }

    function calculateMonthlyHOA() {
      setHomeownersAssociationValue(homeownersAssociationValue);
    }

    function calculateLoanPayOffDate() {
      const currentDate = new Date();
      const payOffDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + (loanDuration*12), currentDate.getDate());
      setLoanPayOffDate(payOffDate.toLocaleDateString("en-US", { month: "long", year: "numeric" }));
    }

  return (
    <div className="flex sm:flex-row flex-col justify-center">
        <div className="basis-1/4 padding bg-white rounded-lg sm:mr-5 mr-0">
          <div className="flex flex-col">
            <div className="padding flex justify-between">
              <div>
                {/* <InfoCirclePopup/> */}
                <label className="text-lg font-bold">Home Value</label>
              </div>
              <div className="w-1/2">
                {/* <input
                  type="number"
                  min={0}
                  max={1000000}
                  id="home-value"
                  className="text-lg"
                  value={homeValue}
                  onChange={(e) => handleHomeValueChange(Number(e.target.value))}
                /> */}
                <NumericFormat
                  thousandSeparator={true}
                  prefix={'$'}
                  decimalScale={0}
                  fixedDecimalScale={true}
                  allowNegative={false}
                  min={0}
                  max={1000000}
                  isAllowed={(values) => {
                    const { floatValue } = values;
                    return floatValue === null || floatValue === undefined || floatValue <= 1000000;
                  }}
                  id="home-value"
                  className="text-lg w-full text-right"
                  value={homeValue}
                  onValueChange={(values) => handleHomeValueChange(values.floatValue)}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <Slider
                value={homeValue}
                min={0}
                max={1000000}
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
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="padding flex justify-between">
              <div>
                <label className="text-lg font-bold">Down Payment</label>
                <label className="text-xs"> (${downPayment.toLocaleString("en")})</label>
              </div> 
              <div className="w-1/4">
                <NumericFormat
                  thousandSeparator={true}
                  suffix={'%'}
                  decimalScale={1}
                  fixedDecimalScale={true}
                  allowNegative={false}
                  min={0}
                  max={50}
                  isAllowed={(values) => {
                    const { floatValue } = values;
                    return floatValue === null || floatValue === undefined || floatValue <= 50;
                  }}
                  id="down-payment"
                  className="text-lg w-full text-right"
                  value={downPaymentPercentage}
                  onValueChange={(values) => handleDownPaymentValueChange(values.floatValue)}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <Slider
                value={downPaymentPercentage}
                min={0}
                max={50}
                step={0.5}
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
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="padding flex justify-between">
              <div>
                <label className="text-lg font-bold">Interest Rate</label>
              </div>
              <div className="w-1/4">
                <NumericFormat
                  thousandSeparator={true}
                  suffix={'%'}
                  decimalScale={1}
                  fixedDecimalScale={true}
                  allowNegative={false}
                  min={0}
                  max={12}
                  isAllowed={(values) => {
                    const { floatValue } = values;
                    return floatValue === null || floatValue === undefined || floatValue <= 12;
                  }}
                  id="interest-rate"
                  className="text-lg w-full text-right"
                  value={interestRate}
                  onValueChange={(values) => handleInterestRateValueChange(values.floatValue)}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <Slider
                value={interestRate}
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
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="padding flex justify-between">
              <div>
                <label className="text-lg font-bold">Loan Duration</label>
              </div>
              <div className="w-1/4">
                <NumericFormat
                  thousandSeparator={true}
                  suffix={' Years'}
                  decimalScale={0}
                  fixedDecimalScale={true}
                  allowNegative={false}
                  min={0}
                  max={30}
                  isAllowed={(values) => {
                    const { floatValue } = values;
                    return floatValue === null || floatValue === undefined || floatValue <= 30;
                  }}
                  id="loan-duration"
                  className="text-lg w-full text-right"
                  value={loanDuration}
                  onValueChange={(values) => handleLoanDurationChange(values.floatValue)}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <Slider
                value={loanDuration}
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
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="padding flex justify-between">
              <div>
                <label className="text-lg font-bold">Property Tax</label>
              </div>
              {/* <div>
                <label className="text-lg">${propertyTaxValue}/yr.</label>
              </div> */}
              <div className="w-1/4">
                <NumericFormat
                  thousandSeparator={true}
                  prefix={'$'}
                  suffix={'/yr.'}
                  decimalScale={0}
                  fixedDecimalScale={true}
                  allowNegative={false}
                  min={0}
                  max={10000}
                  isAllowed={(values) => {
                    const { floatValue } = values;
                    return floatValue === null || floatValue === undefined || floatValue <= 10000;
                  }}
                  id="property-tax"
                  className="text-lg w-full text-right"
                  value={propertyTaxValue}
                  onValueChange={(values) => handlePropertyTaxChange(values.floatValue)}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <Slider
                value={propertyTaxValue}
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
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="padding flex justify-between">
              <div>
                <label className="text-lg font-bold">Home Insurance</label>
              </div>
              <div className="w-1/4">
                <NumericFormat
                  thousandSeparator={true}
                  prefix={'$'}
                  suffix={'/yr.'}
                  decimalScale={0}
                  fixedDecimalScale={true}
                  allowNegative={false}
                  min={0}
                  max={10000}
                  isAllowed={(values) => {
                    const { floatValue } = values;
                    return floatValue === null || floatValue === undefined || floatValue <= 10000;
                  }}
                  id="home-insurance"
                  className="text-lg w-full text-right"
                  value={homeInsuranceValue}
                  onValueChange={(values) => handleHomeInsuranceValueChange(values.floatValue)}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <Slider
                value={homeInsuranceValue}
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
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="padding flex justify-between">
              <div>
                <label className="sm:text-base text-xs font-bold">Homeowners Association HOA</label>
              </div>
              <div className="w-1/3">
                <NumericFormat
                  thousandSeparator={true}
                  prefix={'$'}
                  suffix={'/mo.'}
                  decimalScale={0}
                  fixedDecimalScale={true}
                  allowNegative={false}
                  min={0}
                  max={1000}
                  isAllowed={(values) => {
                    const { floatValue } = values;
                    return floatValue === null || floatValue === undefined || floatValue <= 1000;
                  }}
                  id="homeowners-association"
                  className="text-lg w-full text-right"
                  value={homeownersAssociationValue}
                  onValueChange={(values) => handleHomeownersAssociationValueChange(values.floatValue)}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <Slider
                value={homeownersAssociationValue}
                min={0}
                max={1000}
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
              </div>
            </div>
          </div>
      </div>
      
      <div className="basis-1/4 padding flex-col bg-white rounded-lg sm:ml-5 ml-0 sm:mt-0 mt-5">
        <div>
          <div className="flex mt-8 mb-10 text-black">
            <label className="text-2xl font-bold flex items-center">
             ${parseFloat(monthlyPayment.toFixed(2)).toLocaleString("en")}
            </label>
            <label className=" ml-3 text-sm text-left font-bold flex items-center">
              Principal and Interes Only
            </label>
          </div>
          <div className="flex mt-8 text-black">
            <label className="text-lg  flex items-center">
              Loan Amount: ${loanAmount.toLocaleString("en")}
            </label>
          </div>
          <div className="flex mt-4 text-black">
            <label className="text-lg flex items-center">
              Down Payment: ${parseFloat(downPayment.toFixed(2)).toLocaleString("en")}
            </label>
          </div>
          <div className="flex mt-4 text-black">
            <label className="text-lg  flex items-center">
              Total Interest Paid: ${parseFloat(totalInterestPaid.toFixed(2)).toLocaleString("en")}
            </label>
          </div>
          <div className="flex mt-4 text-black">
            <label className="text-lg flex items-center">
              Monthly Tax Payment: ${parseFloat(monthlyTaxPayment.toFixed(2)).toLocaleString("en")}
            </label>
          </div>
          <div className="flex mt-4 text-black">
            <label className="text-lg flex items-center">
              Monthly Home Insurance: ${parseFloat(monthlyHomeInsurance.toFixed(2)).toLocaleString("en")}
            </label>
          </div>
          <div className="flex mt-4 text-black">
            <label className="text-lg flex items-center">
              Total {loanDuration*12} Payments: ${parseFloat(totalPayment.toFixed(2)).toLocaleString("en")}
            </label>
          </div>
          <div className="flex mt-4 mb-5 text-black">
            <label className="text-lg flex items-center">
              Loan Pay-Off Date: {loanPayOffDate}
            </label>
          </div>
          <div className="flex mt-8 mb-10 text-black">
            <label className="text-2xl flex font-bold items-center">
              ${parseFloat(totalMonthly.toFixed(2)).toLocaleString("en")}
            </label>
            <label className=" ml-3 text-sm text-left font-bold flex items-center">
              Estimated Total Monthly
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MortgageCalculator;