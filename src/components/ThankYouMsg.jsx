import React from 'react'
import thanksImg from "../assets/images/icon-thank-you.svg";


function ThankYouMsg() {
  return (
    <div className='form thank-you-msg'>
      <img src={thanksImg} alt="" />
      <h1 className='fw-bold fs-primary-heading text-primary-700'>Thank You!</h1>
      <p className='p-info-text'>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  )
}

export default ThankYouMsg