import { useState } from 'react';
import './App.css';
import desktopImg from './assets/images/bg-sidebar-desktop.svg'
import mobileImg from './assets/images/bg-sidebar-mobile.svg'
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import ThankYouMsg from './components/ThankYouMsg';
import useMultiFormHook from './components/useMultiFormHook';


function App() {

  const cost_ARRAY = [
    //Monthly COST
    {
      title: 'Monthly',
      arcade: '$9/mo',
      advanced: '$12/mo',
      addoncost1: '+$1/mo',
      addoncost2: '+$2/mo',
      addoncost3: '+$2/mo',
      pro: '$15/mo'
    }, 
    //Yearly COST
    {
      title: 'Yearly',
      arcade: '$90/yr',
      advanced: '$120/yr',
      pro: '$150/yr',
      addoncost1: '+$10/yr',
      addoncost2: '+$20/yr',
      addoncost3: '+$20/yr',
      text: '2 months free'
    }
  ]

  const [summary_ARRAY, setSummary_ARRAY] = useState([])

  const [displayName, setDisplayName] = useState('Monthly')
  const [togglePlan, setTogglePlan] = useState('Arcade')
  let plan = 0;

  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumb, setPhoneNumb] = useState('')

  let addOnValue1 = 0; 
  let addOnValue2 = 0; 
  let addOnValue3 = 0; 

  const handleChangeBtn = () => {
    goTo(1)
  }
  
  const { steps, currentStep, stepsLength, handleNextBtn, handlePrevBtn, goTo } = useMultiFormHook([ 
  <Step1
  name={name}
  email={email}
  phoneNumb={phoneNumb}
  setName={setName}
  setEmail={setEmail}
  setPhoneNumb={setPhoneNumb} />, 
  <Step2 cost_ARRAY={cost_ARRAY} displayName={displayName} setDisplayName={setDisplayName} togglePlan={togglePlan}
  setTogglePlan={setTogglePlan} />,
  <Step3 displayName={displayName}
  cost_ARRAY={cost_ARRAY}
  checked1={checked1}
  checked2={checked2}
  checked3={checked3}
  setChecked1={setChecked1}
  setChecked2={setChecked2}
  setChecked3={setChecked3}
  addOnValue1={addOnValue1}
  addOnValue2={addOnValue2}
  addOnValue3={addOnValue3}
  />,
  <Step4
  handleChangeBtn={handleChangeBtn}
  summary_ARRAY={summary_ARRAY} />,
  <ThankYouMsg /> ])




  if(displayName === 'Monthly') {
    if(checked1) {
      addOnValue1 = 1;
    } 
    if(checked2) {
      addOnValue2 = 2;
    } 
    if(checked3) {
      addOnValue3 = 2;
    }
  } else if (displayName === 'Yearly') {
    if(checked1) {
      addOnValue1 = 10;
    } 
    if(checked2) {
      addOnValue2 = 20;
    } 
    if(checked3) {
      addOnValue3 = 20;
    }
  }


  if(displayName === 'Monthly') {
    if(togglePlan === 'arcade') {
      plan = 9;
    } else if (togglePlan === 'advanced') {
      plan = 12;
    } else if (togglePlan === 'pro') {
      plan = 15;
    }
  } else if(displayName === 'Yearly') {
    if(togglePlan === 'arcade') {
      plan = 90;
    } else if (togglePlan === 'advanced') {
      plan = 120;
    } else if (togglePlan === 'pro') {
      plan = 150;
    }
  }
  const totalValue = plan + addOnValue1+addOnValue2+addOnValue3;

  const handleCost = () => {
    if(displayName === 'Monthly') {
      setSummary_ARRAY([{...summary_ARRAY,
        name: name, email: email, phoneNumb:phoneNumb,
        togglePlan: togglePlan, planTime: "Monthly", plan: plan, addOnValue1: addOnValue1, addOnValue2: addOnValue2, addOnValue3: addOnValue3, totalValue: totalValue   }])
    } else {
      setSummary_ARRAY([{...summary_ARRAY,
        name: name, email: email, phoneNumb: phoneNumb,
        togglePlan: togglePlan, planTime: "Yearly", plan: plan, addOnValue1: addOnValue1, addOnValue2: addOnValue2, addOnValue3: addOnValue3, totalValue: totalValue   }])
    }
  }

  
  // <Step1 />, <Step2 />, <Step3 />, <Step4 />, <ThankYouMsg /> 

  const handleSubmit = (e) => {
    e.preventDefault()
    handleCost()
    handleNextBtn()
  }



  return (
    <>
    <main>
      <section className='section'>
        <div className="container">
          <div className="columns">
            <div className='steps-column'>
              <img className='mobile-img' src={mobileImg} alt="" />
              <img className='desktop-img' src={desktopImg} alt="" />
              <ol role='list' className='list-steps'>
                <li className={currentStep === 0 ? 'li-step active' : 'li-step'} onClick={(e) => {
                  goTo(0)}}>
                  <span className="list-numbering | text-accent-700 fs-200">
                    1
                  </span>
                  <div className='list-text'>
                    <span className='fs-200 text-neutral-200'>STEP 1</span>
                    <p className='text-primary-100 fw-medium'>YOUR INFO</p>
                  </div>
                </li>
                <li className={currentStep === 1 ? 'li-step active' : 'li-step'} onClick={(e) => {
                  goTo(1)}}>
                  <span className="list-numbering | fs-200">
                    2
                  </span>
                  <div className='list-text'>
                    <span className='fs-200 text-neutral-200'>STEP 2</span>
                    <p className='text-primary-100 fw-medium'>SELECT PLAN</p>
                  </div>
                </li>
                <li className={currentStep === 2 ? 'li-step active' : 'li-step'} onClick={() => {
                  goTo(2)}}>
                  <span className="list-numbering | fs-200">
                    3
                  </span>
                  <div className='list-text'>
                    <span className='fs-200 text-neutral-200'>STEP 3</span>
                    <p className='text-primary-100 fw-medium'>ADD-ONS</p>
                  </div>
                </li>
                <li className={currentStep === 3 ? 'li-step active' : 'li-step'} onClick={() => {
                  goTo(3)}}>
                  <span className="list-numbering | fs-200">
                    4
                  </span>
                  <div className='list-text'>
                    <span className='fs-200 text-neutral-200'>STEP 4</span>
                    <p className='text-primary-100 fw-medium'>SUMMARY</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className='user-column spacer-bottom padding-top-2'>

              <form onSubmit={(e) => {
                handleSubmit(e)}}>

                {steps }
           
                {currentStep !== stepsLength - 1 && <div className='action-btns | fw-medium'>
                  {currentStep !== 0 && <button type='button' onClick={() => handlePrevBtn()} className='prev-btn'>
                    Go Back
                  </button>}
                  <button type='submit' className='next-btn'>
                    Next Step
                  </button>
                </div>}
           
              </form>

              
            </div>
          </div>

        </div>
      </section>
    </main>
    </>
  );
}

export default App;
