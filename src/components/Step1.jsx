import React from 'react'

function Step1({setIfContitnueNextStep}) {


  return (
    <div className='form'>
      <h1 className='text-accent-700 fs-primary-heading fw-bold padding-inline-1'>Personal info</h1>
      <p className='fs-body fw-medium text-neutral-200 padding-inline-1'>Please provide your name, email address, and phone number.</p>
      <label className='text-accent-700 padding-inline-1 fs-body' htmlFor="">Name</label>
      <div className='padding-inline-1'>
        <input type="text"
        className='fs-body'
        placeholder='e.g. Stephen King'
        required />
      </div>
    

      <label className='text-accent-700 padding-inline-1 fs-body' htmlFor="">Email Address</label>
      <div className='padding-inline-1'>
        <input type="text"
        className='fs-body'
        placeholder='e.g. stephenking@lorem.com'
        required />
      </div>
    
      <label className='text-accent-700 padding-inline-1 fs-body' htmlFor="">Phone Number</label>
      <div className='padding-inline-1'>
        <input type="text"
        className='fs-body'
        placeholder='e.g. +1 234 567 890'
        required />
      </div>
    </div>
  )
}

export default Step1