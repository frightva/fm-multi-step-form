import React from 'react'

function Step4({ summary_ARRAY }) {
  return (
    <div className='form spacer-bottom'>
      <h1 className='text-accent-700 fs-primary-heading fw-bold padding-inline-1'>Finishing up</h1>
      <p className='fs-body fw-medium text-neutral-200 padding-inline-1'>Double-check everythin looks OK before confirming</p>

      {summary_ARRAY.map((cost) => {
        return (
        <div className='finishing-up-container padding-inline-1 '>
          <div className='border-bottom | flex-space-between '>
            <div>
              <h2 className='fw-medium text-accent-700 fs-450 '>{cost.togglePlan} ({cost.planTime})</h2>
              <button className='change-btn'>Change</button>
            </div>
            <div>
              <span className='fw-medium text-accent-700 fs-450'>${cost.plan}/mo</span>
            </div>
          </div>
  
          <div className='margin-top-1-5'>
            {cost.addOnValue1 ? <div className='flex-space-between'>
              <p className='p-info-text | text-accent-700'>
                Online service
              </p>
              <p>
                +${cost.addOnValue1}/mo
              </p>
            </div> : ''}
            {cost.addOnValue2 ? <div className='flex-space-between'>
              <p className='p-info-text | text-accent-700'>
                Larger Storage
              </p>
              <p>
                +${cost.addOnValue2}/mo
              </p>
            </div> : ''}
            {cost.addOnValue3 ? <div className='flex-space-between'>
              <p className='p-info-text | text-accent-700'>
                Customizable Profile
              </p>
              <p>
                +${cost.addOnValue3}/mo
              </p>
            </div> : ''}
          </div>
  
          <div className='flex-space-between'>
            <p className='p-info-text'>Total (per month)</p>
            <p className='text-accent-500 fw-bold fs-500'>+${cost.totalValue}/mo</p>
          </div>
  
        </div>
        )
      })}

        
    </div>
  )
}

export default Step4