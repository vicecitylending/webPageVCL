import React, { useState, useEffect } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
  const [privateMortgageInsuranceValue, setPrivateMortgageInsuranceValue] = useState(0);
  const [homeownersAssociationValue, setHomeownersAssociationValue] = useState(0);
  const [monthlyPMI, setMonthlyPMI] = useState(0);
  const [monthlyTaxPayment, setMonthlyTaxPayment] = useState(0);
  const [monthlyHomeInsurance, setMonthlyHomeInsurance] = useState(0);
  const [totalMonthly, setTotalMonthly] = useState(0);


  const handleHomeValueChange = (value) => {
    setHomeValue(value);
    calculateLoanAmount();
  };

  const handleDownPaymentValueChange = (value) => {
    const downPaymentPercentage = (value / homeValue) * 100;
    if (homeValue > 0 && downPaymentPercentage < 101) {
 
      setDownPaymentPercentage(downPaymentPercentage)
    }
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
  }, [homeValue, downPayment, downPaymentPercentage]);

  useEffect(() => {
    calculateMonthlyPayment();
  }, [interestRate, loanDuration, loanAmount, totalInterestPaid]);

  useEffect(() => {
    calculateTotalPayment();
    }, [monthlyPayment, loanDuration]);

  useEffect(() => {
    calculateMonthlyPMI();
  }, [loanAmount, privateMortgageInsuranceValue]);

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
  }, [monthlyPayment, monthlyPMI, monthlyTaxPayment, monthlyHomeInsurance, homeownersAssociationValue]);

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

    const totalMonthly = monthlyPayment + monthlyPMI + monthlyTaxPayment + monthlyHomeInsurance + homeownersAssociationValue;
    setTotalMonthly(totalMonthly);

    return monthlyPayment;
  }

  // Función para calcular el total del pago
  function calculateTotalPayment() {
    if (monthlyPayment && loanDuration && loanAmount) {
    let totalPayment = (monthlyPayment * loanDuration * 12)
    setTotalPayment(totalPayment)
    }
    }


    function calculateMonthlyPMI() {
      let monthlyPMI = 0;
      if (downPaymentPercentage < 20) {
        monthlyPMI = (loanAmount * privateMortgageInsuranceValue) / 1200;
      }
      setMonthlyPMI(monthlyPMI);
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
    

  return (
    <div className="flex sm:flex-row flex-col justify-center">
        <div className="basis-1/4 padding bg-white rounded-lg sm:mr-5 mr-0">
          <div className="flex flex-col">
            <div className="padding flex justify-between">
              <div>
                <label className="text-lg font-bold">Home Value</label>
              </div>
              <div>
                <label className="text-lg">${homeValue.toLocaleString("en")}</label>
              </div>
            </div>
            <div className="w-full px-4">
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
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="padding flex justify-between">
              <div>
                <label className="text-lg font-bold">Down Payment ({downPaymentPercentage.toFixed(2)}%)</label>
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

          <div className="flex flex-col">
            <div className="padding flex justify-between">
              <div>
                <label className="text-lg font-bold">Interest Rate</label>
              </div>
              <div>
                <label className="text-lg">{interestRate}%</label>
              </div>
            </div>
            <div className="w-full px-4">
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
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="padding flex justify-between">
              <div>
                <label className="text-lg font-bold">Property Tax</label>
              </div>
              <div>
                <label className="text-lg">${propertyTaxValue}/yr.</label>
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
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="padding flex justify-between">
              <div>
                <label className="text-lg font-bold">Private Mortgage Insurance (%)</label>
              </div>
              <div>
                <label className="text-lg">%{privateMortgageInsuranceValue}</label>
              </div>
            </div>
            <div className="w-full px-4">
              <Slider
                min={0}
                max={12.00}
                step={0.100}
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
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="padding flex justify-between">
              <div>
                <label className="text-lg font-bold">Home Insurance</label>
              </div>
              <div>
                <label className="text-lg">${homeInsuranceValue}/yr.</label>
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
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="padding flex justify-between">
              <div>
                <label className="text-lg font-bold">Homeowners Association HOA</label>
              </div>
              <div>
                <label className="text-lg">${homeownersAssociationValue}/mo.</label>
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
              Down Payment:${parseFloat(downPayment.toFixed(2)).toLocaleString("en")}
            </label>
          </div>
          <div className="flex mt-4 text-black">
            <label className="text-lg  flex items-center">
              Total Interest Paid: ${parseFloat(totalInterestPaid.toFixed(2)).toLocaleString("en")}
            </label>
          </div>
          <div className="flex mt-4 text-black">
            <label className="text-lg flex items-center">
              Monthly PMI: ${parseFloat(monthlyPMI.toFixed(2)).toLocaleString("en")}
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
              Loan Pay-Off Date:
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