import * as React from "react";
import { useState } from "react";
  
const Contact = props => {
    const { signUpContent } = props

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
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
            info: { error: false, msg: msg }
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
            info: { error: true, msg: msg }
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
    
      const handleOnSubmit = async e => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        const res = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputs)
        })
        const awaitedStatus = res.status
        const text = await res.text()
        handleResponse(awaitedStatus, text)
      }

    return <div className="mb-12">
              <div className="w-full h-full">
                <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 ">

                  {/* Name Field */}
                  <div className="mb-4">
                    <label className="block text-white text-sm  mb-2" htmlFor="name">
                      {signUpContent.name}
                    </label>
                    <input onChange={handleOnChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text"  placeholder={signUpContent.name_placeholder}></input>
                  </div>

                  {/* Lastname Field */}
                  <div className="mb-6">
                    <label className="block text-white text-sm  mb-2" htmlFor="lastname">
                      {signUpContent.lastname}
                    </label>
                    <input onChange={handleOnChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder={signUpContent.lastname_placeholder}></input>
                  </div>

                  {/* Email Field */}
                  <div className="mb-6">
                    <label className="block text-white text-sm  mb-2" htmlFor="email">
                      {signUpContent.email}
                    </label>
                    <input onChange={handleOnChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder={signUpContent.email_placeholder}></input>
                  </div>

                  {/* Phone Field */}
                  <div className="mb-6">
                    <label className="block text-white text-sm  mb-2" htmlFor="phone">
                      {signUpContent.phone}
                    </label>
                    <input onChange={handleOnChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder={signUpContent.phone_placeholder}></input>
                  </div>

                  {/* Button Field */}
                  <div className="flex items-center justify-between">
                    <button aria-label="Submit" id="submitButton" onClick = {handleOnSubmit} disabled={status.submitting} className="bg-orange-400  hover:bg-orange-600 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline text-xs md:text-sm" type="button">
                      {signUpContent.submit_text}
                    </button>
                    <div className={` text-white  ${!status.submitted && "hidden"}`}>
                      <p>{signUpContent.sent_message_text}</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
}

export default Contact;
