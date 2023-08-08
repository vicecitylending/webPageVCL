import * as React from "react";
import { useState } from "react";
  
const Contact = props => {
    const { signUpContent } = props

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
        checkboxApproved: false, // New state for the checkbox approval
      })
    

      const [inputs, setInputs] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        subject: `A NEW client has requested information - VICE CITY LENDING`
      })

      const handleResponse = (status, msg) => {
        if (status === 200) {
          console.log(msg)
          setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: msg },
            checkboxApproved: false, // Reset the checkbox approval after successful submission

          })
          setInputs({
            name: '',
            lastname: '',
            email: '',
            phone: '',
            subject: 'A NEW client has requested information - VICE CITY LENDING'
          })
        } else {
          console.log("ERROR")
          console.log(msg)
          setStatus({
            info: { error: true, msg: msg },
            checkboxApproved: false, // Reset the checkbox approval after unsuccessful submission
          })
        }
      }
    
      const handleOnChange = e => {
        e.persist()
        setInputs(prev => ({
          ...prev,
          [e.target.id]: e.target.value
        }))
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        })
      }


      const handleCheckboxChange = (e) => {
        const checkboxValue = e.target.checked;
        setStatus((prevStatus) => ({
          ...prevStatus,
          checkboxApproved: checkboxValue,
        }));
      };

      const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (!status.checkboxApproved) {
          // If the checkbox is not approved, do not proceed with submission
          return;
        }
    
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        const res = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        });
        const awaitedStatus = res.status;
        const text = await res.text();
        handleResponse(awaitedStatus, text);
      };

    return <div>
              <div className="w-full">
                <form className="shadow-md rounded px-8 pt-2 pb-1 ">

                  {/* Name Field */}
                  <div className="mb-2 text-left">
                    <label className="block text-white text-sm mb-2" htmlFor="name">
                      {signUpContent.name}
                    </label>
                    <input onChange={handleOnChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder={signUpContent.name_placeholder}></input>
                  </div>

                  {/* Lastname Field */}
                  <div className="mb-2 text-left">
                    <label className="block text-white text-sm mb-2" htmlFor="lastname">
                      {signUpContent.lastname}
                    </label>
                    <input onChange={handleOnChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder={signUpContent.lastname_placeholder}></input>
                  </div>

                  {/* Email Field */}
                  <div className="mb-2 text-left">
                    <label className="block text-white text-sm mb-2" htmlFor="email">
                      {signUpContent.email}
                    </label>
                    <input onChange={handleOnChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder={signUpContent.email_placeholder}></input>
                  </div>

                  {/* Phone Field */}
                  <div className="mb-2 text-left">
                    <label className="block text-white text-sm mb-2" htmlFor="phone">
                      {signUpContent.phone}
                    </label>
                    <input onChange={handleOnChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder={signUpContent.phone_placeholder}></input>
                  </div>

                  <div className="items-center justify-between mt-4">
                  {/* Button Field */}
                  <div className="flex items-center justify-between lg:flex-row flex-col">
                    <div>
                      <button
                        aria-label="Submit"
                        id="submitButton"
                        onClick={handleOnSubmit}
                        disabled={status.submitting || !status.checkboxApproved}
                        style={{
                          cursor: !status.checkboxApproved ? "not-allowed" : "pointer",
                        }}
                        className="bg-orange-400 hover:bg-orange-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline text-xs md:text-sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        type="button"
                      >
                        {signUpContent.submit_text}
                      </button>
                    </div>

                      {/* Checkbox Field */}
                      <div className="text-left ml-5 sm:w-full w-screen pl-6 pr-12 mt-2">
                        <label className="block text-white text-sm mb-2">
                          <div className="flex flex-row">
                            <div>
                              <input
                                type="checkbox"
                                checked={status.checkboxApproved}
                                onChange={handleCheckboxChange}
                                className="custom-checkbox"
                              />
                            </div>
                            <div className="ml-2 text-justify">
                              {signUpContent.checkbox_text}
                            </div>
                          </div>
                        </label>
                      </div>
                  </div>
                  <div className={` text-white  ${!status.submitted && "hidden"}`}>
                      <p>{signUpContent.sent_message_text}</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
}

export default Contact;
