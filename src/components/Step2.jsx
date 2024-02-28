import React, { useState } from 'react'
import card1Img from '../assets/images/icon-arcade.svg'
import card2Img from '../assets/images/icon-advanced.svg'
import card3Img from '../assets/images/icon-pro.svg'

function Step2() {
  const [toggleYM, setToggleYM] = useState(false)
  const [togglePlan, setTogglePlan] = useState('Arcade')



  return (
    <form className='form'>
      <h1 className='text-accent-700 fs-primary-heading fw-bold padding-inline-1'>Select your plan</h1>
      <p className='fs-body fw-medium text-neutral-200 padding-inline-1'>You have the option of monthly or yearly billing.</p>

      <div className='plan-cards'>
        <div onClick={() => setTogglePlan('arcade')} className={togglePlan === 'arcade' ? 'card active' : 'card'}>
          <img src={card1Img} alt="" />
          <div>
            <h2 className='fw-bold text-accent-700 fs-450'>Arcade</h2>
            <p className='fw-medium text-neutral-200'>$9/mo</p>
          </div>
        </div>
        <div onClick={() => setTogglePlan('advanced')} className={togglePlan === 'advanced' ? 'card active' : 'card'}>
          <img src={card2Img} alt="" />
          <div>
            <h2 className='fw-bold text-accent-700 fs-450'>Advanced</h2>
            <p className='fw-medium text-neutral-200'>$12/mo</p>
          </div>
        </div>
        <div onClick={() => setTogglePlan('pro')} className={togglePlan === 'pro' ? 'card active' : 'card'}>
          <img src={card3Img} alt="" />
          <div>
            <h2 className='fw-bold text-accent-700 fs-450'>Pro</h2>
            <p className='fw-medium text-neutral-200'>$15/mo</p>
          </div>
        </div>
      </div>

      <div className='plan-toggle-btn'>
        <p onClick={() => setToggleYM(false)} className={!toggleYM ? 'fw-medium text-accent-700' : 'fw-medium text-neutral-200'}>Monthly</p>
        <button
        onClick={(e) => {
          e.preventDefault()
          setToggleYM(!toggleYM)
        }} className='toggle-btn'>
          <span className={!toggleYM ? 'span-toggle-monthly' : 'span-toggle-yearly'}></span>
        </button>
        <p onClick={() => setToggleYM(true)} className={toggleYM ? 'fw-medium text-accent-700' : 'fw-medium text-neutral-200'}>Yearly</p>
      </div>

    </form>
  )
}

export default Step2