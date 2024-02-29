import React, { useState } from 'react'

function Step3() {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)


  return (
    <div className='form'>
      <h1 className='text-accent-700 fs-primary-heading fw-bold padding-inline-1'>Select your plan</h1>
      <p className='fs-body fw-medium text-neutral-200 padding-inline-1'>You have the option of monthly or yearly billing.</p>
      <div className='add-ons-cards'>
        <div className={checked1 ? 'card active' : 'card'} onClick={() => setChecked1(!checked1)}>
          <div className='card-left'>
            <div className='checkbox-container'>
              <input type="checkbox" checked={checked1} />
            </div>
            <div className='card-title'>
              <h2 className='fw-medium text-accent-700 fs-450'>Online Service</h2>
              <p className='fw-medium text-neutral-200'>Acces to multiplayer games</p>
            </div>
          </div>
          <div>
            <p className='fw-medium text-accent-500'>+$1/mo</p>
          </div>
        </div>
        <div className={checked2 ? 'card active' : 'card'} onClick={() => setChecked2(!checked2)}>
          <div className='card-left'>
            <div className='checkbox-container'>
              <input type="checkbox" checked={checked2} />
            </div>
            <div className='card-title'>
            <h2 className='fw-medium text-accent-700 fs-450'>Larger storage</h2>
            <p className='fw-medium text-neutral-200'>Extra 1TB of cloud save</p>
            </div>
          </div>
          <div>
            <p className='fw-medium text-accent-500'>+$2/mo</p>
          </div>
        </div>
        <div className={checked3 ? 'card active' : 'card'} onClick={() => setChecked3(!checked3)}>
          <div className='card-left'>
            <div className='checkbox-container'>
              <input type="checkbox" checked={checked3}/>
            </div>
            <div className='card-title'>
            <h2 className='fw-medium text-accent-700 fs-450'>Customizable profile</h2>
            <p className='fw-medium text-neutral-200'>Custom theme on your profile</p>
            </div>
          </div>
          <div>
            <p className='fw-medium text-accent-500'>+$2/mo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step3