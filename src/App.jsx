import './App.css';
import desktopImg from './assets/images/bg-sidebar-desktop.svg'
import mobileImg from './assets/images/bg-sidebar-mobile.svg'
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import ThankYouMsg from './components/ThankYouMsg';
function App() {
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
                <li>
                  <span className="list-numbering | bg-accent-300 text-accent-700 fs-200">
                    1
                  </span>
                  <div className='list-text'>
                    <span className='fs-200 text-neutral-200'>STEP 1</span>
                    <p className='text-primary-100 fw-medium'>YOUR INFO</p>
                  </div>
                </li>
                <li>
                  <span className="list-numbering text-primary-100 fs-200">
                    2
                  </span>
                  <div className='list-text'>
                    <span className='fs-200 text-neutral-200'>STEP 2</span>
                    <p className='text-primary-100 fw-medium'>SELECT PLAN</p>
                  </div>
                </li>
                <li>
                  <span className="list-numbering text-primary-100 fs-200">
                    3
                  </span>
                  <div className='list-text'>
                    <span className='fs-200 text-neutral-200'>STEP 3</span>
                    <p className='text-primary-100 fw-medium'>ADD-ONS</p>
                  </div>
                </li>
                <li>
                  <span className="list-numbering text-primary-100 fs-200">
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

              <ThankYouMsg />

              <div className='action-btns | fw-medium'>
                <button className='prev-btn'>
                  Go Back
                </button>
                <button className='next-btn'>
                  Next Step
                </button>
              </div>

              
            </div>
          </div>

        </div>
      </section>
    </main>
    </>
  );
}

export default App;
