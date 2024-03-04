import React, { useState } from 'react'

function Step3({cost_ARRAY, displayName, checked1, checked2, checked3, setChecked1, setChecked2, setChecked3, addOnValue1, addOnValue2, addOnValue3 }) {



    

  return (
    <div className='form'>
      <h1 className='text-accent-700 fs-primary-heading fw-bold padding-inline-1'>Pick add-ons</h1>
      <p className='fs-body fw-medium text-neutral-200 padding-inline-1'>Add-ons help enhance your gaming experience.</p>
      <div className='add-ons-cards'>
        <div className={checked1 ? 'card active' : 'card'} onClick={(e) =>{setChecked1(!checked1)}}>
          <div className='card-left'>
            <div className='checkbox-container'>
              <input 
              onChange={(e) => {setChecked1(!checked1)}}
              type="checkbox"
              checked={checked1} />
            </div>
            <div className='card-title'>
              <h2 className='fw-medium text-accent-700 fs-450'>Online Service</h2>
              <p className='fw-medium text-neutral-200'>Acces to multiplayer games</p>
            </div>
          </div>
          <div>
            {cost_ARRAY.map((item) => {
              return (
                displayName === item.title &&
                <p key={item.key} className='fw-medium text-accent-500'>
                  {item.addoncost1}
                </p>
                )
              })}
          </div>
        </div>
        <div className={checked2 ? 'card active' : 'card'} onClick={(e) => {setChecked2(!checked2)}}>
          <div className='card-left'>
            <div className='checkbox-container'>
              <input 
              onChange={() => setChecked2(!checked2)}
              type="checkbox"
              checked={checked2} />
            </div>
            <div className='card-title'>
            <h2 className='fw-medium text-accent-700 fs-450'>Larger storage</h2>
            <p className='fw-medium text-neutral-200'>Extra 1TB of cloud save</p>
            </div>
          </div>
          <div>
            {cost_ARRAY.map((item) => {
              return (
                displayName === item.title &&
                <p key={item.key} className='fw-medium text-accent-500'>
                  {item.addoncost2}
                </p>
                )
              })}
          </div>
        </div>
        <div className={checked3 ? 'card active' : 'card'} onClick={() => setChecked3(!checked3)}>
          <div className='card-left'>
            <div className='checkbox-container'>
              <input 
              onChange={() => setChecked3(!checked3)}
              type="checkbox"
              checked={checked3}/>
            </div>
            <div className='card-title'>
            <h2 className='fw-medium text-accent-700 fs-450'>Customizable profile</h2>
            <p className='fw-medium text-neutral-200'>Custom theme on your profile</p>
            </div>
          </div>
          <div>
            {cost_ARRAY.map((item) => {
              return (
                displayName === item.title &&
                <p key={item.key} className='fw-medium text-accent-500'>
                  {item.addoncost3}
                </p>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step3