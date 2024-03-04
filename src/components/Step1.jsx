import React from 'react'

function Step1({ name, email, phoneNumb, setName, setEmail, setPhoneNumb }) {


  return (
    <div className='form'>
      <h1 className='text-accent-700 fs-primary-heading fw-bold padding-inline-1'>Personal info</h1>
      <p className='fs-body fw-medium text-neutral-200 padding-inline-1'>Please provide your name, email address, and phone number.</p>
      <label className='text-accent-700 padding-inline-1 fs-body' htmlFor="name">Name</label>
      <div className='padding-inline-1'>
        <input type="text"
        className='fs-body'
        placeholder='e.g. Stephen King'
        id='name'
        required
        value={name}
        onChange={(e) => setName(e.target.value)} />
      </div>
    

      <label className='text-accent-700 padding-inline-1 fs-body' htmlFor="email">Email Address</label>
      <div className='padding-inline-1'>
        <input type="text"
        className='fs-body'
        placeholder='e.g. stephenking@lorem.com'
        id='email'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
      </div>
    
      <label className='text-accent-700 padding-inline-1 fs-body' htmlFor="phoneNumber">Phone Number</label>
      <div className='padding-inline-1'>
        <input type="text"
        className='fs-body'
        placeholder='e.g. +1 234 567 890'
        id='phoneNumber'
        required
        value={phoneNumb}
        onChange={(e) => setPhoneNumb(e.target.value)} />
      </div>
    </div>
  )
}

export default Step1