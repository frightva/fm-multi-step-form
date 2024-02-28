import React from 'react'

function Step3() {
  return (
    <div className='form'>
      <h1 className='text-accent-700 fs-primary-heading fw-bold padding-inline-1'>Select your plan</h1>
      <p className='fs-body fw-medium text-neutral-200 padding-inline-1'>You have the option of monthly or yearly billing.</p>

      <div className='add-ons-cards'>
        <div className='card'>
          <div>
            <input type="checkbox" />
            <div className='card-title'>
              <h2 className='fw-medium text-accent-700 fs-450'>Online Service</h2>
              <p className='fw-medium text-neutral-200'>Acces to multiplayer games</p>
            </div>
          </div>
          <div>
            <p className='fw-medium text-accent-500'>+$1/mo</p>
          </div>
        </div>
        <div className='card'>
          <div>
            <input type="checkbox" />
            <div className='card-title'>
            <h2 className='fw-medium text-accent-700 fs-450'>Online Service</h2>
            <p className='fw-medium text-neutral-200'>Acces to multiplayer games</p>
            </div>
          </div>
          <div>
            <p className='fw-medium text-accent-500'>+$1/mo</p>
          </div>
        </div>
        <div className='card'>
          <div>
            <input type="checkbox" />
            <div className='card-title'>
            <h2 className='fw-medium text-accent-700 fs-450'>Online Service</h2>
            <p className='fw-medium text-neutral-200'>Acces to multiplayer games</p>
            </div>
          </div>
          <div>
            <p className='fw-medium text-accent-500'>+$1/mo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step3